// Everything on the site that is words, links, or images lives here.
// Edit this file, refresh, done. No build step.

window.SITE = {
  name: "TYLRCC",
  title: "tylrcc",
  description:
    "tylrcc. Car photography and personal content. Meets, night drives, rolling shots, and the details in between.",

  bio: [
    "Car photographer and content creator shooting automotive culture:",
    "meets, night drives, rolling shots, and the small details most people walk past.",
  ],
  currently: { label: "Currently posting @tylrcc", href: "https://www.instagram.com/tylrcc/" },

  // Links shown in About, Contact, and the mobile home screen.
  // Add more rows here as you pick up platforms (TikTok, YouTube, etc).
  links: [
    { label: "INSTAGRAM", text: "@tylrcc", href: "https://www.instagram.com/tylrcc/" },
  ],

  about: {
    heading: "About",
    paragraphs: [
      "tylrcc started as a place to post cars. It is turning into something a little wider: the drives, the people at the meets, the late nights in the garage, and the personal side of chasing this stuff.",
      "Everything here is shot and edited by me. If you see your car on the page and want the full-res file, send a message.",
    ],
    listening: { label: "LISTENING ACTIVITY", line1: "RECENTLY PLAYED", line2: "Whatever is on in the car right now." },
  },

  contact: {
    heading: "Contact",
    lines: [
      "The fastest way to reach me is a DM on Instagram.",
      "Open to shoots, meet coverage, collabs, and content work.",
    ],
  },

  // Filter tabs across the top of Selected Works. `key` must match the
  // values used in each project's `categories` array below.
  filters: [
    { key: "all", label: "ALL" },
    { key: "cars", label: "CARS" },
    { key: "details", label: "DETAILS" },
    { key: "night", label: "NIGHT" },
    { key: "meets", label: "MEETS" },
    { key: "rolling", label: "ROLLING SHOTS" },
    { key: "personal", label: "PERSONAL" },
    { key: "video", label: "VIDEO" },
  ],

  // Drop your photos into /work and point `image` at them.
  // Every card links out to `href` (defaults to Instagram).
  projects: [
    {
      title: "Night Runs",
      year: "2026",
      description: "Long exposures, wet asphalt, and headlights. A running series shot after midnight around the city.",
      image: "work/night-runs.svg",
      categories: ["cars", "night"],
      href: "https://www.instagram.com/tylrcc/",
    },
    {
      title: "Meet Season",
      year: "2026",
      description: "Coverage from local meets and pop up shows. Builds, owners, and the crowd around them.",
      image: "work/meet-season.svg",
      categories: ["cars", "meets"],
      href: "https://www.instagram.com/tylrcc/",
    },
    {
      title: "Detail Study",
      year: "2025",
      description: "Badges, stitching, wheel faces, exhaust tips. Close crops that treat the car like an object.",
      image: "work/detail-study.svg",
      categories: ["details"],
      href: "https://www.instagram.com/tylrcc/",
    },
    {
      title: "Rolling Shots",
      year: "2025",
      description: "Car to car at speed. Motion blur in the wheels, the body tack sharp.",
      image: "work/rolling-shots.svg",
      categories: ["cars", "rolling"],
      href: "https://www.instagram.com/tylrcc/",
    },
    {
      title: "Garage Sessions",
      year: "2025",
      description: "Controlled light, one car, no distractions. Studio style sets shot in borrowed garages.",
      image: "work/garage-sessions.svg",
      categories: ["cars", "details"],
      href: "https://www.instagram.com/tylrcc/",
    },
    {
      title: "On the Road",
      year: "2026",
      description: "The personal side. Road trips, gas station stops, and whatever is worth pulling over for.",
      image: "work/on-the-road.svg",
      categories: ["personal"],
      href: "https://www.instagram.com/tylrcc/",
    },
    {
      title: "Behind the Lens",
      year: "2026",
      description: "Short form video. How the shots get made, plus the ones that did not make the grid.",
      image: "work/behind-the-lens.svg",
      categories: ["video", "personal"],
      href: "https://www.instagram.com/tylrcc/",
    },
  ],

  // Right hand column. Each block is a label plus a list of lines.
  // Use "" for a blank line inside a block.
  cv: [
    {
      label: "Focus",
      lines: [
        "Automotive photography",
        "Rolling shots and night work",
        "Detail and studio style sets",
        "Short form video and personal content",
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
        "Meet coverage, owner shoots, collabs",
        "Ongoing",
      ],
    },
    {
      label: "Available for",
      lines: [
        "Owner shoots",
        "Meet and event coverage",
        "Brand and shop collabs",
        "Content for pages and dealers",
      ],
    },
    {
      label: "Platforms",
      lines: ["Instagram @tylrcc"],
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

  heroImage: "work/hero.svg",
};
