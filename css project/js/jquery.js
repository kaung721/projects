window.addEventListener("scroll", function () {
    //script for video sliding from left to right
    var reveals = document.querySelectorAll(".leftRight");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (windowHeight - elementVisible > elementTop) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
    //script for video sliding from right to left
    var reveals = document.querySelectorAll(".rightLeft");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (windowHeight - elementVisible > elementTop) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
        }
});