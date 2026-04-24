import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Image
        src="/desktop.png"
        alt="Train and Board My K9 PNW — Website Launching Soon"
        width={1080}
        height={1080}
        priority
        className="h-screen w-full hidden md:block"
      />
      <Image
        src="/mobile.png"
        alt="Train and Board My K9 PNW — Website Launching Soon"
        width={1080}
        height={1080}
        priority
        className="h-screen w-full block md:hidden"
      />
    </main>
  );
}
