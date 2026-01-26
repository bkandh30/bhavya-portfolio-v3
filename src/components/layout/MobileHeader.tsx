import { personalInfo } from "@/data/personal";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export const MobileHeader = () => {
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

      <h2 className="text-lg font-semibold mb-4 text-[hsl(48_20%_20%)]">
        {personalInfo.title}
      </h2>

      <p className="mb-8 text-[hsl(48_3%_50%)]">{personalInfo.bio}</p>

      {/* Social Links */}
      <SocialLinks className="mb-12" />
    </section>
  );
};
