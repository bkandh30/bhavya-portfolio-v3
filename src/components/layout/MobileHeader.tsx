import { personalInfo } from "@/data/personal";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Button } from "@/components/ui/button";

export const MobileHeader = () => {
  const emailLink = personalInfo.social.find(
    (link) => link.platform === "email"
  )?.url;

  return (
    <section className="lg:hidden">
      <div className="relative h-24 w-24 mb-6 ring-2 ring-primary/20 ring-offset-4 ring-offset-background shadow-lg rounded-full overflow-hidden">
        <OptimizedImage
          src={personalInfo.avatar.png}
          webpSrc={personalInfo.avatar.webp}
          alt={personalInfo.avatar.alt}
          width={96}
          height={96}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <h1 className="text-4xl font-extrabold mb-2 text-[hsl(48_20%_20%)]">
        {personalInfo.name}
      </h1>

      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary-custom">
        {personalInfo.title}
      </p>

      <p className="mt-4 text-base leading-relaxed text-secondary-custom">
        I build reliable backend systems and developer tools that scale products
        and teams.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild size="sm" className="rounded-full">
          <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </Button>
        <Button asChild size="sm" variant="outline" className="rounded-full">
          <a href="#projects">Featured Work</a>
        </Button>
        {emailLink && (
          <Button asChild size="sm" variant="outline" className="rounded-full">
            <a href={emailLink}>Contact</a>
          </Button>
        )}
      </div>

      <div className="mt-6 rounded-lg border border-[rgba(185,91,62,0.2)] bg-card-custom p-4">
        <p className="text-xs uppercase text-secondary-custom font-semibold">
          Now
        </p>
        <p className="mt-2 text-sm text-primary-custom">
          Open to backend + platform roles. Focused on distributed systems,
          infrastructure tooling, and developer experience.
        </p>
      </div>

      {/* Social Links */}
      <SocialLinks className="mt-8 mb-12" />
    </section>
  );
};
