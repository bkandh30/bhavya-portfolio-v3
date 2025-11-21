import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({ children, className = "" }: SectionCardProps) => {
  return (
    <div className={`card-hover ${className}`}>
      {/* Left border accent that grows on hover */}
      <span className="border-accent" />
      {children}
    </div>
  );
};

interface SectionCardLayoutProps {
  dateRange?: string;
  children: ReactNode;
}

export const SectionCardLayout = ({
  dateRange,
  children,
}: SectionCardLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-8">
      {/* Date Column */}
      {dateRange && (
        <div className="md:w-1/4 mb-2 md:mb-0">
          <span className="date-range">{dateRange}</span>
        </div>
      )}

      {/* Content Column */}
      <div className={dateRange ? "md:w-3/4" : "w-full"}>{children}</div>
    </div>
  );
};
