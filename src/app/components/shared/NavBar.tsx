"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavLogo from "@/assets/logo.png";
import { useWorkout } from "@/app/context/Provider";

const NavBar = () => {
  const { plan, saved } = useWorkout();
  const pathname = usePathname();

  const isWorkoutActive =
    pathname === "/" || pathname.startsWith("/workOut");

  const isMyPlanActive = pathname === "/myPlan";

  return (
    <nav className="border-b border-zinc-800 bg-[#0d0e10]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold tracking-wide text-white"
        >
          <Image
            src={NavLogo}
            alt="Fitlog"
            className="h-5 w-5 object-contain"
          />

          <span className="font-serif">FITLOG</span>
        </Link>

        {/* Navigation Links */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-[11px] font-medium transition ${
              isWorkoutActive
                ? "bg-[#18230b] text-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/myPlan"
            className={`rounded-full px-4 py-2 text-[11px] font-medium transition ${
              isMyPlanActive
                ? "bg-[#18230b] text-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right-side Status Badges */}
        <div className="flex items-center gap-3 text-[11px]">

          {/* Plan */}
          <Link
            href="/myPlan"
            className="flex items-center gap-1.5 text-zinc-300"
          >
            <span className="hidden text-[#D1D5DB] sm:inline">
              Plan
            </span>

            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/myPlan"
            className="flex items-center gap-1.5 text-zinc-400"
          >
            <span className="text-[#9CA3AF]">
              Saved
            </span>

            <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-zinc-600 px-1 text-[9px] text-zinc-400">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;