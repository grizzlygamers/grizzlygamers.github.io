Grizzly Video Game Club
===

This is the static site generator for https://grizzlygamers.github.io/

Development
---

Development happens in the `dev` branch. The `master` branch contains the final built files. This is required for [GitHub Pages](https://help.github.com/articles/user-organization-and-project-pages/) hosting.

To get started, You need [Node.js](https://nodejs.org/) 4.4+

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

Step 3 will spawn a local webserver you can browse at http://localhost:8888 - all changes made to local files should be immediately visible.


Here's some important folders:

1. `src/js` - runtime JavaScript that executes in the browser
2. `src/templates` - [JSX](https://facebook.github.io/jsx/) templates that are used during the page building process
3. `src/style` - all [gussy](https://github.com/codingcampbell/gussy) stylesheets which are compiled into CSS (similar to SASS/LESS, but in JavaScript)


One more important file is `tasks/routes.js` - this one is important because it defines what folder paths are built for the generated site.

Building
---

All you need to do is run `npm run build`

This will output the static site to the `web` folder. You can then upload this folder to your host, the only caveat is the code assumes it is running at the root level of a (sub)domain.

GitHub Pages Deployment
---

If you commit the contents of a built `web` folder to `master` and push to GitHub, it will update the site at https://grizzlygamers.github.io/

If you're on a unix-y platform, There is an npm task that automates this a bit: `npm run gh-pages`

This will run a site build, switch the branch to master, delete tracked files, and stage everything that was in `web`

You still need to run a `git commit` and `git push` yourself.
