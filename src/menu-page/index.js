import './styles.css';
import {createHeader} from './header-module/index';
import {createCategoriesSection} from './main-content-module/categories-module/index';

export const loadMenuPage = () => {
    const main = document.querySelector('main');

    main.innerHTML = '';

    const header = createHeader();
    main.appendChild(header);

    const mainContent = document.createElement('section');
    mainContent.className = 'main-content-menu-page';
    
    const categoriesBlock = createCategoriesSection();
    mainContent.appendChild(categoriesBlock);

    main.appendChild(mainContent);
}