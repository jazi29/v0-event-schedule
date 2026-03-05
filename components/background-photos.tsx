import Image from "next/image";

const photos = [
  { src: "/images/training-1.jpg", alt: "Students in a modern classroom", top: "3%", left: "1%", rotate: "-4deg", width: 320, height: 220 },
  { src: "/images/training-2.jpg", alt: "Seminar training session", top: "5%", right: "1%", rotate: "3deg", width: 300, height: 210 },
  { src: "/images/training-3.jpg", alt: "Students collaborating on a project", bottom: "5%", left: "2%", rotate: "3deg", width: 310, height: 215 },
  { src: "/images/training-4.jpg", alt: "Teacher explaining at whiteboard", bottom: "3%", right: "1%", rotate: "-3deg", width: 330, height: 225 },
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

      {/* Subtle education-themed SVG icons scattered */}
      <svg className="absolute left-[15%] top-[30%] h-20 w-20 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
      </svg>
      <svg className="absolute right-[12%] top-[45%] h-24 w-24 text-primary/[0.08]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
      </svg>
      <svg className="absolute left-[8%] bottom-[35%] h-16 w-16 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
      <svg className="absolute right-[18%] bottom-[25%] h-14 w-14 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
      <svg className="absolute left-[45%] top-[15%] h-12 w-12 text-primary/[0.07]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z" />
      </svg>
    </div>
  );
}
