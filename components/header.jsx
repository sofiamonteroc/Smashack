import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = ({ isAbsolute }) => {
  /* width={150}
  height={40}*/
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div
        className={`${
          isAbsolute ? "container lg:max-w-none absolute z-10" : "bg-slate-950"
        } flex justify-between px-8 py-4 items-center`}
      >
        <Link href="/">
          <Image
            className="md:w-60 md:h-60"
            src="/img/logo.webp"
            width={80}
            height={80}
            alt="Imagen del logo"
          />
        </Link>

        <nav className="text-secondary uppercase text-xl">
          <div className="block lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className={`fill-current h-8 w-8 ${
                  isOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className={`fill-current h-3 w-3 cursor-pointer right block lg:hidden place-items-end ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>

            <ul className="flex flex-col lg:space-x-4 lg:flex-row lg:text-xl">
              {/* <Link href="/menu">
                <li className="hover:text-primary">Menu</li>
              </Link> */}

              <Link href="/about">
                <li className="hover:text-primary">About</li>
              </Link>

              <Link href="/locations">
                <li className="hover:text-primary">Locations</li>
              </Link>

              <Link href="/contact">
                <li className="hover:text-primary">Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
