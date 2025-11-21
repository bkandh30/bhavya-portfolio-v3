import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  webpSrc?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  webpSrc,
  loading = "lazy",
  priority = false,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (): void => {
    setIsLoading(false);
  };

  const handleError = (): void => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-muted ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-muted-foreground text-xs">Failed to load</span>
      </div>
    );
  }

  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && (
        <Skeleton className="absolute inset-0" style={{ width, height }} />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${
            isLoading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
          loading={priority ? "eager" : loading}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
        />
      </picture>
    </div>
  );
};
