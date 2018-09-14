(function () {
    "use strict";

    const carousel = $('.carousel');
    let instance;
    const mainButton = $('#mainButton');
    const aboutMeButton = $('#aboutButton');
    // const aboutMePage = $('.about');
    const proficiencyButton = $('#proficiencyButton');
    // const proficiencyPage = $('.proficiency');
    const projectsButton = $('#projectsButton');
    // const projectsPage = $('.projects');
    const bitButton = $('#bitButton');
    const resumeButton = $('#resumeButton');
    // const resumePage = $('.resume');
    const contactButton = $('#contactButton');
    // const contactPage = $('.contact');

    $(document).ready(() => {
        instance = M.Carousel.getInstance(carousel);
        M.toast({html: 'I am a toast!'});
        $('select').formSelect();
        $('.carousel').carousel({
            fullWidth: true,
            numVisible: 6
        });
    });

    mainButton.click(function () {
        $('.carousel.carousel-slider').carousel('set', 0);
    });

    aboutMeButton.click(function () {
        $('.carousel.carousel-slider').carousel('set', 1);
    });

    proficiencyButton.click(function () {
        $('.carousel.carousel-slider').carousel('set', 2);
    });

    projectsButton.click(function () {
        $('.carousel.carousel-slider').carousel('set', 3);
    });

    resumeButton.click(function () {
        $('.carousel.carousel-slider').carousel('set', 4);
    });

    contactButton.click(function () {
        $('.carousel.carousel-slider').carousel('set', 5);
    });

})();
