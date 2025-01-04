# Restaurant Page Project

This project is a simple, modular restaurant website created using JavaScript and Webpack. It demonstrates the use of tabbed browsing, DOM manipulation, and modular JavaScript to dynamically generate content. The project was deployed using GitHub Pages.



## Live Preview

Check out the live version of the project here:  
[Live Preview](https://pdlif.github.io/restaurant-page-TOP/#)



## Features

- A responsive HTML structure with a `header`, `nav`, and dynamically generated content in `div#content`.
- JavaScript modules for each "tab" (Home, Menu, Contact) that export functions to create and render their respective content.
- Tab-switching functionality using event listeners.
- Deployed to GitHub Pages for public viewing.



## Project Setup

1. **Initialize the Project**
   - Created a `package.json` file and set up Webpack for bundling the project.

2. **HTML Skeleton**
   - The `src/template.html` file contains a basic structure with:
     - `<header>` containing `<nav>` buttons for tabs.
     - `<div id="content">` for dynamic content.

3. **JavaScript Modules**
   - All content inside `div#content` is dynamically generated using JavaScript modules.

4. **Webpack Configuration**
   - Configured Webpack to bundle JavaScript, HTML, and assets as required.

5. **.gitignore**
   - Ensured `node_modules` and `dist` folders are ignored by Git.

