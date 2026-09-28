# tylrcc

Portfolio site for the [@tylrcc](https://www.instagram.com/tylrcc/) Instagram account: car photography and personal content.

Plain HTML, CSS, and JS. No build step, no framework, no tracking. Deploys as a static site on Vercel.

## Layout

Three column, editorial layout set in iA Writer Quattro:

- Left (pinned): name, short bio, "currently posting" link, About and Contact.
- Center (scrolls): Selected Works with a category filter, scroll fade ins, and animated hairline dividers.
- Right (pinned, scrolls on its own): CV style index (focus, experience, availability, platforms, tools).
- Bottom left: light / dark theme toggle (light is the default; mobile is always light).
- Under 768px the columns stack and a bottom nav (WORK / ABOUT / CV / CONTACT) switches between them.

## Editing

Everything you would ever want to change is in `content.js`:

| What | Where |
|---|---|
| Name, bio, "currently" link | `name`, `bio`, `currently` |
| Social links (Instagram, TikTok, YouTube...) | `links` |
| About and Contact overlay text | `about`, `contact` |
| Filter tabs | `filters` (each `key` must match a project's `categories`) |
| Project cards | `projects` (title, year, description, image, categories, href) |
| Right column | `cv` |
| Mobile hero image | `heroImage` |

### Media

`work/` holds the public-grid photos and reel files already on the page. To add another, drop the file in `work/` and add a project in `content.js`. A project with `video` plays in the card (poster is `image`). `href` should be that Instagram post.

## Run locally

```sh
python3 -m http.server 4173
# open http://localhost:4173
```

## Deploy

```sh
vercel --prod
```

No environment variables, no secrets.

## Privacy

The site intentionally contains no real name, location, email, or employer. It links only to the public Instagram handle. Keep it that way when editing `content.js`.

## Fonts

iA Writer Quattro by Information Architects, used under the SIL Open Font License (see `fonts/LICENSE.txt`).
