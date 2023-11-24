export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Derek",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  urls: [
    {
      title: "E-Commerce Shop",
      href: "https://e-commerce-frontend-rose-beta.vercel.app/",
    },
    {
      title: "Notary",
      href: "https://note-taking-app-beige-zeta.vercel.app/",
    },
    {
      title: "Birdle",
      href: "https://birdle-teal.vercel.app/",
    },
    {
      title: "Dictionary",
      href: "https://dictionary-beta-ten.vercel.app/",
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
    {
      title: "Birdle",
      href: "https://github.com/iglooe/wordle-clone",
      description:
        "A replayable Wordle clone that uses a JSON server as an API.",
    },
    {
      title: "Dictionary",
      href: "https://github.com/iglooe/dictionary",
      description:
        "A fully functional dictionary app that uses the free dictionary API to retrieve data.",
    },
  ],
  links: {
    twitter: "https://twitter.com/VinceBarter",
    github: "https://github.com/iglooe?tab=repositories",
    git_repo: "https://github.com/iglooe/marketing",
    docs: "https://ui.shadcn.com",
  },
}
