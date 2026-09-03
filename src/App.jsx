import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  PenTool,
  Phone,
} from "lucide-react";
import heroImage from "@/assets/IMG_20260719_175259_880.jpg.jpeg";
import avatarImage from "@/assets/kartun-avatar.png";
import resumeUrl from "../Abdul Wafa - Front-End Developer - Resume.pdf?url";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const email = "f1d022104@student.unram.ac.id";
const phone = "082339901185";
const whatsappLink = "https://wa.me/6282339901185";
const github = "https://github.com/SinchanGM24";
const laloTourismLive = "https://sinchangm24.github.io/LaloTourism/";
const paperUrl = "https://jurnal.tintaemas.id/index.php/ETS/article/view/485";

const navItems = [
  { id: "tentang", label: "Tentang" },
  { id: "project", label: "Project" },
  { id: "perjalanan", label: "Perjalanan" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "proses", label: "Proses" },
  { id: "skill", label: "Skill" },
  { id: "kontak", label: "Kontak" },
];

const projects = [
  {
    title: "LALOTOURISM",
    type: "Project Akhir Mata Kuliah",
    role: "Web Developer",
    year: "2023",
    icon: Database,
    link: laloTourismLive,
    summary:
      "Sistem informasi pariwisata berbasis web untuk membantu memperkenalkan destinasi wisata di Labuhan Lombok kepada masyarakat dan wisatawan.",
    context:
      "Project akademik berkelompok ini diawali dengan wawancara dan observasi untuk memahami kebutuhan penyebaran informasi wisata. Hasilnya diterjemahkan menjadi struktur informasi, fitur, dan website dinamis.",
    problem: "Website wisata perlu menampilkan informasi destinasi dan berita secara lebih rapi, serta memiliki cara sederhana untuk mengelola konten.",
    contribution: [
      "Mengerjakan tampilan halaman website menggunakan HTML dan CSS.",
      "Melakukan wawancara dan observasi untuk mengidentifikasi kebutuhan informasi wisata.",
      "Mengerjakan fitur CRUD untuk berita dan tempat wisata.",
      "Membantu mengubah halaman HTML statis menjadi PHP dinamis.",
      "Menghubungkan website dengan database MySQL menggunakan XAMPP.",
      "Membuat alur dasar admin untuk mengelola konten website.",
    ],
    output: [
      "Halaman website dapat mengambil konten dari database.",
      "Admin memiliki alur dasar untuk mengelola data berita dan destinasi.",
      "Project memiliki live preview publik sebagai bukti tampilan awal website.",
    ],
    result: "Project ini menghasilkan website wisata sederhana dengan alur frontend, backend, database, dan admin dasar.",
    learning:
      "Dari project ini saya belajar dasar fullstack web: membuat tampilan, menghubungkan database, membuat CRUD, dan memahami bagaimana konten bisa dikelola dari sisi admin.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Figma", "CRUD"],
  },
  {
    title: "AkuSehat - Tiket Antrian Online",
    type: "Healthcare Queue System",
    role: "Frontend Developer Intern",
    year: "Feb 2025 - Jun 2025",
    icon: MonitorSmartphone,
    summary:
      "Fitur antrian online untuk membantu pasien mendaftar dan memantau status antrian klinik secara digital.",
    context:
      "Project ini saya kerjakan saat internship sebagai bagian dari pengembangan fitur layanan klinik. Fokus saya berada pada sisi frontend dan bagaimana pengguna mengikuti proses pendaftaran antrian.",
    problem: "Pasien membutuhkan alur pendaftaran yang jelas dan informasi status antrian yang mudah dipahami.",
    contribution: [
      "Mengerjakan halaman pendaftaran antrian klinik.",
      "Membuat tampilan pemantauan status antrian pasien.",
      "Membantu menangani kendala autentikasi dan sinkronisasi data frontend-backend.",
      "Berkolaborasi dalam proses Scrum untuk evaluasi fitur.",
    ],
    output: [
      "Tampilan pendaftaran antrian untuk pasien.",
      "Tampilan status antrian yang membantu pasien mengikuti proses layanan.",
      "Perbaikan kecil pada alur autentikasi dan komunikasi data.",
    ],
    result: "Alur antrian menjadi lebih terstruktur dan status layanan lebih mudah dipantau.",
    learning:
      "Dari project ini saya belajar bekerja dalam lingkungan tim, membaca kebutuhan fitur, dan menyesuaikan UI dengan data dari backend.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git", "Scrum"],
  },
  {
    title: "Sistem Manajemen Distribusi",
    type: "Business Operation System",
    role: "Frontend Developer & System Analyst",
    year: "Nov 2025 - Sekarang",
    icon: Layers3,
    summary:
      "Sistem distributor berbasis web untuk membantu proses bisnis CV. Pridata Jaya melalui alur dan UI yang terstruktur.",
    context:
      "Project ini masih berjalan dan berfokus pada sistem operasional distributor. Peran saya berkaitan dengan memahami proses bisnis, menyusun alur fitur, dan mengerjakan bagian frontend.",
    problem: "Proses bisnis distributor membutuhkan sistem yang sesuai kebutuhan pengguna dan mudah dioperasikan.",
    contribution: [
      "Menganalisis kebutuhan pengguna dan proses bisnis distribusi bersama stakeholder.",
      "Menerjemahkan kebutuhan menjadi fitur, flow sistem, dan rancangan antarmuka.",
      "Menerapkan pendekatan User-Centered Design pada perancangan fitur.",
      "Mengembangkan halaman dan komponen frontend bersama tim backend.",
    ],
    output: [
      "Rancangan alur fitur berdasarkan kebutuhan pengguna.",
      "Struktur halaman dan tampilan frontend untuk proses bisnis utama.",
      "Dokumentasi kebutuhan yang membantu pengembangan tim lebih terarah.",
    ],
    result: "Pengembangan sistem menjadi lebih terarah karena kebutuhan, flow, dan interface disusun sejak awal.",
    learning:
      "Dari project ini saya belajar bahwa frontend tidak hanya soal tampilan, tetapi juga memahami proses pengguna sebelum membuat halaman.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Git", "Figma", "UCD", "Scrum"],
  },
];

