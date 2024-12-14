import './styles.css';
import relaxImg from '../../../assets/images/home/atmosphere-slider/relax.png';
import glassesImage from '../../../assets/images/home/atmosphere-slider/glasses.png';
import arrow1Img from '../../../assets/images/home/arrows/arrow-1.png';
import arrow2Img from '../../../assets/images/home/arrows/arrow-2.png';
import pouringWineImg from '../../../assets/images/home/atmosphere-slider/pouring-wine.png';
import darkHallImg from '../../../assets/images/home/atmosphere-slider/dark-hall.png';
import saladsImg from '../../../assets/images/home/kitchen-and-menu-slider/salads.png';
import cheeseAndWineImg from '../../../assets/images/home/kitchen-and-menu-slider/cheese-and-wine.png';
import eggsImg from '../../../assets/images/home/kitchen-and-menu-slider/eggs.png';
import fishImg from '../../../assets/images/home/kitchen-and-menu-slider/fish.png';


export const createAboutSection = () => {
    // Create the about section
    const aboutSection = document.createElement('section');
    aboutSection.className = 'about-section';

    // Create the container for the about section
    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'container about-container';

    // Create the first inner section (atmosphere)
    const aboutInnerAtmosphere = document.createElement('div');
    aboutInnerAtmosphere.className = 'about-inner-section atmosphere';

    // Create the atmosphere text
    const atmosphereText = document.createElement('div');
    atmosphereText.className = 'atmosphere-text';

    const atmosphereHeading = document.createElement('p');
    atmosphereHeading.className = 'atmosphere-heading h4';
    atmosphereHeading.textContent = 'Atmosphere';

    const atmosphereParagraph = document.createElement('p');
    atmosphereParagraph.className = 'atmosphere-text p';
    atmosphereParagraph.textContent = 'Step into Wine & Dine and feel the warmth of a cozy, intimate setting where elegance meets comfort. Soft lighting, inviting interiors, and the gentle hum of conversation create the perfect backdrop for unforgettable moments. Whether it’s a romantic evening or a gathering with friends, Wine & Dine offers an ambiance that makes you want to stay just a little longer.';

    // Append text elements to the atmosphere text container
    atmosphereText.appendChild(atmosphereHeading);
    atmosphereText.appendChild(atmosphereParagraph);

    const atmosphereSlider = document.createElement('div');
    atmosphereSlider.classList.add('slider', 'swiper', 'atmosphere-slider');

    // Create images wrapper
    const atmosphereImagesWrapper = document.createElement('div');
    atmosphereImagesWrapper.classList.add('images', 'swiper-wrapper');

    // Image paths
    const atmophereImagePaths = [
        relaxImg,
        glassesImage,
        pouringWineImg,
        darkHallImg
    ];

    // Loop through the image paths and create image elements
    atmophereImagePaths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = '';
        img.classList.add('swiper-slide');
        atmosphereImagesWrapper.appendChild(img);
    });

    // Create arrows container
    const atmosphereArrows = document.createElement('div');
    atmosphereArrows.classList.add('arrows', 'atmosphere-arrows');

    // Create left arrow
    const atmosphereLeftArrow = document.createElement('a');
    const atmosphereLeftArrowImg = document.createElement('img');
    atmosphereLeftArrowImg.src = arrow1Img;
    atmosphereLeftArrowImg.alt = '';
    atmosphereLeftArrowImg.classList.add('arrow', 'arrow-1', 'atmosphere-arrow-1');
    atmosphereLeftArrow.appendChild(atmosphereLeftArrowImg);

    // Create right arrow
    const amosphereRightArrow = document.createElement('a');
    const atmosphereRightArrowImg = document.createElement('img');
    atmosphereRightArrowImg.src = arrow2Img;
    atmosphereRightArrowImg.alt = '';
    atmosphereRightArrowImg.classList.add('arrow', 'arrow-2', 'atmosphere-arrow-2');
    amosphereRightArrow.appendChild(atmosphereRightArrowImg);

    // Append arrows to arrows container
    atmosphereArrows.appendChild(atmosphereLeftArrow);
    atmosphereArrows.appendChild(amosphereRightArrow);

    // Append the images wrapper and arrows to the slider container
    atmosphereSlider.appendChild(atmosphereImagesWrapper);
    atmosphereSlider.appendChild(atmosphereArrows);

    // Append the atmosphere text and slider to the inner section
    aboutInnerAtmosphere.appendChild(atmosphereText);
    aboutInnerAtmosphere.appendChild(atmosphereSlider);

    aboutContainer.appendChild(aboutInnerAtmosphere);









    const aboutInnerKitchenAndMenu = document.createElement('div');
    aboutInnerKitchenAndMenu.className = 'about-inner-section kitchen-and-menu';

    // Create the second inner section (kitchen and menu) --------------------------------------------
    const kitchenAndMenuSlider = document.createElement('div');
    kitchenAndMenuSlider.classList.add('slider', 'swiper', 'kitchen-and-menu-slider');

    // Create images wrapper
    const kitchenAndMenuImagesWrapper = document.createElement('div');
    kitchenAndMenuImagesWrapper.classList.add('images', 'swiper-wrapper');

    // Image paths for the kitchen and menu slider
    const kitchenAndMenuImagePaths = [
        saladsImg,
        cheeseAndWineImg,
        eggsImg,
        fishImg
    ];

    // Loop through the image paths and create image elements
    kitchenAndMenuImagePaths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = '';
        img.classList.add('swiper-slide');
        kitchenAndMenuImagesWrapper.appendChild(img);
    });

    // Create arrows container
    const kitchenAndMenuArrows = document.createElement('div');
    kitchenAndMenuArrows.classList.add('arrows', 'kitchen-and-menu-arrows');

    // Create left arrow
    const kitchenAndMenuLeftArrow = document.createElement('a');
    const kitchenAndMenuLeftArrowImg = document.createElement('img');
    kitchenAndMenuLeftArrowImg.src = arrow1Img;
    kitchenAndMenuLeftArrowImg.alt = '';
    kitchenAndMenuLeftArrowImg.classList.add('arrow', 'arrow-1', 'kitchen-and-menu-arrow-1');
    kitchenAndMenuLeftArrow.appendChild(kitchenAndMenuLeftArrowImg);

    // Create right arrow
    const kitchenAndMenuRightArrow = document.createElement('a');
    const kitchenAndMenuRightArrowImg = document.createElement('img');
    kitchenAndMenuRightArrowImg.src = arrow2Img;
    kitchenAndMenuRightArrowImg.alt = '';
    kitchenAndMenuRightArrowImg.classList.add('arrow', 'arrow-2', 'kitchen-and-menu-arrow-2');
    kitchenAndMenuRightArrow.appendChild(kitchenAndMenuRightArrowImg);

    // Append arrows to arrows container
    kitchenAndMenuArrows.appendChild(kitchenAndMenuLeftArrow);
    kitchenAndMenuArrows.appendChild(kitchenAndMenuRightArrow);

    // Append the images wrapper and arrows to the slider container
    kitchenAndMenuSlider.appendChild(kitchenAndMenuImagesWrapper);
    kitchenAndMenuSlider.appendChild(kitchenAndMenuArrows);

    // Create the kitchen and menu text
    const kitchenAndMenuText = document.createElement('div');
    kitchenAndMenuText.className = 'kitchen-and-menu-text';

    const kitchenAndMenuHeading = document.createElement('p');
    kitchenAndMenuHeading.className = 'kitchen-and-menu-heading h4';
    kitchenAndMenuHeading.textContent = 'Kitchen and Menu';

    const kitchenAndMenuParagraph = document.createElement('p');
    kitchenAndMenuParagraph.className = 'kitchen-and-menu-text p';
    kitchenAndMenuParagraph.textContent = 'At Wine & Dine, our kitchen brings passion to every plate. Our menu is a harmonious blend of classic and contemporary dishes, crafted with the finest ingredients and a touch of creativity. From perfectly paired wines to mouthwatering entrees, every bite is designed to delight your senses and leave you craving more.';

    // Append the text to the kitchen and menu text container
    kitchenAndMenuText.appendChild(kitchenAndMenuHeading);
    kitchenAndMenuText.appendChild(kitchenAndMenuParagraph);

    // Append the kitchen and menu slider and text to the inner section
    aboutInnerKitchenAndMenu.appendChild(kitchenAndMenuSlider);
    aboutInnerKitchenAndMenu.appendChild(kitchenAndMenuText);





    // Create the reserve button section
    const aboutReserveBtn = document.createElement('div');
    aboutReserveBtn.className = 'about-reserve-btn';

    const reserveButtonLink = document.createElement('a');
    reserveButtonLink.href = '';
    reserveButtonLink.textContent = 'RESERVE';

    // Append the reserve button
    aboutReserveBtn.appendChild(reserveButtonLink);

    // Append the inner sections and the reserve button to the container
    aboutContainer.appendChild(aboutInnerAtmosphere);
    aboutContainer.appendChild(aboutInnerKitchenAndMenu);
    aboutContainer.appendChild(aboutReserveBtn);

    // Append the container to the about section
    aboutSection.appendChild(aboutContainer);

    return aboutSection;
}