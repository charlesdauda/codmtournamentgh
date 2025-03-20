let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menuBtn.onclick = () =>{
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

let faqBox = document.querySelectorAll('.faq .box-container .box');

faqBox.forEach(box =>{

    box.onclick = () =>{

        let content = box.querySelector('.content');
        let icon = box.querySelector('i');

        if(content.classList.contains('active')){
            content.classList.remove('active');
        }else{
            document.querySelectorAll('.faq .box-container .box .content').forEach(contents =>{
                contents.classList.remove('active');
            });
            content.classList.add('active');
        }

        if(icon.classList.contains('fa-minus')){
            icon.classList.replace('fa-minus', 'fa-plus');
        }else{
            document.querySelectorAll('.faq .box-container .box i').forEach(icons =>{
                icons.classList.replace('fa-minus', 'fa-plus');
            });
            icon.classList.replace('fa-plus', 'fa-minus');
        }

    }
});

document.addEventListener("DOMContentLoaded", function () {
   // ScrollReveal().reveal(".header", { delay: 300, origin: "top", distance: "50px", duration: 800, easing: "ease-in-out" });
    ScrollReveal().reveal(".home .content", { delay: 400, origin: "left", distance: "50px", duration: 1000, easing: "ease-in-out" });
    ScrollReveal().reveal(".home .image", { delay: 500, origin: "right", distance: "50px", duration: 1000, easing: "ease-in-out" });
    
    ScrollReveal().reveal(".features .box", { interval: 200, origin: "bottom", distance: "30px", duration: 800, easing: "ease-in-out" });
    ScrollReveal().reveal(".about .content", { delay: 500, origin: "left", distance: "50px", duration: 1000, easing: "ease-in-out" });
    ScrollReveal().reveal(".about .image", { delay: 600, origin: "right", distance: "50px", duration: 1000, easing: "ease-in-out" });
    
    ScrollReveal().reveal(".info-container .box", { interval: 300, origin: "bottom", distance: "40px", duration: 800, easing: "ease-in-out" });
    ScrollReveal().reveal(".pricing .box", { interval: 300, origin: "bottom", distance: "40px", duration: 800, easing: "ease-in-out" });
    ScrollReveal().reveal(".faq .box", { interval: 300, origin: "bottom", distance: "40px", duration: 800, easing: "ease-in-out" });
    
    ScrollReveal().reveal(".contact .box", { interval: 300, origin: "left", distance: "40px", duration: 800, easing: "ease-in-out" });
    ScrollReveal().reveal(".contact .form", { delay: 500, origin: "right", distance: "50px", duration: 1000, easing: "ease-in-out" });
    
    ScrollReveal().reveal(".footer", { delay: 400, origin: "bottom", distance: "50px", duration: 800, easing: "ease-in-out" });
});
