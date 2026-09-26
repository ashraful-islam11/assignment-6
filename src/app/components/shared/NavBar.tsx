"use client";

import Image from "next/image";
import Link from "next/link";
import NavLogo from '@/assets/logo.png'

const NavBar = () => {
  return (
    <nav className="border-b border-zinc-800 bg-[#0d0e10]">
      <div className="mx-auto py-6 flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* eita amar nav logo :  */}
        <Link href="/"
          className="flex items-center gap-2 text-sm font-bold tracking-wide text-white" >
          <Image
            src={NavLogo}
            alt="Fitlog"
            className="h-5 w-5 object-contain"
          />

          <span className="font-serif "> FITLOG</span>
        </Link>

        {/* Navigation Links */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
          <Link
            href="/workouts"
            className="rounded-full bg-[#18230b] px-4 py-2 text-[11px] font-medium text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-4 py-2 text-[11px] font-medium text-zinc-400 transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Right-side Status Badges */}
        <div className="flex items-center gap-3 text-[11px]">

          {/* Plan */}
          <Link
            href="/plan"
            className="flex items-center gap-1.5 text-zinc-300"
          >
            <span className="text-[#D1D5DB] ">Plan</span>

            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/saved"
            className="flex items-center gap-1.5 text-zinc-400"
          >
            <span className="text-[#9CA3AF] ">Saved</span>

            <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-zinc-600 px-1 text-[9px] text-zinc-400">
              0
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;