(function () {
    "use strict";

    const aboutMeButton = $('#about-meButton');
    const aboutMePage = $('#about-meButton');
    const proficiencyButton = $('#proficiencyButton');
    const projectsButton = $('#projectsButton');
    const bitButton = $('#bitButton');
    const resumeButton = $('#resumeButton');
    const contactButton = $('#contactButton');
    const list = []
    function switchTabs(visible, list) {
    }

    $(document).ready(function () {
        $('.sidenav').sidenav();
    });

    aboutMeButton.click();

    proficiencyButton.click();

    projectsButton.click();

    resumeButton.click();

    contactButton.click();

    bitButton.click(() => {
        console.log("8-bit TIME!!!!!");
    });
})();
