import Image from "next/image";

export default function SkyBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#285ea8]">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 brightness-75 saturate-200">
        <Image
          src="/img/heaven.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
      {/* Above the image (z-0), below the content (z-10) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5]"
        style={{
          height: "5%",
          background: "linear-gradient(to bottom, transparent, #285ea8)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
