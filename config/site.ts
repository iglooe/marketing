export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Derek",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  links: {
    twitter: "https://twitter.com/VinceBarter",
    github: "https://github.com/iglooe?tab=repositories",
    docs: "https://ui.shadcn.com",
  },
}
