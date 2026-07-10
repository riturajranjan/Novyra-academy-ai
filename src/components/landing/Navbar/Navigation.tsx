const links = ["Features", "Subjects", "Parents", "Pricing", "About"];

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((item) => (
        <a
          key={item}
          href="#"
          className="text-sm font-medium text-slate-300 transition hover:text-white">
          {item}
        </a>
      ))}
    </nav>
  );
}
