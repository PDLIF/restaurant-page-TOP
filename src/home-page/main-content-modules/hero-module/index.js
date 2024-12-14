import './styles.css';

export const createHeroSection = () => {
    // Create the hero section
    const heroSection = document.createElement('section');
    heroSection.className = 'hero-section';

    // Create the container for the navbar
    const container = document.createElement('div');
    container.className = 'container navbar-container';

    // Create the nav element and the list
    const nav = document.createElement('ul');
    nav.className = 'nav';

    // Define the menu items
    const menuItems = [
        { href: '../home-page/template.html', text: 'Home', class: 'nav-btn home-btn current-btn' },
        { href: '../menu-page/template.html', text: 'Menu', class: 'nav-btn menu-btn' },
        { href: '../contacts-page/template.html', text: 'Contacts', class: 'nav-btn contacts-btn' },
        { href: '#', text: 'Delivery', class: 'nav-btn-stroke' }
    ];

    // Create list items for each menu item
    menuItems.forEach(item => {
        const li = document.createElement('li');

        const a = document.createElement('a');
        // a.href = item.href;
        a.textContent = item.text;
        a.className = item.class;

        li.appendChild(a);
        nav.appendChild(li);
    });

    // Append the nav to the container
    container.appendChild(nav);

    // Create the call-to-action (cta) section
    const cta = document.createElement('div');
    cta.className = 'cta';

    // Create the cta logo
    const ctaLogo = document.createElement('div');
    ctaLogo.className = 'cta-logo';

    const logoBig = document.createElement('p');
    logoBig.className = 'logo-big';
    logoBig.textContent = 'Dine &Wine';

    const logoSmall = document.createElement('p');
    logoSmall.className = 'logo-small';
    logoSmall.textContent = 'restaurant';

    ctaLogo.appendChild(logoBig);
    ctaLogo.appendChild(logoSmall);

    // Create the cta reserve button
    const ctaReserveBtn = document.createElement('div');
    ctaReserveBtn.className = 'cta-reserve-btn';

    const reserveLink = document.createElement('a');
    reserveLink.href = '#';
    reserveLink.textContent = 'RESERVE';

    ctaReserveBtn.appendChild(reserveLink);

    // Append the logo and reserve button to the cta section
    cta.appendChild(ctaLogo);
    cta.appendChild(ctaReserveBtn);

    // Append the container and cta to the hero section
    heroSection.appendChild(container);
    heroSection.appendChild(cta);

    return heroSection;
}