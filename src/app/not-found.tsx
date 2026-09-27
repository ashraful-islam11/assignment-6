import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-[#CCFF00]">
          ERROR 404
        </p>

        <h1 className="font-serif text-5xl font-bold text-white">
          PAGE NOT FOUND
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm text-[#8A92A0]">
          The workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-[#CCFF00] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#b8e600]"
        >
          GO HOME
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
