import {createHeroSection} from './main-content-modules/hero-module/index.js';
import {createAboutSection} from './main-content-modules/about-module/index.js';


export const loadHomePage = () => {
    const main = document.querySelector('main');

    main.innerHTML = '';

    const heroSection = createHeroSection();
    main.appendChild(heroSection);
    
    const aboutSection = createAboutSection();
    main.appendChild(aboutSection);
}