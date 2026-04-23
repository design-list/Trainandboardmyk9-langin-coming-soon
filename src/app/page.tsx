import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Image
        src="/launching-soon.png"
        alt="Train and Board My K9 PNW — Website Launching Soon"
        width={1080}
        height={1080}
        priority
        className="h-auto w-full max-w-2xl"
      />
    </main>
  );
}
