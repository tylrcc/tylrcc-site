// Everything on the site that is words, links, or images lives here.
// Edit this file, refresh, done. No build step.

window.SITE = {
  name: "TYLRCC",
  title: "tylrcc",
  description:
    "tylrcc. Car photography and personal content. Night drives, stills, and short clips.",

  bio: [
    "Car photographer and content creator.",
    "Night drives, stills, and the personal stuff around them.",
  ],
  currently: { label: "Currently posting @tylrcc", href: "https://www.instagram.com/tylrcc/" },

  // Links shown in About, Contact, and the mobile home screen.
  // Add more rows here as you pick up platforms (TikTok, YouTube, etc).
  links: [
    { label: "INSTAGRAM", text: "@tylrcc", href: "https://www.instagram.com/tylrcc/", ig: "tylrcc" },
  ],

  about: {
    heading: "About",
    paragraphs: [
      "tylrcc started as a place to post cars. It is turning into something a little wider: the drives, the late nights in the garage, and the personal side of chasing this stuff.",
      "Everything here is shot and edited by me. If you see your car on the page and want the full-res file, send a message.",
    ],
    listening: { label: "LISTENING ACTIVITY", line1: "RECENTLY PLAYED", line2: "Whatever is on in the car right now." },
  },

  contact: {
    heading: "Contact",
    lines: [
      "The fastest way to reach me is a DM on Instagram.",
      "Open to shoots, collabs, and content work.",
    ],
  },

  // Filter tabs across the top of Selected Works. `key` must match the
  // values used in each project's `categories` array below.
  filters: [
    { key: "all", label: "ALL" },
    { key: "night", label: "NIGHT" },
    { key: "personal", label: "PERSONAL" },
    { key: "video", label: "VIDEO" },
  ],

  // Photos and reels pulled from the public @tylrcc grid.
  // `video` plays in the card. `href` opens that post on Instagram.
  projects: [
    {
      title: "Night Rain",
      year: "2026",
      description: "A yellow coupe in the rain at night, headlights cutting through the trees.",
      image: "work/Db7Q8usSu73-1.jpg",
      video: "work/Db7Q8usSu73.mp4",
      categories: ["night", "video"],
      href: "https://www.instagram.com/reel/Db7Q8usSu73/",
    },
    {
      title: "Cloud Line",
      year: "2026",
      description: "Last light on a ridgeline, shot from under a canopy.",
      image: "work/DbjwK9CkXGj-1.jpg",
      categories: ["personal"],
      href: "https://www.instagram.com/p/DbjwK9CkXGj/",
    },
    {
      title: "Field Stop",
      year: "2026",
      description: "An olive coupe parked beside a tractor and a green trailer.",
      image: "work/DbhlNLSHG37-2.jpg",
      categories: [],
      href: "https://www.instagram.com/p/DbhlNLSHG37/",
    },
    {
      title: "Silver Front",
      year: "2026",
      description: "Low light, headlights on, pulled up against the trees.",
      image: "work/DbZVBwbSoOv-1.jpg",
      video: "work/DbZVBwbSoOv.mp4",
      categories: ["night", "video"],
      href: "https://www.instagram.com/reel/DbZVBwbSoOv/",
    },
    {
      title: "Rain Street",
      year: "2026",
      description: "Wet asphalt, a dark coupe with a gold stripe, rain still falling.",
      image: "work/DbZUvgFyaZW-1.jpg",
      video: "work/DbZUvgFyaZW.mp4",
      categories: ["video"],
      href: "https://www.instagram.com/reel/DbZUvgFyaZW/",
    },
    {
      title: "Night Garage",
      year: "2026",
      description: "Two cars side by side under a warm garage light.",
      image: "work/DarfGDhyuTM-1.jpg",
      video: "work/DarfGDhyuTM.mp4",
      categories: ["night", "video"],
      href: "https://www.instagram.com/reel/DarfGDhyuTM/",
    },
    {
      title: "Open Field",
      year: "2026",
      description: "A green coupe sitting in a field, hills behind it.",
      image: "work/DaXImlhyEWW-1.jpg",
      video: "work/DaXImlhyEWW.mp4",
      categories: ["video"],
      href: "https://www.instagram.com/reel/DaXImlhyEWW/",
    },
    {
      title: "Red Wing",
      year: "2026",
      description: "A red wing car parked along a tree-lined street.",
      image: "work/DZtrMmhy-Wj-1.jpg",
      video: "work/DZtrMmhy-Wj.mp4",
      categories: ["video"],
      href: "https://www.instagram.com/reel/DZtrMmhy-Wj/",
    },
    {
      title: "Blue Through Town",
      year: "2026",
      description: "A light blue coupe rolling past a white building.",
      image: "work/DY6AyxnyheX-2.jpg",
      video: "work/DY6AyxnyheX.mp4",
      categories: ["video"],
      href: "https://www.instagram.com/reel/DY6AyxnyheX/",
    },
  ],

  // Right hand column. Each block is a label plus a list of lines.
  // Use "" for a blank line inside a block.
  cv: [
    {
      label: "Focus",
      lines: [
        "Automotive photography",
        "Night work and short form video",
        "Personal content",
      ],
    },
    {
      label: "Experience",
      lines: [
        "tylrcc",
        "Photographer and creator",
        "Ongoing",
        "",
        "Independent",
        "Owner shoots and collabs",
        "Ongoing",
      ],
    },
    {
      label: "Available for",
      lines: [
        "Owner shoots",
        "Brand and shop collabs",
        "Content for pages and dealers",
      ],
    },
    {
      label: "Platforms",
      lines: [{ text: "Instagram @tylrcc", href: "https://www.instagram.com/tylrcc/", ig: "tylrcc" }],
    },
    {
      label: "Tools",
      lines: [
        "Mirrorless body",
        "35mm and 85mm primes, 70 to 200mm zoom",
        "Adobe Lightroom",
        "Adobe Photoshop",
        "Premiere Pro, DaVinci Resolve",
        "CapCut",
      ],
    },
  ],

  heroImage: "work/DbjwK9CkXGj-1.jpg",
};
