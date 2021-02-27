# PREACT app with Typescript and Tailwind CSS
This is my basic setup to work with PREACT, built with [https://github.com/preactjs/preact-cli](https://github.com/preactjs/preact-cli) with some updates.

**NOTE**: This repository doesn't pretend to be the solution, just a help maybe, basic setup to start a project with [PREACT](https://preactjs.com/), last versions of TS and Tailwind.
Feel free to fork, I hope to help you :), feedback are welcome.

* Eslint: updated with https://github.com/developit/eslint-config-developit
* Move tests close to component
* Move CSS to SASS (.css files to .scss)
* Allow use .env files ([https://github.com/robinvdvleuten/preact-cli-plugin-env-vars](https://github.com/robinvdvleuten/preact-cli-plugin-env-vars))

## CLI Commands
*   `yarn install`: Installs dependencies

*   `yarn dev`: Run a development, HMR server (by default is using port 8080, --port XXXX to change it)

*   `yarn serve`: Run a production-like server

*   `yarn build`: Production-ready build

*   `yarn lint`: Pass TypeScript files using ESLint

*   `yarn test`: Run Jest and Enzyme with
    [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
    your tests

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Setup ENV vars
```javascript
PREACT_APP_SECRET="my secret string"
```

use in your code as
```javascript
console.log("env variable", process.env.PREACT_APP_SECRET);
```

## Author
Dimas López · FullStack Software Developer

🐦 https://twitter.com/dimaslz

👨🏻‍💻 https://dimaslz.dev

📄 https://www.linkedin.com/in/dimaslopezzurita