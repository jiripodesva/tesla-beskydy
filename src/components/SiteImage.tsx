import { ImageIcon } from "lucide-react";
import { USE_CUSTOM_PHOTOS } from "../config/media";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  placeholderLabel?: string;
};

export default function SiteImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority,
  placeholderLabel,
}: SiteImageProps) {
  if (USE_CUSTOM_PHOTOS) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-sky-50 via-sky-100/80 to-cyan-50 ${className}`}
      role="img"
      aria-label={alt}
    >
      <ImageIcon className="h-10 w-10 text-slate-300" strokeWidth={1.25} />
      {placeholderLabel && (
        <span className="px-4 text-center text-xs font-medium uppercase tracking-wider text-slate-400">
          {placeholderLabel}
        </span>
      )}
    </div>
  );
}
