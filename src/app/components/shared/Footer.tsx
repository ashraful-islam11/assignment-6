import Image from 'next/image';
import FooterLogo from '@/assets/logo.png';

const Footer = () => {
  return (
    <section className="border-t border-[#1A1D24] bg-[#090A0D] py-8 sm:py-10">
      <div
        className="
          container mx-auto
          flex flex-col items-center justify-between
          gap-4
          px-4
          sm:px-6
          md:flex-row
          lg:px-8
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={FooterLogo}
            alt="footer logo"
            width={16}
            height={11}
            className="h-auto w-4"
          />

          <span className="font-serif text-sm font-bold text-[#FFFFFF]">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-[12px] text-[#6B7280] md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
      
    </section>
  );
};

export default Footer;