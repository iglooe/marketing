import * as React from "react"
import Link from "next/link"

import { Projects } from "@/types/nav"
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
  projects?: Projects[]
}

export function MainNav({ projects }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
                <span className="sr-only">Link to home</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Github Repos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.65fr_1fr_1fr]">
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
                        <span className="sr-only">
                          View github repositories
                        </span>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Check out all my repositories on Github both old and
                        new!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {projects?.length
                  ? projects.map((project) => (
                      <ListItem
                        key={project.title}
                        href={project.href}
                        title={project.title}
                      >
                        {project.description}
                        <span className="sr-only">Link to project</span>
                      </ListItem>
                    ))
                  : null}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
