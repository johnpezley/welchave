# Welch Ave. Station: Display Ad Campaign

Group website for the Digital Marketing (Ivy College of Business, Fall 2026) Display Ad Campaign assignment.

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Executive summary of the semester: website audit, recommendations, campaign, team |
| Landing | `landing.html` | The page every ad links to: "No cover. No catch." hero, day-by-day specials, game day, the Pizza Pit menu, visit info |
| Ads | `ads.html` | Campaign strategy (goal, targeting, hook, benchmark-based budget) and the four clickable ads |

Shared files: `style.css` (all styling), `script.js` (landing-page specials picker), `images/` (photos, mascot, ads).

## Upload to GitHub (web browser, no coding tools needed)

1. Unzip `welch-site.zip` on your computer.
2. Open your group's repository on github.com.
3. Click **Add file → Upload files**.
4. Drag in **everything inside** the unzipped folder: `index.html`, `ads.html`, `landing.html`, `style.css`, `script.js`, `README.md`, `.nojekyll` and the whole `images` folder. Drag the folder itself so the `images/ads/` path stays the same.
   - On a Mac, `.nojekyll` is hidden. Press **Cmd + Shift + .** in Finder to show it. It's optional; the site works without it.
5. These replace your teammate's starter `index.html`, `landing.html`, `ads.html` and `style.css`. The old `wlechavedog.png` is no longer used, so you can delete it.
6. Type a commit message such as "Add campaign site" and click **Commit changes**.

## Turn on GitHub Pages (skip if it's already on)

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. Wait 1–2 minutes, then refresh. The live link appears at the top: `https://<username>.github.io/<repo-name>/`.
5. Submit that link in Canvas.

## Before you submit, check that:

- [ ] All three nav links (Home, Landing, Ads) work on the live site
- [ ] Clicking each of the four ads on the Ads page opens the Landing page
- [ ] The Landing page's day buttons switch the specials
- [ ] The site looks right on a phone

## Editing later

- **Home page end-of-semester section:** search `index.html` for `Coming at the end of the semester`.
- **Specials:** they live at the top of `script.js` (`SPECIALS`) and in the Game Day and fallback lists in `landing.html`.
- **Colors and fonts:** the variables at the top of `style.css`.
