import './styles.css';

export const createContactsSection = () => {
    const contactsSection = document.createElement('section');
    contactsSection.className = 'contacts-section';
    
    const contactsHeading = document.createElement('p');
    contactsHeading.className = 'h4 heading'
    contactsHeading.textContent = 'Contacts';

    contactsSection.appendChild(contactsHeading);

    const contactsContainer = document.createElement('div');
    contactsContainer.className = 'contacts';

    const contactData = [
        {
            location: 'Midtown, NY',
            number: '+1 (555) 155492865',
            hours: ['Mon - Fr: 12am - 1pm', 'Sat - Sun: 12am - 3pm'],
            address: '125 Grove Street, Midtown, New York, NY',
        },
        {
            location: 'SoHo, NY',
            number: '+1 (555) 67463891',
            hours: ['Mon - Fr: 12am - 1pm', 'Sat - Sun: 12am - 3pm'],
            address: '87 Maple Lane, SoHo, New York, NY',
        },
    ];

    contactData.forEach(item => {
        const contactDiv = document.createElement('div');
        contactDiv.className ='contact';

        const contactHeading = document.createElement('div');
        contactHeading.className = 'h3 contact-heading';
        contactHeading.textContent = item.location;
        contactDiv.appendChild(contactHeading);

        const contactContent = document.createElement('div');
        contactContent.className = 'contact-content';

        const contactNumber = document.createElement('p');
        contactNumber.className = 'contact-number';
        contactNumber.textContent = item.number;
        contactContent.appendChild(contactNumber);

        const contactHours = document.createElement('ul');
        contactHours.className = 'contact-hours';
        item.hours.forEach(hour => {
            const hourItem = document.createElement('li');
            hourItem.className = 'p';
            hourItem.textContent = hour;
            contactHours.appendChild(hourItem);
        });
        contactContent.appendChild(contactHours);

        const contactAdress = document.createElement('p');
        contactAdress.className = 'contact-adress';
        contactAdress.textContent = item.address;
        contactContent.appendChild(contactAdress);

        contactDiv.appendChild(contactContent);

        contactsContainer.appendChild(contactDiv);
    });

    contactsSection.appendChild(contactsContainer);

    return contactsSection;
}