'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0C0D10] border-b border-gray-700 sticky top-0 z-50">

      <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={28}
              height={28}
              priority
            />

            <h1 className="font-bold text-lg">
              FITLOG
            </h1>
          </div>

        </div>

        <div className="hidden md:flex gap-2">
          <Link href="/workout">
            <button className="btn bg-[#1A2312] text-[#C2F800]">
              Workouts
            </button>
          </Link>

          <Link href="/myPlan">
            <button className="btn bg-transparent">
              My Plan
            </button>
          </Link>
        </div>

        <div className="flex gap-4 md:gap-8">
          <button>Plan</button>
          <button>Saved</button>
        </div>

      </div>

      {open && (
        <div className="absolute top-full left-4 md:hidden bg-[#12151b] w-44 rounded-lg shadow-lg p-2">

          <Link href="/workout">
            <button
              onClick={() => setOpen(false)}
              className="w-full text-left px-4 py-3 hover:bg-gray-800 rounded-lg"
            >
              Workouts
            </button>
          </Link>

          <Link href="/myPlan">
            <button
              onClick={() => setOpen(false)}
              className="w-full text-left px-4 py-3 hover:bg-gray-800 rounded-lg"
            >
              My Plan
            </button>
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;