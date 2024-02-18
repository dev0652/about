# About Me
Hello, this is my personal portfolio website created to showcase all my projects and my web-development skill.

## Design
The design of this website was inspired by Windows Phone Metro interface which I have always found clean and attractive.

Project cards can be viewed either as a list (couldn't resist it since it is so characterisitic of the Metro style) or a gallery (because I also wanted tiles). 
Consider this an attempt to have the best of both worlds.

## Technologies
As this website was supposed to be a SPA/landing at the beginning, I chose to go with vanilla JavaScript instead of React. 
My bunder of choice is Vite. 
I have used EmailJS library for the contact form.

## Features
Here are some of the features of this website:

### Keyboard-accessible and screenreader-friendly
- all controls are focusable and keyboard-accessible
- all images have `alt`s
- interactive elements without text have proper `aria-label`s
- project cards in list mode have `aria-expanded` attributes

### Images
- images are served in webp format and have been optimized with squoosh
- images have been de-retinized in four different sizes which are loaded using `srcset` and `sizes` attributes

### Color themes
- light and dark color themes that can be switched manually or pick browsers current color theme