const journey = [
  {
    period: "Lulus",
    title: "Lulusan S1 Teknik Informatika",
    place: "Universitas Mataram",
    icon: GraduationCap,
    description:
      "Lulusan S1 Teknik Informatika dengan pembelajaran di bidang pemrograman, basis data, rekayasa perangkat lunak, analisis sistem, perancangan antarmuka, dan pengembangan sistem informasi berbasis web.",
  },
  {
    period: "Sep 2022 - Feb 2023",
    title: "Web Development Trainee",
    place: "BRIDA School Academy, BRIDA NTB",
    icon: GraduationCap,
    description:
      "Membangun fondasi web development melalui HTML, CSS, JavaScript, PHP, basis data, serta latihan pengembangan aplikasi web dari struktur halaman hingga pengelolaan data.",
  },
  {
    period: "Feb 2025 - Jun 2025",
    title: "Frontend Developer Intern",
    place: "Biddokkes Polda NTB · AkuSehat",
    icon: BriefcaseBusiness,
    description:
      "Mengembangkan fitur antrian online, berkolaborasi dengan backend, serta menangani alur autentikasi dan sinkronisasi data dalam proses kerja berbasis Scrum.",
  },
  {
    period: "Nov 2025 - Sekarang",
    title: "Front-End Developer & System Analyst",
    place: "CV. Pridata Jaya · Sistem Manajemen Distribusi Barang",
    icon: BriefcaseBusiness,
    description:
      "Menganalisis kebutuhan dan proses bisnis, merancang flow serta antarmuka, lalu mengimplementasikan frontend sistem dengan pendekatan UCD dan Scrum.",
  },
];

const processSteps = [
  ["1", "Pahami masalah", "Menggali kebutuhan pengguna, proses yang berjalan, dan tujuan project."],
  ["2", "Susun alur", "Menerjemahkan kebutuhan menjadi flow, fitur, dan prioritas halaman."],
  ["3", "Bangun UI", "Membuat tampilan yang rapi, responsif, dan mudah dipahami."],
  ["4", "Integrasikan", "Membantu menghubungkan UI dengan data, autentikasi, atau CRUD sesuai kebutuhan project."],
];

