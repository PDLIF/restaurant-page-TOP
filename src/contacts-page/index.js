import './styles.css';
import {createHeader} from './header-module/index.js';
import {createContactsSection} from './main-content-module/contacts-module/index.js';
import {createFeedbackSection} from './main-content-module/feedback-module/index.js';

export const loadContactPage = () => {
    const main = document.querySelector('main');

    main.innerHTML = '';

    const header = createHeader();
    main.appendChild(header);

    const mainContent = document.createElement('section');
    mainContent.className = 'main-content-contacts-page';
    
    const contactsBlock = createContactsSection();
    mainContent.appendChild(contactsBlock);

    const feedbackBlock = createFeedbackSection();
    mainContent.appendChild(feedbackBlock);

    main.appendChild(mainContent);
}