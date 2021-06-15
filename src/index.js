import './styles/index.scss'

import './media/il-about.svg'
import './media/nost.svg'
import './media/doucko.svg'
import './media/studenti-studentum.svg'
import './media/arrow-right.svg'

const nav = document.getElementsByTagName("nav")[0];
const join_btn = document.getElementById("join-btn")
const nav_logo = document.getElementsByClassName("logo")[0]
const section_1 = document.getElementsByClassName("uvod")[0]
const section_2 = document.getElementsByClassName("nastenka")[0]
const section_3 = document.getElementsByClassName("projekty")[0]
window.addEventListener("scroll", () => {
    if (window.scrollY < 35 && nav.classList.contains("scroll")) {
        nav.classList.remove("scroll")
    }
    else if (window.scrollY >= 35 && !nav.classList.contains("scroll")) {
        nav.classList.add("scroll")
    }
    
    if (window.scrollY < section_2.offsetTop-window.innerHeight/2 && join_btn.classList.contains("scroll")) {
        join_btn.classList.remove("scroll")
    }
    
    else if(window.scrollY >= section_2.offsetTop-window.innerHeight/2 && !join_btn.classList.contains("scroll")) {
        join_btn.classList.add("scroll")
    }
})

const burger = document.getElementsByClassName("burger")[0]
const body = document.body

burger.addEventListener("click", (e) => {
    if(!body.classList.contains("menu-open")) {
        body.classList.add("menu-open")
    }
    else {
        body.classList.remove("menu-open")
    }
})

body.addEventListener("click", (e)=> {
    if(!e.target.classList.contains("nav-links") && !e.target.classList.contains("burger")  && body.classList.contains("menu-open")) {
        body.classList.remove("menu-open")
    }
})