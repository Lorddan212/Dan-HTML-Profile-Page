# Daniel HTML Profile Page

A responsive multi-page personal portfolio website for **Daniel Odion Jegbefumhen**, presenting his work and services across three areas:

- Frontend web development
- Electrical engineering/services
- General printing services

This project is built as a **static website** using HTML, CSS, JavaScript, and Bootstrap, with custom animations, theme switching, gallery filtering, and contact actions.

## Overview

The site is designed as a premium-style personal brand and portfolio experience. It includes:

- A landing page with hero section, service tracks, portfolio previews, and contact section
- A dedicated about page with detailed service descriptions
- A gallery page with category-based filtering and image modal viewing
- Interactive UI features such as scroll reveal, tilt cards, animated backgrounds, theme toggle, and WhatsApp/contact shortcuts

## Pages

- `index.html` - Main landing page with hero, tracks, portfolio, and contact section
- `about.html` - Detailed introduction and breakdown of services
- `gallery.html` - Gallery page with filters for web, electrical, and printing samples

## Features

- Responsive layout built with Bootstrap 5
- Dark/light theme toggle saved with `localStorage`
- Animated hero section and background effects
- Typed name animation
- Rotating profile images
- Scroll progress indicator
- Reveal-on-scroll effects
- Tilt card interaction
- Portfolio and service showcase sections
- WhatsApp quick contact link
- Contact form that opens the user's email client via `mailto:`
- Copy-email utility button
- Filterable gallery with modal image preview

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- [Bootstrap 5.3.3](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Project Structure

```text
Dan HTML Profile Page/
|-- index.html
|-- about.html
|-- gallery.html
|-- README.md
|-- css/
|   `-- style.css
|-- js/
|   `-- script.js
`-- assets/
    `-- img/
        |-- Dan_HD.png
        |-- Dan Web_HD.png
        |-- Dan Elect_HD.png
        `-- Link Logo.png
```

## Getting Started

Because this is a static website, no build step is required.

1. Clone or download the project.
2. Open `index.html` directly in your browser, or
3. Run it with a local server such as the VS Code Live Server extension for a smoother development experience.

## Customization

Most editable profile data is stored in [`js/script.js`](./js/script.js) inside the `PROFILE` object:

- Name
- Email
- Phone number
- WhatsApp number
- Default WhatsApp message
- Rotating profile images

You can also customize:

- Site colors and visual styling in [`css/style.css`](./css/style.css)
- Page content and sections in `index.html`, `about.html`, and `gallery.html`
- Gallery placeholder images and portfolio sample links

## Notes

- Some gallery and portfolio images currently use external placeholder/sample images from Unsplash.
- Some portfolio buttons still point to placeholder `#` links and should be replaced with real project URLs if needed.
- The contact form does not submit to a backend server. It opens the user's default mail app using a `mailto:` link.

## Author

### Daniel Odion Jegbefumhen

- Email: `jegbefumhendaniel@gmail.com`
- Phone: `+2348109368514`
- Location: Abuja, Nigeria

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
