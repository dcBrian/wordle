<h1 align="center">
  <br>
  Wordle
  <br>
</h1>

<h4 align="center">This is a Wordle clone made with <a href="https://kit.svelte.dev/" target="_blank">Sveltekit</a>.</h4>

<p align="center">
    <a href="https://github.com/dcBrian/wordle/commits/main">
    <img src="https://img.shields.io/github/last-commit/dcBrian/wordle?style=flat-square"
         alt="GitHub last commit">
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a>
</p>

<p align="center">
  <img src="/images/wordle.gif?raw=true"/>
</p>

<p align="center">
  <a href="https://wordle-eight-plum.vercel.app/">View Demo</a>
</p>

## Key Features

* Game
  - [x] Random solution for every game
  - [x] Letter count / position algorithm
  - [x] Virtual keyboard tracking inputs
  - [ ] Verify input is a real word
* Animations
  - Letter input / output
  - Input validation 
  - Incorrect input error (less than 5 letters)
  - Modal / Grid / Keyboard appearance

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dcBrian/wordle.git

# Go into the repository
$ cd wordle

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

## Configuration
If you want to use your own list of words, you can change the API endpoint by setting the environment variable `VITE_PUBLIC_API_PATH`.<br>
By default, it points to `https://api-pearl-eight.vercel.app/api/solutions` defined in this [repository](https://github.com/dcBrian/api).<br>
The expected data is:
```
[
    { id: 1, word: 'ninja' },
    { id: 2, word: 'spade' },
    ...
]
```

## Credits

This project uses the following packages and services:

- [Sveltkit](https://kit.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
