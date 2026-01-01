export const routes = {
  home: {
    href: "/",
    label: "Home",
  },
  articles: {
    href: "/articles",
    label: "Articles",
  },
  playbooks: {
    href: "/playbooks",
    label: "Playbooks",
  },
  about: {
    href: "/about",
    label: "About",
  },
} as const;

export type RouteKey = keyof typeof routes;
export type Route = (typeof routes)[RouteKey];
