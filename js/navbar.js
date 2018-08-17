(function () {
    "use strict";

    const aboutMeButton = $('#about-meButton');
    const aboutMePage = $('.about-me');
    const proficiencyButton = $('#proficiencyButton');
    const proficiencyPage = $('.proficiency');
    const projectsButton = $('#projectsButton');
    const projectsPage = $('.projects');
    const bitButton = $('#bitButton');
    const resumeButton = $('#resumeButton');
    const resumePage = $('.resume');
    const contactButton = $('#contactButton');
    const contactPage = $('.contact');
    const list = [aboutMePage, proficiencyPage, projectsPage, resumePage, contactPage];

    // function switchTabs(visible/*, list*/) {
        // console.log(list);

        // for (let i = 0; i < list.length; i++) {
            // console.log(list[i]);
            // console.log("checking index " + i);
            // console.log(list[i].name)
            // if (!i.classList.contains("hide")) {
            //     i.addClass("hide");
            // }
        // }
        // visible.removeClass("hide");
    // }

    $(document).ready(function () {
        $('.sidenav').sidenav();
    });

    // aboutMeButton.click(switchTabs(aboutMePage/*, list*/));
    //
    // proficiencyButton.click(switchTabs(proficiencyPage/*, list*/));
    //
    // projectsButton.click(switchTabs(projectsPage/*, list*/));
    //
    // resumeButton.click(switchTabs(resumePage/*, list*/));
    //
    // contactButton.click(switchTabs(contactPage/*, list*/));
//
})();
