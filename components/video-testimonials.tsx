"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoTestimonial {
  /** YouTube video ID (from youtube.com/shorts/<ID>) */
  id: string;
  /** Customer / reviewer name shown below the thumbnail */
  name: string;
  /** Short quote or title for the video */
  title: string;
}

/**
 * Add more entries here — the grid adapts automatically.
 * Only the YouTube Shorts video ID is needed.
 */
const videoTestimonials: VideoTestimonial[] = [
  {
    id: "AEubpRJ9J3I",
    name: "Pelanggan Miqaz",
    title: "Review Pempek Premium",
  },
  {
    id: "oijhTY8FrYU",
    name: "Pelanggan Miqaz",
    title: "Review Otak-Otak Panggang",
  },
];

/**
 * Returns the highest-quality YouTube thumbnail URL available.
 * `maxresdefault` is best but may not exist for every video;
 * `hqdefault` (480 × 360) is the reliable fallback.
 */
function getThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function getEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

export function VideoTestimonials() {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);

  return (
    <section
      id="video-testimonials"
      className="bg-yellow-brand py-12 lg:py-24"
      aria-labelledby="video-testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Section header ─────────────────────────────── */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-brand">
            Testimonial
          </p>
          <h2
            id="video-testimonials-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
          >
            Cerita Langsung dari Pelanggan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60">
            Dengarkan pengalaman mereka yang sudah mencoba produk Miqaz —
            langsung dari video review pelanggan.
          </p>
        </div>

        {/* ── Video thumbnails grid ──────────────────────── */}
        <div className="mt-16 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
          {videoTestimonials.map((video) => (
            <button
              key={video.id}
              type="button"
              aria-label={`Putar video: ${video.title}`}
              onClick={() => setOpenVideoId(video.id)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-dark-green/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              {/* Thumbnail */}
              <div className="relative aspect-9/16 w-full overflow-hidden bg-dark-green/5">
                <Image
                  src={getThumbnailUrl(video.id)}
                  alt={`Thumbnail video review: ${video.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:shadow-gold/30">
                    <Play className="size-7 text-dark-green transition-colors duration-300 group-hover:text-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* <p className="text-sm font-semibold text-white drop-shadow-md">
                    {video.title}
                  </p> */}
                  <p className="mt-1 text-xs text-white/80 drop-shadow-md">
                    {video.name}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Video modal (iframe lazy-loaded on open) ──── */}
      <Dialog
        open={openVideoId !== null}
        onOpenChange={(open) => {
          if (!open) setOpenVideoId(null);
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="max-w-sm h-100 sm:max-w-md md:max-w-lg p-0 overflow-hidden bg-black border-none ring-0"
        >
          {/* Visually hidden title for accessibility */}
          <DialogTitle className="sr-only">
            Video Testimoni Pelanggan
          </DialogTitle>

          {/* Close button */}
          <button
            type="button"
            aria-label="Tutup video"
            onClick={() => setOpenVideoId(null)}
            className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="size-4" />
          </button>

          {/* YouTube iframe — only rendered when dialog is open */}
          {openVideoId && (
            <div className="relative aspect-9/16 w-full">
              <iframe
                src={getEmbedUrl(openVideoId)}
                title="Video testimoni pelanggan Miqaz"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-100 w-full"
                loading="lazy"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
