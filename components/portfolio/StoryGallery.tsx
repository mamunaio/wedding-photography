import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import type { GalleryImage } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Editorial gallery layout. Walks through images and arranges them into
 * a non-uniform, mixed grid: full-bleed wide shots, 50/50 splits, asymmetric
 * portrait pairs, and a triptych. Designed to feel hand-laid, not templated.
 */
export default function StoryGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Block 1: Full-bleed wide */}
      {images[0] && (
        <Reveal>
          <div className="relative w-full overflow-hidden aspect-[16/9]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      )}

      {/* Block 2: Portrait + Square pair (asymmetric) */}
      <div className="container-editorial grid grid-cols-12 gap-6 md:gap-8">
        {images[1] && (
          <div className="col-span-12 md:col-span-7 md:col-start-1">
            <ImageReveal
              src={images[1].src}
              alt={images[1].alt}
              aspect={images[1].aspect === "square" ? "square" : "portrait"}
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </div>
        )}
        {images[2] && (
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-32">
            <ImageReveal
              src={images[2].src}
              alt={images[2].alt}
              aspect="square"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </div>
        )}
      </div>

      {/* Block 3: Wide cinematic */}
      {images[3] && (
        <div className="container-editorial">
          <ImageReveal
            src={images[3].src}
            alt={images[3].alt}
            aspect="wide"
            sizes="100vw"
          />
        </div>
      )}

      {/* Block 4: Triptych (or pair if not enough) */}
      <div className="container-editorial grid grid-cols-12 gap-6 md:gap-8">
        {images[4] && (
          <div className="col-span-12 md:col-span-5">
            <ImageReveal
              src={images[4].src}
              alt={images[4].alt}
              aspect="portrait"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        )}
        {images[5] && (
          <div
            className={cn(
              "col-span-12 md:col-start-7",
              images[6] ? "md:col-span-6" : "md:col-span-6",
            )}
          >
            <ImageReveal
              src={images[5].src}
              alt={images[5].alt}
              aspect="landscape"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        )}
      </div>

      {/* Block 5: Full-bleed wide accent */}
      {images[6] && (
        <Reveal>
          <div className="relative w-full overflow-hidden aspect-[21/9]">
            <Image
              src={images[6].src}
              alt={images[6].alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      )}

      {/* Block 6: Portrait pair, centered narrow */}
      <div className="container-narrow grid grid-cols-2 gap-4 md:gap-6">
        {images[7] && (
          <ImageReveal
            src={images[7].src}
            alt={images[7].alt}
            aspect="portrait"
            sizes="(min-width: 768px) 33vw, 50vw"
          />
        )}
        {images[8] && (
          <ImageReveal
            src={images[8].src}
            alt={images[8].alt}
            aspect="portrait"
            sizes="(min-width: 768px) 33vw, 50vw"
            delay={0.15}
          />
        )}
      </div>

      {/* Remaining images, if any */}
      {images.length > 9 && (
        <div className="container-editorial grid grid-cols-12 gap-6 md:gap-8">
          {images.slice(9).map((img, i) => (
            <div
              key={i}
              className={cn(
                "col-span-12",
                i % 2 === 0 ? "md:col-span-7" : "md:col-span-5",
              )}
            >
              <ImageReveal
                src={img.src}
                alt={img.alt}
                aspect={img.aspect === "wide" ? "wide" : "landscape"}
                sizes="(min-width: 768px) 50vw, 100vw"
                delay={i * 0.05}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