const activities = [
  {
    title: "Paper LaloTourismAgency",
    type: "Call for Paper · Universitas Mataram",
    period: "2023",
    icon: BookOpenCheck,
    link: paperUrl,
    description:
      "Karya ilmiah berbasis project LaloTourism yang membahas website sebagai media informasi destinasi wisata di Labuhan Lombok.",
    detail: [
      "Membantu menyusun latar belakang, metode penelitian, use case diagram, dan abstrak.",
      "Memberikan arahan, melakukan review, dan mengoreksi isi dokumen agar sesuai dengan sistem.",
      "Mendokumentasikan project teknologi dalam format akademik yang terstruktur.",
    ],
  },
  {
    title: "Memasuki Dunia Data: Langkah Awal Menjadi Data Analyst",
    type: "Kepanitiaan / Leadership",
    period: "2024",
    icon: BarChart3,
    description:
      "Kegiatan pelatihan dasar analisis data di lingkungan HMIF. Sebagai ketua panitia, saya mengoordinasikan persiapan hingga pelaksanaan acara.",
    detail: [
      "Mengkoordinasikan seluruh divisi, pembagian tugas, dan tahapan persiapan.",
      "Menjadi penghubung antara panitia, pemateri, dan pihak yang terlibat.",
      "Mengambil keputusan dan membantu menyelesaikan kendala selama persiapan serta pelaksanaan.",
    ],
  },
  {
    title: "Himpunan Mahasiswa Informatika",
    type: "Organisasi / Creative Operation",
    period: "2023 - 2024",
    icon: PenTool,
    description:
      "Aktif dalam kegiatan HMIF sebagai anggota dan Koordinator Divisi PDD pada 2023-2024, serta anggota Divisi Pemberdayaan Anggota pada 2024.",
    detail: [
      "Mengelola publikasi, dokumentasi, dan kebutuhan visual untuk PKMTI 2023, Information 2023, dan PKMTI 2024.",
      "Mengoordinasikan anggota Divisi PDD pada kegiatan PKMTI 2024.",
      "Berkolaborasi merancang dan menjalankan program pengembangan anggota Informatika.",
    ],
  },
];

const skillGroups = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Responsive Web Design"],
  system: ["PHP", "MySQL", "PostgreSQL", "CRUD", "Authentication", "Frontend-Backend Integration", "Git", "GitHub", "Visual Studio Code"],
  product: ["UI/UX", "User-Centered Design", "Requirement Analysis", "System Analysis", "System Flow Design", "Scrum", "Figma", "Canva"],
  collaboration: ["Team Collaboration", "Stakeholder Communication", "Leadership", "Team Coordination", "Problem Solving", "Software Documentation", "Research Writing", "Event Management"],
};

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function usePortfolioVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const background = document.querySelector(".portfolio-background");
    if (!background) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );

    observer.observe(background);
    return () => observer.disconnect();
  }, []);

  return isVisible;
}

