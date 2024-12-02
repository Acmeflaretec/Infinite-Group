interface LinkItem {
  title: string;
  href: string;
}

interface LinkCategory {
  title: string;
  items: LinkItem[];
}

export const links: LinkCategory[] = [
  {
    title: "Company",
    items: [
      { title: "Who are we", href: "#about" },
      { title: "Our services", href: "#companies" },
      { title: "Our clients", href: "#testimonials" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Quick links",
    items: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "Our Companies", href: "/companies" },
      { title: "Blogs", href: "/blogs" },
      { title: "Careers", href: "/career" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Customer",
    items: [
      { title: "Client support", href: "#" },
      { title: "Help center", href: "#" },
      { title: "System status", href: "#" },
      { title: "Feedback", href: "#" },
      { title: "Contact us", href: "#" },
    ],
  },
];
