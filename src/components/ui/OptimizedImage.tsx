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
    <div
      className="relative overflow-hidden"
      style={{ width, height, minWidth: width, minHeight: height }}
    >
      {isLoading && (
        <Skeleton
          className="absolute inset-0 bg-muted/30"
          style={{ opacity: isLoading ? 1 : 0, transition: "ease-out" }}
          aria-hidden="true"
        />
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
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
          style={{
            width,
            height,
            objectFit: "cover",
          }}
        />
      </picture>
    </div>
  );
};
