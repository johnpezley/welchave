# Welch Ave. Station: Display Ad Campaign

Group website for the Digital Marketing (Ivy College of Business, Fall 2026) Display Ad Campaign assignment.

Live site: https://johnpezley.github.io/welchave/

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Executive summary of the semester: website audit, recommendations, campaign, team |
| Ads | `ads.html` | Campaign strategy (goal, targeting, hook, benchmark-based budget), the four clickable ads shown in place on a sample news site, and the ad-to-landing-page click flow |
| Landing | `landing.html` | The page every ad links to: "No cover. No catch." hero, day-by-day specials, and visit info (map photo, address, hours, phone) |

Shared files: `style.css` (all styling) and `script.js` (landing-page specials picker). All images sit in the top folder next to the pages: photos (`bartender.jpg`, `mural.jpg`), the mascot (`dog-white.png`), the icon (`favicon.png`), the landing page screenshot (`landing-hero.png`) and the ads (`welch-ad-<size>.png`, plus `@2x` versions for sharp screens).

## Update the live site (web browser, no coding tools needed)

1. Open the repository on github.com: `johnpezley/welchave`.
2. Click **Add file → Upload files**.
3. Drag in the changed files. Files with the same name replace the old ones.
4. Type a commit message, such as "Update site", and click **Commit changes**.
5. Wait 1–2 minutes, then refresh the live site.

GitHub Pages is already on for this repository (Settings → Pages → Deploy from branch `main`, folder `/ (root)`).

## Before you submit, check that:

- [ ] All three nav links (Home, Ads, Landing) work on the live site
- [ ] Clicking each of the four ads on the Ads page opens the Landing page
- [ ] The Landing page's day buttons switch the specials
- [ ] The site looks right on a phone

## Editing later

- **Home page end-of-semester section:** search `index.html` for `Coming at the end of the semester`.
- **Specials:** they live at the top of `script.js` (`SPECIALS`) and in the fallback list in `landing.html`.
- **Colors and fonts:** the variables at the top of `style.css`.