function useSectionSurfaceTransition() {
  useEffect(() => {
    const sections = document.querySelectorAll(".portfolio-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle("surface-visible", entry.isIntersecting));
      },
      { threshold: 0.08 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((item) => item.id));

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/60 bg-white/85 shadow-sm backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <button className="flex items-center gap-3 text-left" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            src={avatarImage}
            alt="Avatar Abdul Wafa'"
            width="40"
            height="40"
            className="size-10 rounded-xl border border-emerald-200 object-cover shadow-lg shadow-emerald-900/20"
          />
          <span>
            <span className="block text-sm font-bold leading-none">Abdul Wafa&apos;</span>
            <span className="mt-1 block text-xs text-muted-foreground">Frontend Developer</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground",
                active === item.id && "bg-accent text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href={github} target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={`mailto:${email}`}>
              <Mail /> Email
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild onClick={() => setOpen(true)}>
            <Button className="lg:hidden" variant="outline" size="icon" aria-label="Buka menu">
              <Menu />
            </Button>
          </SheetTrigger>
          {open ? (
            <SheetContent onClose={() => setOpen(false)}>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className="rounded-md px-3 py-3 text-left text-sm font-semibold hover:bg-accent"
                    onClick={() => {
                      scrollToSection(item.id);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <Separator className="my-6" />
              <Button asChild>
                <a href={`mailto:${email}`}>
                  <Mail /> Kirim Email
                </a>
              </Button>
            </SheetContent>
          ) : null}
        </Sheet>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="reveal mb-8 max-w-3xl">
      <Badge variant="secondary" className="mb-4 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}

function Hero({ isImageExpanded, onImageExpandedChange }) {
  const [isProfileCollapsed, setIsProfileCollapsed] = useState(false);

  return (
    <section
      id="tentang"
      className={cn("hero-grid relative scroll-mt-24 overflow-hidden border-b pt-28", isImageExpanded && "image-mode")}
      onMouseLeave={() => {
        setIsProfileCollapsed(false);
        onImageExpandedChange(false);
      }}
    >
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container relative grid gap-10 pb-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pb-24 md:pt-8">
        <div className={cn(
          "hero-profile-card relative z-10",
          isImageExpanded && "rounded-3xl border border-white/15 bg-slate-950/80 p-6 shadow-2xl md:p-8",
          isImageExpanded && isProfileCollapsed && "is-collapsed"
        )}>
          {isImageExpanded ? (
            <button
              type="button"
              className={cn("profile-panel-toggle", isProfileCollapsed && "is-collapsed")}
              onClick={() => setIsProfileCollapsed((collapsed) => !collapsed)}
              aria-label={isProfileCollapsed ? "Tampilkan profil" : "Sembunyikan profil untuk melihat foto"}
              aria-expanded={!isProfileCollapsed}
            >
              {isProfileCollapsed ? <ChevronRight /> : <ChevronLeft />}
            </button>
          ) : null}
          <Badge variant="secondary" className="mb-5 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-emerald-800 shadow-sm backdrop-blur">
            Front-End Developer · System Analyst
          </Badge>
          <h1 className={cn(
            "max-w-3xl text-5xl font-black leading-[1.02] tracking-tight transition-colors duration-200 md:text-7xl",
            isImageExpanded ? "text-white" : "text-slate-950"
          )}>
            Abdul <span className={cn("text-gradient", isImageExpanded && "expanded")}>Wafa&apos;</span>
          </h1>
          <p className={cn("mt-4 max-w-2xl text-xl font-semibold leading-8 transition-colors duration-200", isImageExpanded ? "text-white" : "text-slate-800")}>
            Lulusan Teknik Informatika yang berfokus pada Front-End Development dan pengembangan sistem informasi berbasis web.
          </p>
          <p className={cn("mt-4 max-w-2xl text-base leading-7 transition-colors duration-200", isImageExpanded ? "text-slate-200" : "text-muted-foreground")}>
            Saya mengembangkan antarmuka menggunakan React, Next.js, TypeScript, dan Tailwind CSS. Pengalaman sebagai Front-End
            Developer sekaligus System Analyst membantu saya memahami kebutuhan pengguna, proses bisnis, alur sistem, hingga
            implementasi antarmuka yang dapat digunakan secara nyata.
          </p>
          <div className={cn("mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm transition-colors duration-200", isImageExpanded ? "text-emerald-200" : "text-muted-foreground")}>
            <span className="inline-flex items-center gap-2"><MapPin className="size-4" />Lombok Barat, NTB, Indonesia</span>
            <a
              className="inline-flex items-center gap-2 hover:text-foreground"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Chat WhatsApp dengan ${phone}`}
            >
              <Phone className="size-4" />{phone}
            </a>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button className="w-full sm:w-auto" size="lg" onClick={() => scrollToSection("project")}>
              Lihat Project
            </Button>
            <Button asChild className="w-full sm:w-auto" variant="outline" size="lg">
              <a href={github} target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
            </Button>
            <Button asChild className="w-full sm:w-auto" variant="outline" size="lg">
              <a href={resumeUrl} download="Abdul-Wafa-Resume.pdf">
                <Download /> Unduh CV
              </a>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "hero-photo group relative overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 shadow-2xl shadow-emerald-950/15",
            isImageExpanded && "is-expanded"
          )}
          onMouseEnter={() => onImageExpandedChange(true)}
        >
          <img
            src={heroImage}
            alt="Abdul Wafa' menikmati pemandangan perbukitan dan laut saat matahari terbenam"
            width="3072"
            height="1728"
            decoding="async"
            fetchPriority="high"
            className="h-80 w-full object-cover object-[65%_center] transition duration-700 group-hover:scale-105 md:h-[500px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/5 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Fokus kerja</p>
            <p className="mt-2 text-xl font-bold md:text-2xl">Merancang alur. Membangun antarmuka. Menyelesaikan masalah.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript"].map((item) => (
                <span key={item} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="perjalanan" className="portfolio-section section-pad scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Perjalanan"
          title="Pendidikan dan pengalaman profesional"
          description="Perjalanan belajar dan pengalaman yang membentuk fokus saya dalam frontend development serta analisis sistem."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {journey.map((item) => (
            <Card key={`${item.period}-${item.title}`} className="portfolio-card reveal">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-700">
                    <item.icon />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">{item.period}</Badge>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-1 font-medium text-slate-700">{item.place}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="portfolio-card reveal overflow-hidden">
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-700">
              <project.icon />
            </div>
            <div>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="mt-1">{project.type}</CardDescription>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            <Badge variant="outline">{project.year}</Badge>
            <Badge variant="secondary">{project.role}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-7 text-muted-foreground">{project.summary}</p>
        <div className="mt-5 rounded-lg border bg-white p-4">
          <p className="text-sm font-bold text-slate-950">Konteks project</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.context}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-slate-50 p-4">
            <p className="text-sm font-bold text-slate-950">Masalah</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.problem}</p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <p className="text-sm font-bold text-slate-950">Hasil</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.result}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm font-bold text-slate-950">Kontribusi saya</p>
          <ul className="grid gap-2 text-sm leading-6 text-muted-foreground md:grid-cols-2">
            {project.contribution.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold text-slate-950">Output</p>
            <ul className="grid gap-2 text-sm leading-6 text-muted-foreground">
              {project.output.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border bg-slate-50 p-4">
            <p className="text-sm font-bold text-slate-950">Yang saya pelajari</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.learning}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="skill">
              {item}
            </Badge>
          ))}
        </div>

        {project.link ? (
          <Button asChild className="mt-6">
            <a href={project.link} target="_blank" rel="noreferrer">
              <ExternalLink /> Live Preview
            </a>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}

function Projects() {
  return (
    <section id="project" className="portfolio-section section-pad scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Project"
          title="Project utama"
          description="Setiap project ditulis dengan format yang mudah dibaca: ringkasan, masalah, kontribusi, hasil, dan teknologi."
        />
        <div className="grid gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section id="pengalaman" className="portfolio-section section-pad scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Pengalaman"
          title="Kepemimpinan, dokumentasi, dan kontribusi organisasi"
          description="Beberapa pengalaman di luar project coding yang membentuk cara saya bekerja: menulis dokumentasi project, memimpin kepanitiaan, dan berkontribusi dalam kegiatan organisasi."
        />
        <div className="grid gap-5">
          {activities.map((activity) => (
            <Card key={activity.title} className="portfolio-card reveal">
              <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-3">
                    <div className="grid size-11 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-700">
                      <activity.icon />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{activity.title}</CardTitle>
                      <CardDescription className="mt-1">{activity.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    <Badge variant="outline">{activity.period}</Badge>
                    <Badge variant="secondary">{activity.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm font-bold text-slate-950">Yang saya lakukan</p>
                <ul className="grid gap-2 text-sm leading-6 text-muted-foreground md:grid-cols-2">
                  {activity.detail.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {activity.link ? (
                  <Button asChild className="mt-6">
                    <a href={activity.link} target="_blank" rel="noreferrer">
                      <ExternalLink /> Baca Paper
                    </a>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proses" className="portfolio-section section-pad scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Proses"
          title="Cara saya mengerjakan project"
          description="Alur singkat ini menjelaskan cara saya memahami kebutuhan, menyusun tampilan, lalu menghubungkannya dengan fitur yang dibutuhkan."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([number, title, text]) => (
            <Card key={title} className="reveal">
              <CardHeader>
                <div className="mb-2 grid size-9 place-items-center rounded-md bg-slate-950 text-sm font-black text-white">{number}</div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groupedSkills = useMemo(() => skillGroups, []);

  return (
    <section id="skill" className="portfolio-section section-pad scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Skill"
          title="Teknologi dan skill yang pernah saya gunakan"
          description="Dikelompokkan berdasarkan perannya dalam proses pengembangan, perancangan produk, dan kolaborasi."
        />
        <Tabs defaultValue="frontend" className="reveal">
          <TabsList className="w-full justify-start overflow-x-auto sm:w-auto">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="product">Product</TabsTrigger>
            <TabsTrigger value="collaboration">Kolaborasi</TabsTrigger>
          </TabsList>
          {Object.entries(groupedSkills).map(([key, list]) => (
            <TabsContent key={key} value={key}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((skill) => (
                  <div key={skill} className="flex min-h-14 items-center rounded-lg border bg-white px-4 text-sm font-semibold">
                    {skill}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="reveal mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">Bahasa Indonesia</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Native / Penutur asli</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Bahasa Inggris</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Intermediate / Menengah</p></CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontak" className="section-pad scroll-mt-24 bg-slate-950 text-white">
      <div className="container">
        <div className="reveal grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Badge className="mb-3 bg-white text-slate-950 hover:bg-white">Kontak</Badge>
            <h2 className="text-2xl font-black tracking-normal md:text-4xl">Tertarik melihat detail project saya?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Terbuka untuk berdiskusi tentang peluang Front-End Development, kolaborasi project, dan pengembangan sistem berbasis web.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="size-4" /> Lombok Barat, Nusa Tenggara Barat, Indonesia
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button asChild className="bg-white text-slate-950 hover:bg-slate-100" size="lg">
              <a href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            </Button>
            <Button asChild className="border-white/25 bg-transparent text-white hover:bg-white/10" variant="outline" size="lg">
              <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label={`Chat WhatsApp dengan ${phone}`}>
                <Phone /> {phone}
              </a>
            </Button>
            <Button asChild className="border-white/25 bg-transparent text-white hover:bg-white/10" variant="outline" size="lg">
              <a href={github} target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
            </Button>
            <Button asChild className="border-white/25 bg-transparent text-white hover:bg-white/10" variant="outline" size="lg">
              <a href={resumeUrl} download="Abdul-Wafa-Resume.pdf">
                <Download /> Unduh CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [isHeroExpanded, setIsHeroExpanded] = useState(false);
  const isPortfolioVisible = usePortfolioVisibility();

  useRevealOnScroll();
  useSectionSurfaceTransition();

  return (
    <div className="min-h-screen text-foreground">
      <div
        className={cn("site-background", (isHeroExpanded || isPortfolioVisible) && "is-visible")}
        aria-hidden="true"
      >
        <img src={heroImage} alt="" width="3072" height="1728" decoding="async" />
        <div className="site-background-overlay" />
      </div>
      <Header />
      <main className="relative z-10">
        <Hero isImageExpanded={isHeroExpanded} onImageExpandedChange={setIsHeroExpanded} />
        <div className="portfolio-background">
          <Projects />
          <Journey />
          <Activities />
          <Process />
          <Skills />
          <Contact />
        </div>
      </main>
      <footer className="relative z-10 border-t bg-white py-6">
        <div className="container flex flex-col justify-between gap-3 text-sm text-muted-foreground md:flex-row">
          <p>2026 Abdul Wafa&apos;. Frontend Developer Portfolio.</p>
          <p>Project, proses, skill, dan kontak.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
