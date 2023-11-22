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
      description: "Project that I have worked on.",
    },
  ],
  projects: [
    {
      title: "E-Commerce Shop",
      href: "https://github.com/iglooe/e-commerce-frontend",
      description:
        "The frontend of an e-commerce shop, that is updated with a CMS.",
    },
    {
      title: "Notary",
      href: "https://github.com/iglooe/notary",
      description:
        "A note taking app, with all the familar features of Notion.",
    },
  ],
  links: {
    twitter: "https://twitter.com/VinceBarter",
    github: "https://github.com/iglooe?tab=repositories",
    docs: "https://ui.shadcn.com",
  },
}
