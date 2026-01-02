export const socialLinks = {
  linkedin: {
    name: "LinkedIn",
    href: "https://linkedin.com/in/amarindev",
    icon: "linkedin",
  },
  github: {
    name: "GitHub",
    href: "https://github.com/YOUR_GITHUB",
    icon: "github",
  },
} as const;

export type SocialKey = keyof typeof socialLinks;
export type SocialLink = (typeof socialLinks)[SocialKey];
