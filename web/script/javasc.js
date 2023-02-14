const nav=document.querySelector("#navigation");
const login=document.querySelector(".nav-l");
function scrollVal() {
    console.log(window.scrollY);
}
function changeNav(){
    nav.classList.remove("white");
    nav.classList.add("dark-blue");
    for(var i=0;i<4;i++)
    {
        document.querySelectorAll("nav li")[i].classList.add("color-white");
    }
    login.classList.add("dark-blue");
    document.querySelector(".btn-login").classList.add("dark-blue");
    login.classList.add("color-white");
    nav.classList.add("shadow-no");
}
function defaultNav(){
    nav.classList.add("white");
    nav.classList.remove("dark-blue");
    for(var i=0;i<4;i++)
    {
        document.querySelectorAll("nav li")[i].classList.remove("color-white");
    }
    login.classList.remove("dark-blue");
    document.querySelector(".btn-login").classList.remove("dark-blue");
    login.classList.remove("color-white");
    nav.classList.remove("shadow-no");
}

window.addEventListener("scroll", function () {
    if(window.scrollY >= 800 && window.scrollY <=1500)
    {
        changeNav();
    }
    else{
        defaultNav();
    }
    scrollVal();
    document.querySelector("#navigation").classList.add("scroll");
    if (window.scrollY === 0)
        document.querySelector("#navigation").classList.remove("scroll");

});


