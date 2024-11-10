import { Link, useMatches } from "@remix-run/react";
import { useMemo, useState } from "react";

export default function Header() {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];

  const { pathname } = currentMatch;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const links = useMemo(
    () => [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Services",
        href: "/services",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Team",
        href: "/team",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
    []
  );

  const toggleMenu = (value: boolean) => {
    setMenuOpen(value);
  };

  return (
    <nav className="bg-violet-950 shadow-zinc-800 shadow-sm drop-shadow-md relative select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                to={"/"}
                aria-current="page"
                onClick={() => toggleMenu(false)}
              >
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Arcane Hut"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <Link
                    to={link.href}
                    key={link.title}
                    className={
                      link.href === pathname
                        ? "rounded-md bg-yellow-500 px-3 py-2 text-sm font-medium text-dark text-violet-950"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-purple-700 hover:text-white"
                    }
                    aria-current="page"
                    onClick={() => toggleMenu(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md bg-purple-700 p-2 text-gray-100 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => toggleMenu(!isMenuOpen)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`${!isMenuOpen && "hidden"} md:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {links.map((link) => (
            <Link
              to={link.href}
              key={link.title}
              className={
                link.href === pathname
                  ? "block rounded-md bg-yellow-500 px-3 py-2 text-base font-medium text-dark"
                  : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-purple-700 hover:text-white"
              }
              aria-current="page"
              onClick={() => toggleMenu(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
