# Daniel HTML Profile Page

A responsive multi-page portfolio website for **Daniel Odion Jegbefumhen**, built to present his work and services across:

- Frontend web development
- Electrical services
- General printing

The project is a static website built with HTML, CSS, JavaScript, and Bootstrap, with a bright custom color system, dark mode support, gallery filtering, and direct contact actions.

## Overview

The website presents Daniel as a multi-service professional with a clear client journey. It now includes dedicated pages for service details and contact, instead of keeping everything on the home page.

## Pages

- `index.html` - Home page with hero section, service snapshot, featured focus, process, and call to action
- `about.html` - Background, work style, strengths, and profile overview
- `services.html` - Full service breakdown for web development, electrical services, and printing
- `gallery.html` - Filterable gallery with modal image preview
- `contact.html` - Full contact details, inquiry form, and response guide

## Features

- Responsive layout built with Bootstrap 5
- Dark and light theme toggle saved with `localStorage`
- Brighter visual palette using electric blue, lemon green, purple, pink, and burnt orange
- Improved dark-mode text visibility across cards, forms, and content sections
- Hero image rotation on the home page using:
  `Dan_HD.png`, `Dan Elect_HD.png`, and `Dan Web_HD.png`
- Reveal-on-scroll animations
- WhatsApp quick links across pages
- Contact form that opens the user's default email app with a prepared message
- Copy-email button
- Filterable gallery with image modal preview

## Tech Stack

- HTML5
- CSS3
- JavaScript
- [Bootstrap 5.3.3](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Project Structure

```text
Dan HTML Profile Page/
|-- index.html
|-- about.html
|-- services.html
|-- gallery.html
|-- contact.html
|-- README.md
|-- LICENSE
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

No build step is required.

1. Clone or download the project.
2. Open `index.html` in your browser.
3. For easier development, run the project with a local server such as VS Code Live Server.

## Customization

Most editable profile data is stored in [`js/script.js`](./js/script.js) inside the `PROFILE` object, including:

- Email address
- Phone number
- WhatsApp number
- Default WhatsApp message
- Rotating home-page profile images

You can also customize:

- Shared styles and colors in [`css/style.css`](./css/style.css)
- Page content in `index.html`, `about.html`, `services.html`, `gallery.html`, and `contact.html`
- Gallery images and captions

## Notes

- The contact form does not use a backend. It prepares a `mailto:` message in the user's email app.
- Some gallery visuals still use external reference/sample images from Unsplash.
- The home-page display image now alternates automatically between the three Daniel profile images.

## Author

### Daniel Odion Jegbefumhen

- Email: `jegbefumhendaniel@gmail.com`
- Phone: `+2348109368514`
- Location: Abuja, Nigeria

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
