# About Me

To all to whom these presents shall come, greetings =)

This is my personal portfolio website created to showcase my projects and to give anyone interested a glimpse of my web-development skills.

<picture>
  <source media="(max-width: 767px) and (prefers-color-scheme: light)" srcset="./src/images/readme/mobile/screenshot_light_1x.webp 1x, ./src/images/readme/mobile/screenshot_light_2x.webp 2x">

   <source media="(max-width: 767px) and (prefers-color-scheme: dark)" srcset="./src/images/readme/mobile/screenshot_dark_1x.webp 1x, ./src/images/readme/mobile/screenshot_dark_2x.webp 2x">

   <source media="(prefers-color-scheme: light)" srcset="./src/images/readme/desktop/screenshot_light_1x.webp 1x, ./src/images/readme/desktop/screenshot_light_2x.webp 2x">

   <source media="(prefers-color-scheme: dark)" srcset="./src/images/readme/desktop/screenshot_dark_1x.webp 1x, ./src/images/readme/desktop/screenshot_dark_2x.webp 2x">

  <img alt="A screenshot of my website's Projects page with the project gallery in list presentation. The first project card is expanded, revealing the live page screenshot, project description and links to its GitHub page and live page." src="./src/images/readme/screenshot_light_1x.webp">
</picture>

## Design

The design of this website was inspired by Windows Phone Metro interface which I have always found clean and attractive.

Project cards can be viewed either as a list or a gallery - I couldn't decide which I liked best so I decided to have the best of both worlds and keep both.

## Technologies

- vanilla JavaScript
- CSS and SaSS
- Vite
- [EmailJS](https://www.emailjs.com/), [Swipe.js](https://github.com/lyfeyaj/swipe).

## Features

Here are some of the features of this website:

### Responsive

The website is fully responsive, has 4 breakpoints and reacts to orientation change

### Keyboard-accessible and screen-reader-friendly

- all controls are focusable and keyboard-accessible
- all images have `alt`s
- interactive elements without text have proper `aria-label`s
- project cards in list mode have `aria-expanded` attributes

### Optimized

- images are served in webp format and have been optimized with Squoosh
- all images have 3 sets of extra de-retinized versions to save bandwidth and improve loading times on smaller screens

### Color schemes

The website features light and dark color schemes and a three-position theme switch. By default, the switch is set to 'auto', meaning that the website follows the system / browser current mode. If a dark or light color scheme is switched on manually, it will override the system setting.

- the color scheme choice is saved in localStorage and restored on next visit
- th majority of images (including the ones in this readme.md) are also available in light and dark versions and react to the selected color scheme

## Performance, accessibility and best practices

<picture>
  <source media="(prefers-color-scheme: light)" srcset="./src/images/readme/lighthouse_light.webp">

   <source media="(prefers-color-scheme: dark)" srcset="./src/images/readme/lighthouse_dark.webp">

  <img alt="A screenshot of my website's Lighthouse report with the following ratings: Performance: 100, Accessibility: 95, Best Practices: 100, SEO: 100." src="./src/images/readme/lighthouse_light.webp">
</picture>
