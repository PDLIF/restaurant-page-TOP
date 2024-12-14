// Store Swiper instances globally so they can be destroyed
let atmosphereSwiper = null;
let kitchenAndMenuSwiper = null;

export const initializeSwipers = () => {
    // Destroy existing instances if they exist
    if (atmosphereSwiper) atmosphereSwiper.destroy(true, true);
    if (kitchenAndMenuSwiper) kitchenAndMenuSwiper.destroy(true, true);

    // Create new Swiper instances
    atmosphereSwiper = new Swiper('.atmosphere-slider', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        navigation: {
            nextEl: '.atmosphere-arrow-2',
            prevEl: '.atmosphere-arrow-1',
        },
    });

    kitchenAndMenuSwiper = new Swiper('.kitchen-and-menu-slider', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        navigation: {
            nextEl: '.kitchen-and-menu-arrow-2',
            prevEl: '.kitchen-and-menu-arrow-1',
        },
    });
};
