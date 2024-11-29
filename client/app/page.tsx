import Image from "next/image";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white">
      <Image
        className="absolute object-cover"
        src="/buildings.jpeg"
        alt="Vercel logomark"
        fill
      />
      <div className="absolute w-full h-full bg-opacity-75 z-1 bg-black"></div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10">
        <h1 className="text-4xl animate-pulse">Coming Soon...</h1>
        <h1>Infinite Group of Companies</h1>

        <p className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Innovating Solutions Across Multiple Industries
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="mailto:infinitegroup.companies@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Connect →
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stay tunned for updates
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center z-10">
        <a
          className="flex text-sm md:text-base items-center gap-2 hover:underline hover:underline-offset-4"
          href="tel:971503397437"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          +971 50 339 7437
        </a>
        <a
          className="flex text-sm md:text-base items-center gap-2 hover:underline hover:underline-offset-4"
          href="tel:971564422147"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          +971 56 442 2147
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:abhijith@acmeflare.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          infinitegroup.companies@gmail.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://infinite-grp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to infinite-grp.com →
        </a>
      </footer>
    </div>
  );
}
