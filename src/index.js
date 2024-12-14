import './styles.css';
import {loadHomePage} from './home-page/index';
import {loadMenuPage} from './menu-page/index';
import {loadContactPage} from './contacts-page/index';
import {initializeSwipers} from './swiper';

loadHomePage();
initializeSwipers();

document.addEventListener('click', (event) => {
    if (event.target.matches('.home-btn')) {
        loadHomePage();
        initializeSwipers();
    } else if (event.target.matches('.menu-btn')) {
        loadMenuPage();
    } else if (event.target.matches('.contacts-btn')) {
        loadContactPage();
    }
});
