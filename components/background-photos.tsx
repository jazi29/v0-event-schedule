import Image from "next/image";

const photos = [
  { src: "/images/training-1.jpg", alt: "Miras College students using AI technology in classroom", top: "3%", left: "1%", rotate: "-4deg", width: 320, height: 220 },
  { src: "/images/training-2.jpg", alt: "Miras College AI seminar with interactive display", top: "5%", right: "1%", rotate: "3deg", width: 300, height: 210 },
  { src: "/images/training-3.jpg", alt: "Miras College students collaborating with AI tools", bottom: "5%", left: "2%", rotate: "3deg", width: 310, height: 215 },
  { src: "/images/training-4.jpg", alt: "Teacher demonstrating AI technology at Miras College", bottom: "3%", right: "1%", rotate: "-3deg", width: 330, height: 225 },
];

export function BackgroundPhotos() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="absolute opacity-25 transition-opacity"
          style={{
            top: photo.top,
            left: photo.left,
            right: photo.right,
            bottom: photo.bottom,
            transform: `rotate(${photo.rotate})`,
          }}
        >
          <div className="rounded-xl border border-border/50 bg-card p-1.5 shadow-lg">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      ))}

      {/* AI & technology themed SVG icons scattered */}
      {/* Brain / AI icon */}
      <svg className="absolute left-[15%] top-[30%] h-20 w-20 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.33 12.91c.09 0 .09-.06.09-.09 0-.39-.18-.75-.48-.99a1.47 1.47 0 00-.15-.87c-.15-.3-.39-.48-.63-.57.03-.09.06-.18.06-.27a1.5 1.5 0 00-.63-1.23 1.35 1.35 0 00-.33-1.02c-.21-.27-.51-.45-.84-.48a1.46 1.46 0 00-.81-1.11c-.06-.03-.12-.06-.18-.06A1.47 1.47 0 0016.5 5.5V5a1.5 1.5 0 00-3 0v.09a1.47 1.47 0 00-.93.72 1.5 1.5 0 00-.57.57V4a1.5 1.5 0 00-3 0v5.26c-.18-.21-.42-.36-.69-.42a1.5 1.5 0 00-1.74.72l-.03.06a1.5 1.5 0 00-.09.21l-1.68 5.31a4.5 4.5 0 001.11 4.59l1.71 1.71A4.47 4.47 0 0010.77 23h4.95a4.5 4.5 0 004.47-4.04l.36-3.63c.03-.18.03-.33 0-.51a1.5 1.5 0 00.78-.91z" />
      </svg>
      {/* Chip / processor icon */}
      <svg className="absolute right-[12%] top-[45%] h-24 w-24 text-primary/[0.08]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 4h12v2h2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2h2V4zm0 16H6v2a2 2 0 002 2h12a2 2 0 002-2v-2h-2v2H6v-2zM20 8h2v8h-2V8zM2 8h2v8H2V8zm7-1a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1H9zm1 2h4v6h-4v-6z" />
      </svg>
      {/* Robot icon */}
      <svg className="absolute left-[8%] bottom-[35%] h-16 w-16 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13z" />
      </svg>
      {/* Network / connection icon */}
      <svg className="absolute right-[18%] bottom-[25%] h-14 w-14 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z" />
      </svg>
      {/* Cloud AI icon */}
      <svg className="absolute left-[45%] top-[15%] h-12 w-12 text-primary/[0.07]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l5.09-5.09 1.41 1.41L10 17z" />
      </svg>
    </div>
  );
}
