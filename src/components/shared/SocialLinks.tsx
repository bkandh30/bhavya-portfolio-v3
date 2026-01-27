import { Mail, Check } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { useEmailCopy } from "@/hooks/useEmailCopy";

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  const { isCopied, handleCopyEmail } = useEmailCopy();

  return (
    <div className={`flex items-center gap-8 ${className}`}>
      {personalInfo.social.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (link.platform === "email") {
              handleCopyEmail(e, link.url);
            }
          }}
          className="text-[hsl(48_3%_50%)] transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded cursor-pointer"
          aria-label={link.label}
        >
          {link.icon === "github" && (
            <img
              src="https://cdn.simpleicons.org/github"
              alt=""
              width={28}
              height={28}
              className="w-7 h-7"
              loading="lazy"
              aria-hidden="true"
            />
          )}

          {link.icon === "linkedin" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          )}

          {link.icon === "mail" &&
            (isCopied ? (
              <Check className="w-9 h-9" strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Mail className="w-9 h-9" strokeWidth={1.5} aria-hidden="true" />
            ))}
        </a>
      ))}
    </div>
  );
};
