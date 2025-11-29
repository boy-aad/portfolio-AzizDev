export default function Nav({ mobile, closeMenu }) {
  const links = [
    { label: "home", id: "hero" },
    { label: "projects", id: "projects" },
    { label: "skills", id: "skills" },
    { label: "contact", id: "contact" },
  ];

  return (
    <ul
      className={
        mobile
          ? "flex flex-col text-white text-center py-4 gap-4 text-xl"
          : "flex flex-row text-white justify-center items-center gap-5 text-2xl"
      }
    >
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            className="hover:text-amber-500"
            onClick={() => mobile && closeMenu()}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
