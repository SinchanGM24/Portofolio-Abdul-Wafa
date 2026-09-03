import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Sheet({ open, onOpenChange, children }) {
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {children}
      {open ? (
        <button
          aria-label="Tutup menu"
          className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
      ) : null}
    </>
  );
}

function SheetTrigger({ asChild, children, onClick }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (event) => {
        children.props.onClick?.(event);
        onClick?.(event);
      },
    });
  }
  return <button onClick={onClick}>{children}</button>;
}

function SheetContent({ className, children, onClose }) {
  return (
    <aside
      className={cn(
        "fixed right-0 top-0 z-50 h-dvh w-[min(86vw,360px)] border-l bg-background p-5 shadow-2xl animate-in slide-in-from-right duration-300",
        className
      )}
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm font-bold tracking-wide">Menu</span>
        <Button variant="ghost" size="icon" aria-label="Tutup menu" onClick={onClose}>
          <X />
        </Button>
      </div>
      {children}
    </aside>
  );
}

export { Sheet, SheetTrigger, SheetContent };
