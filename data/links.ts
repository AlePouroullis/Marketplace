export type LinkType = {
  name: string;
  href: string;
  special: boolean;
};

export const links: LinkType[] = [
  {
    name: "Sign in",
    href: "/signin",
    special: true,
  },
  {
    name: "Listings",
    href: "/listings",
    special: false,
  },
  {
    name: "Find a roommate",
    href: "/find-a-roommate",
    special: false,
  },
];
