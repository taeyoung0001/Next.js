"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ LinkName }) {
  const path = usePathname();
  return (
    <Link
      href={`/${LinkName}`}
      className={path.startsWith(`/${LinkName}`) ? "active" : undefined}
    >
      {LinkName}
    </Link>
  );
}
