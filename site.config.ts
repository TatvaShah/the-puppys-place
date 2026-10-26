import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "The Puppy's Place",
  tagline: "Home-based dog grooming salon in Scarborough. One-on-one, stress-free grooms tailored with love.",
  category: "Dog grooming",
  schemaType: "LocalBusiness",
  area: "Scarborough, ON",
  siteUrl: "https://the-puppys-place.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#d9667a" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Home-based grooming salon in Scarborough",
    headline: "One-on-one, stress-free grooms tailored with love",
    subhead: "A calm, one-pup-at-a-time grooming salon in east Scarborough. By appointment only, so send us a DM on Instagram to book your pup's visit.",
    images: [
      { src: "/images/post-3.jpg", alt: "Fluffy white doodle after a spa day at The Puppy's Place" },
      { src: "/images/post-6.jpg", alt: "Mr. Fendi before and after his groom" },
      { src: "/images/post-5.jpg", alt: "Before and after groom of a curly pup" },
    ],
    secondaryCta: { label: "See the pups", href: "#gallery" },
  },

  highlights: ["One-on-one grooms", "Stress-free and gentle", "By appointment only", "Book by Instagram DM"],

  about: {
    title: "Grooming, one pup at a time",
    body: [
      "The Puppy's Place is a home-based grooming salon in east Scarborough. Every groom is one-on-one, so your pup gets calm, focused attention from start to finish.",
      "Grooms are tailored to each dog with love, and visits are by appointment only. We are welcoming new clients, so send us a DM to book.",
    ],
    image: { src: "/images/post-8.jpg", alt: "Pups at The Puppy's Place grooming salon" },
  },

  gallery: {
    title: "Fresh from the grooming table",
    items: [
      { src: "/images/post-3.jpg", width: 720, height: 1280, alt: "White doodle after a spa day", caption: "Spa day with Summer", href: "https://www.instagram.com/reel/C3S4lh6Oji-/" },
      { src: "/images/post-5.jpg", width: 941, height: 1672, alt: "Before and after groom", caption: "Before and after", href: "https://www.instagram.com/reel/De2zTAXu1sQ/" },
      { src: "/images/post-6.jpg", width: 790, height: 1402, alt: "Mr. Fendi before and after", caption: "Mr. Fendi", href: "https://www.instagram.com/reel/DexcJrUub3d/" },
      { src: "/images/post-7.jpg", width: 706, height: 1254, alt: "Winnie after her groom", caption: "Winnie", href: "https://www.instagram.com/reel/DexNlDUvlbF/" },
      { src: "/images/post-4.jpg", width: 941, height: 1672, alt: "Today's pup crew", caption: "Today's pup crew", href: "https://www.instagram.com/reel/De5YcDxui6e/" },
      { src: "/images/post-8.jpg", width: 790, height: 1402, alt: "Pampered pups, happy hearts", caption: "Pampered pups, happy hearts", href: "https://www.instagram.com/reel/DenbPqvuQuO/" },
    ],
  },

  instagram: {
    handle: "thepuppysplace",
    embeds: ["https://www.instagram.com/reel/DexcJrUub3d/"],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Appointments are booked through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi The Puppy's Place! I would love to book a groom for my pup.\nPup's name:\nBreed and size:\nWhat they need (full groom, bath, tidy-up, nails):\nPreferred dates:",
    links: [{ label: "Facebook", href: "https://www.facebook.com/303357579704600" }],
    note: "By appointment only. Now welcoming new clients.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send us a DM on Instagram with your pup's name, breed, and what they need. Grooms are by appointment only." },
    { q: "Where are you located?", a: "We are a home-based grooming salon in east Scarborough, Toronto." },
    { q: "Are you taking new clients?", a: "Yes, we are welcoming new clients. Send a DM to get started." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Scarborough (east Toronto), Ontario",
    socials: [{ label: "Facebook", href: "https://www.facebook.com/303357579704600" }],
  },

  seo: {
    title: "The Puppy's Place | Dog grooming in Scarborough",
    description: "The Puppy's Place is a home-based dog grooming salon in east Scarborough offering one-on-one, stress-free grooms. By appointment, book by Instagram DM.",
    keywords: ["dog grooming Scarborough", "home dog groomer Scarborough", "dog groomer east Toronto", "one-on-one dog grooming"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
