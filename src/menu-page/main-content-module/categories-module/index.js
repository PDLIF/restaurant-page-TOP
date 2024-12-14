import './styles.css';
import wineImg from '../../../assets/images/menu/wine.png';
import saladImg from '../../../assets/images/menu/salads.png';
import soupImg from '../../../assets/images/menu/soups.png';
import meatImg from '../../../assets/images/menu/meat.png';


export const createCategoriesSection = () => {
        // Create the categories section
    const categoriesSection = document.createElement('section');
    categoriesSection.className = 'categories-section';

    // Create the categories heading
    const categoriesHeading = document.createElement('p');
    categoriesHeading.className = 'h3 categories-heading';
    categoriesHeading.textContent = 'Categories';

    // Create the categories container
    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'categories';

    // Define the category data
    const categoriesData = [
        { link: '', imageSrc: wineImg, categoryName: 'Wine' },
        { link: '', imageSrc: saladImg, categoryName: 'Salads' },
        { link: '', imageSrc: soupImg, categoryName: 'Soups' },
        { link: '', imageSrc: meatImg, categoryName: 'Meat' }
    ];

    // Create the categories dynamically
    categoriesData.forEach(category => {
        const categoryLink = document.createElement('a');
        categoryLink.href = category.link;

        const categoryDiv = document.createElement('div');
        categoryDiv.className = `category ${category.categoryName.toLowerCase()}`;

        const categoryImage = document.createElement('img');
        categoryImage.src = category.imageSrc;
        categoryImage.alt = category.categoryName;

        const categoryText = document.createElement('p');
        categoryText.className = 'category-heading';
        categoryText.textContent = category.categoryName;

        categoryDiv.appendChild(categoryImage);
        categoryDiv.appendChild(categoryText);
        categoryLink.appendChild(categoryDiv);
        categoriesContainer.appendChild(categoryLink);
    });

    // Add the heading and categories container to the categories section
    categoriesSection.appendChild(categoriesHeading);
    categoriesSection.appendChild(categoriesContainer);

    return categoriesSection;
}