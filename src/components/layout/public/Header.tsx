import Link from "next/link";
import React from "react";

const Header = () => {
  const routes = [
    { name: "Home", Url: "/" },
    { name: "About", Url: "/about-us" },
  ];
  return (
    <header className="w-full h-16 border border-b flex justify-center items-center">
      <nav className="flex gap-5">
        {routes.map((route) => (
          <Link key={route.Url} href={route.Url}>
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
