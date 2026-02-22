"use client";

import Link from "next/link";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white hover:text-purple-300 transition-colors uppercase text-sm font-bold tracking-wider"
    >
      {children}
    </Link>
  );
}
