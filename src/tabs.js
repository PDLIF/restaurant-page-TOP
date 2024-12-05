import showHomepage from './homepage.js';
import showMenu from './menu.js';
import showContacts from './contacts.js';

const activateButtons = () => {
    document.querySelector('.home-nav-button').addEventListener('click', () => {
        showHomepage();
    });
    
    document.querySelector('.menu-nav-button').addEventListener('click', () => {
        showMenu();
    });
    
    document.querySelector('.contacts-nav-button').addEventListener('click', () => {
        showContacts();
    });
}

export default activateButtons;