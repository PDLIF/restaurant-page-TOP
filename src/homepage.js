import restaurantImage from './images/restaurant.jpg';

const createHomepage = () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Pine & Dine';
    contentDiv.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = 'Nestled in the heart of the forest, Timber Haven offers a unique dining experience where nature and flavor intertwine. Surrounded by towering trees and the soothing sounds of the woods, our rustic restaurant is crafted entirely from wood, bringing the warmth and tranquility of the forest right to your table.';
    contentDiv.appendChild(description);
    
    const image = document.createElement('img');
    image.src = restaurantImage;
    image.width = '500';
    contentDiv.appendChild(image);
}

export default createHomepage;