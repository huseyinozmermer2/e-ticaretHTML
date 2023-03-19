//! home sidebar start
(function sidebarFunc() {
    const btnOpenSidebar = document.querySelector("#btn-menu");
    const sidebar = document.querySelector("#sidebar");
    const close_sidebar = document.querySelector("#close-sidebar");

    btnOpenSidebar.addEventListener("click", () => {
        sidebar.style.left = "0";
    });

    close_sidebar.addEventListener("click", () => {
        sidebar.style.left = "-100%";
    });

    /* click outside start */
    document.addEventListener("click", function (event) {
        if (
            !event.composedPath().includes(sidebar) &&
            !event.composedPath().includes(btnOpenSidebar)
        ) {
            sidebar.style.left = "-100%";
        }
    });
    /* click outside end */
})();
//! home sidebar end

//! search modal start
(function searchModalFunc() {
    const btnOpenSearchs = document.querySelector(".search-buttons");
    const btnOpenSearch = document.querySelector(".search-button");
    const searchResults = document.getElementsByClassName("search-results");
    //console.log(searchResults);
    btnOpenSearchs.addEventListener("click", function () {
        searchResults[0].style.visibility = "visible";
        searchResults[0].style.opacity = "1";
    });
    btnOpenSearch.addEventListener("click", function () {
        searchResults[0].style.visibility = "visible";
        searchResults[0].style.opacity = "1";
    });

    /* click outside start */
    document.addEventListener("click", function (e) {
        if (
        !e.composedPath().includes(searchResults[0]) &&
        !e.composedPath().includes(btnOpenSearchs) &&
        !e.composedPath().includes(btnOpenSearch)
        ){
            searchResults[0].style.visibility = "hidden";
            searchResults[0].style.opacity = "0";
        }
    });

    /* click outside end */
})();
//! search modal end

//! search modal start
(function searchModalFunc() {
    const btnOpenSearchs = document.querySelector(".search-buttons2");
    const btnOpenSearch = document.querySelector(".search-button2");
    const searchResults = document.getElementsByClassName("search-results2");
    //console.log(searchResults);
    btnOpenSearchs.addEventListener("click", function () {
        searchResults[0].style.visibility = "visible";
        searchResults[0].style.opacity = "1";
    });
    btnOpenSearch.addEventListener("click", function () {
        searchResults[0].style.visibility = "visible";
        searchResults[0].style.opacity = "1";
    });

    /* click outside start */
    document.addEventListener("click", function (e) {
        if (
        !e.composedPath().includes(searchResults[0]) &&
        !e.composedPath().includes(btnOpenSearchs) &&
        !e.composedPath().includes(btnOpenSearch)
        ){
            searchResults[0].style.visibility = "hidden";
            searchResults[0].style.opacity = "0";
        }
    });

    /* click outside end */
})();
//! search modal end


//! yukarı çık butonu
const yukari = document.getElementsByClassName("body-top")[0];
window.addEventListener("scroll", () => {
    const mesafe = window.scrollY;
    if (mesafe > 200) {
        yukari.classList.add("active");
    } else {
        yukari.classList.remove("active");
    }
});


//! 
//! yukarı çık butonu
const header_nav = document.getElementsByClassName("header-row")[0];
window.addEventListener("scroll", () => {
    const mesafe = window.scrollY;
    if (mesafe > 20) {
        header_nav.classList.add("active");
    } else {
        header_nav.classList.remove("active");
    }
});