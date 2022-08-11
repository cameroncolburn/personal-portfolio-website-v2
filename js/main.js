window.addEventListener("load", function () {

    /* navbar style on scroll - adds shadow and transparency */
    window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".navbar");
        var navPosition = navbar.getBoundingClientRect();
        var boxShadow = document.querySelector(".box_shadow");
        var aboutMe = document.querySelector(".about_me_outer");
        var aboutMePosition = aboutMe.getBoundingClientRect();

        // checks that navbar is at top of viewport
        if (navPosition.bottom != aboutMePosition.top) {
            boxShadow.style.setProperty("box-shadow", "0px 1px 2px 2px rgba(0, 0, 0, 0.3)");
            boxShadow.style.setProperty("opacity", "0.98");
        } else if (navPosition.bottom == aboutMePosition.top) {
            boxShadow.style.setProperty("box-shadow", "none");
            boxShadow.style.setProperty("opacity", "1");
        }
    });

    /* Portfolio Card Overlays */
    document.querySelectorAll(".card_overlay").forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.setProperty("opacity", "0.97");
            let parent = element.parentNode;
            parent.style.setProperty("box-shadow", "0px 0px 6px 3px #840e0e");
            element.querySelector(".overlay_text_container").style.setProperty("top", "23%");
            element.querySelector(".overlay_text_container").style.setProperty("opacity", "1");
            element.querySelector(".overlay_button_container").style.setProperty("bottom", "-42%");
            element.querySelector(".overlay_button_container").style.setProperty("opacity", "1");
        });
    });

    document.querySelectorAll(".card_overlay").forEach(element => {
        element.addEventListener("mouseout", () => {
            element.style.setProperty("opacity", "0");
            let parent = element.parentNode;
            parent.style.setProperty("box-shadow", "none");
            element.querySelector(".overlay_text_container").style.setProperty("top", "20%");
            element.querySelector(".overlay_text_container").style.setProperty("opacity", "0");
            element.querySelector(".overlay_button_container").style.setProperty("bottom", "-45%");
            element.querySelector(".overlay_button_container").style.setProperty("opacity", "0");
        });
    });

    /* Hamburger icon switch - toggles hamburger icon when clicked */
    var navBurgerButton = document.querySelector("nav button");

    navBurgerButton.addEventListener("click", function () {
        // checks size of viewport and hamburger button display value
        if (window.innerWidth <= 991 && window.getComputedStyle(navBurgerButton).display === "block") {
            let icon = document.querySelectorAll("nav button span");
            if (window.getComputedStyle(icon[0]).display === "inline-block") {
                icon[0].style.display = "none";
                icon[1].style.display = "inline-block";
            } else {
                icon[0].style.display = "inline-block";
                icon[1].style.display = "none";
            }
        }
    });

    /* social links - footer */
    let socialBtn1 = document.querySelector("#social_btn_1");
    let socialBtn2 = document.querySelector("#social_btn_2");
    let socialBtn3 = document.querySelector("#social_btn_3");

    /* social links - event listeners */
    socialBtn1.addEventListener("mouseover", function () {
        socialBtn1.firstElementChild.style.fill = "#fff";
        socialBtn1.style.backgroundColor = "#f9af0c";
        socialBtn1.style.transform = "scale(1.1)";
    });

    socialBtn1.addEventListener("mouseout", function () {
        socialBtn1.firstElementChild.style.fill = "#aaa";
        socialBtn1.style.backgroundColor = "#343434";
        socialBtn1.style.transform = "scale(1.0)";
    });

    socialBtn2.addEventListener("mouseover", function () {
        socialBtn2.firstElementChild.style.fill = "#fff";
        socialBtn2.style.backgroundColor = "#ae3aa2";
        socialBtn2.style.transform = "scale(1.1)";
    });

    socialBtn2.addEventListener("mouseout", function () {
        socialBtn2.firstElementChild.style.fill = "#aaa";
        socialBtn2.style.backgroundColor = "#343434";
        socialBtn2.style.transform = "scale(1.0)";
    });

    socialBtn3.addEventListener("mouseover", function () {
        socialBtn3.firstElementChild.style.fill = "#fff";
        socialBtn3.style.backgroundColor = "#0e4fb5";
        socialBtn3.style.transform = "scale(1.1)";
    });

    socialBtn3.addEventListener("mouseout", function () {
        socialBtn3.firstElementChild.style.fill = "#aaa";
        socialBtn3.style.backgroundColor = "#343434";
        socialBtn3.style.transform = "scale(1.0)";
    });

    /* add current copyright date to footer */
    const year = new Date();
    let copyrightDate = document.querySelector("#copyright_date");

    copyrightDate.innerHTML = year.getFullYear();

});