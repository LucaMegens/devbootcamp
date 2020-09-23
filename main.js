window.addEventListener("load", (e) => {
    console.log("DOM loaded. YAY!")


    // add click even listeners for 'click' to our nav links (a.tab)
    var navButtons = document.getElementsByClassName("tab");

    for(navButton of navButtons) {
    navButton.addEventListener("click", navClickHandler);
    }

    function navClickHandler(event) { 
        //make all buttons inactive(remove class active)
        for (navButton of navButtons) {
            navButton.classList.remove("active");
            
        }
        //make the clicked button active
        this.classList.add("active");
    }
});
