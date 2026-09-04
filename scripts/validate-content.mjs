import { readFile } from "node:fs/promises";

const names = ["site", "professional", "adventure"];
const documents = Object.fromEntries(await Promise.all(names.map(async name => [name, JSON.parse(await readFile(new URL(`../public/content/${name}.json`, import.meta.url), "utf8"))])));
const fail = message => { throw new Error(`Validasi konten: ${message}`); };
for (const [name, doc] of Object.entries(documents)) {
  if (doc.schemaVersion !== 1) fail(`${name}.json memerlukan schemaVersion 1`);
  if (!doc.updatedAt || Number.isNaN(Date.parse(doc.updatedAt))) fail(`${name}.json memiliki updatedAt tidak valid`);
}
const collections = [documents.professional.projects, documents.professional.journey, documents.professional.activities, documents.professional.process, documents.professional.skills, documents.professional.languages, documents.adventure.categories, documents.adventure.journeys, documents.adventure.gallery];
for (const collection of collections) {
  const ids = new Set();
  for (const item of collection || []) { if (!item.id) fail("item koleksi tanpa ID"); if (ids.has(item.id)) fail(`ID ganda: ${item.id}`); ids.add(item.id); }
}
for (const trip of documents.adventure.journeys || []) if (!trip.title || !trip.location || !trip.date || !trip.alt || !trip.coverImage) fail(`perjalanan ${trip.id} belum lengkap`);
for (const photo of documents.adventure.gallery || []) if (!photo.alt || !photo.image) fail(`media ${photo.id} membutuhkan image dan alt`);
console.log("Konten valid:", names.join(", "));
