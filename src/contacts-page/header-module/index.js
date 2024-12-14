import './styles.css';

export const createHeader = () => {
    const header = document.createElement('header');
    header.className = 'header';

    const headerLogo = document.createElement('div');
    headerLogo.className = 'header-logo';

    const logoLink = document.createElement('a');
    logoLink.href = '#';

    const logoBig = document.createElement('p');
    logoBig.className = 'logo-big';
    logoBig.textContent = 'Dine &Wine';

    const logoSmall = document.createElement('p');
    logoSmall.className = 'logo-small';
    logoSmall.textContent = 'restaurant';

    logoLink.appendChild(logoBig);
    logoLink.appendChild(logoSmall);
    headerLogo.appendChild(logoLink);

    const navbarContainer = document.createElement('div');
    navbarContainer.className = 'navbar-container';

    const navList = document.createElement('ul');
    navList.className = 'nav';

    const navItems = [
        {text: 'Home', href: '../home-page/template.html', className: 'nav-btn home-btn'},
        {text: 'Menu', href: '../menu-page/template.html', className: 'nav-btn menu-btn'},
        {text: 'Contacts', href: '../contacts-page/template.html', className: 'nav-btn contacts-btn current-btn'},
    ];

    navItems.forEach(item => {
        const listItem = document.createElement('li');

        const link = document.createElement('a');
        link.className = item.className;
        // link.href = item.href;
        link.textContent = item.text;

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    const strokedButtons = document.createElement('div');
    strokedButtons.className = 'stroked-buttons';

    const strokedNavItems = [
        {text: 'Delivery', href: '#', className: 'nav-btn-stroke'},
        {text: 'Reserve', href: '#', className: 'nav-btn-stroke'},
    ];

    strokedNavItems.forEach(item => {
        const listItem = document.createElement('li');

        const link = document.createElement('a');
        link.textContent = item.text;
        link.className = item.className;
        link.href = item.href;

        listItem.appendChild(link);
        strokedButtons.appendChild(listItem);
    });

    navList.appendChild(strokedButtons);

    navbarContainer.appendChild(navList);

    header.appendChild(headerLogo);
    header.appendChild(navbarContainer);

    return header;
}