import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

import { ListItem } from "./list-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={siteConfig.links.github}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Icons.gitHub className="h-12 w-12" />
                        <div className="mb-2 mt-4 text-xl font-medium sm:font-bold md:text-xl">
                          View all project repositories
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Check out all my repositories on Github both old and
                          new!
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href={siteConfig.projects[0].href}
                    title={siteConfig.projects[0].title}
                  >
                    {siteConfig.projects[0].description}
                  </ListItem>
                  <ListItem
                    href={siteConfig.projects[1].href}
                    title={siteConfig.projects[1].title}
                  >
                    {siteConfig.projects[1].description}
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : null}
    </div>
  )
}
