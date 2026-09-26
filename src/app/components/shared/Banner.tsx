import Image from 'next/image';
 import BannerImage from '@/assets/banner.png'

const Banner = () => {
    return (

        
<section className="container mx-auto my-8 px-4 sm:my-10 md:my-12">
     {/* ভাই সত্যি বলতে, code আমি নিজে করছি, আর রিস্পন্সিভ আমি gpt কে দিয়ে করিয়েছি :  */}
  <div
    className="
      flex flex-col items-center justify-between gap-10
      rounded-2xl border border-[#222630]
      bg-[#15171D]
      p-6
      sm:p-8
      md:flex-row md:p-10
      lg:p-14 "
  >
   
    {/* Left Side */}
    <div className="w-full space-y-5 md:w-1/2">

      <p className="text-[11px] font-bold text-[#C2F800]">
        WORKOUT LIBRARY
      </p>

      <div>
        <h2
          className="
            text-3xl font-bold font-serif text-[#FFFFFF]
            leading-tight
            sm:text-4xl
            md:text-[42px]
            lg:text-[50px]
          "
        >
          TRAIN WITH INTENT. LOG
          <br className="hidden sm:block" />
          EVERY SET.
        </h2>
      </div>

      <p
        className="
          max-w-xl text-sm leading-6 text-[#9CA3AF]
          sm:text-base
        " >
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
        into today's plan, and watch the week's work add up.
      </p>

      <button
        className="
          rounded-xl bg-[#C2F800]
          px-5 py-3
          text-sm font-bold text-black
          transition
          hover:cursor-pointer
          hover:bg-[#b5e900]
        "
      >
        BROWSE WORKOUTS
      </button>
    </div>

    {/* Right Side */}
    <div className="flex w-full justify-center md:w-1/2">
      <Image
        src={BannerImage}
        width={334}
        height={334}
        alt="banner image"
        className="
          h-auto
          w-[220px]
          sm:w-[260px]
          md:w-[300px]
          lg:w-[334px]
        "
      />
    </div>
  </div>
</section>
    );
};

export default Banner;
