export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-edge flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Natural Edge Media. All rights reserved.
        </p>
        <p className="text-white/60 text-sm">Kalamazoo, MI • hello@naturaledgemedia.net</p>
      </div>
    </footer>
  );
}
