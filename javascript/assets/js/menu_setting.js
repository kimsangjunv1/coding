const lightMode = document.querySelector(".light")
const darkMode = document.querySelector(".dark")
const Main = document.querySelector("body")
const mainContainer = document.querySelector("a")
const mainHeader = document.querySelector("#header")
const mainHeader__li = document.querySelectorAll('*')
const compactMenu = document.querySelector(".compact_menu")
const allContainer = document.querySelector(".container")
const showContainer = document.querySelector(".extend_menu")

lightMode.addEventListener("click", ()=>{
    lightMode.classList.add("hide")
    darkMode.classList.remove("hide")
    Main.classList.add("dark")
    mainContainer.style.color="#fff"
    mainHeader.style.background="#313131b0"
    mainHeader.style.borderRight="0.1px solid #484747"
    mainHeader__li.style.color="#ffffff9e !important"
})
darkMode.addEventListener("click", ()=>{
    darkMode.classList.add("hide")
    lightMode.classList.remove("hide")
    Main.classList.remove("dark")
    mainContainer.classList.remove("dark")
    mainContainer.style.color="#000"
    mainHeader.style.background="rgba(255, 255, 255, 0.586)"
    mainHeader.style.borderRight="0.1px solid #fff"
    mainHeader__li.style.color="#0000009e !important"
})

compactMenu.addEventListener("click", ()=>{
    mainHeader.style.left="-300px"
    // allContainer.style.margin="50px 15px 20px 40px"
    allContainer.style.padding="40px 0px 0px 0px"
    showContainer.classList.remove("extend_menu_opacity_hide")
    showContainer.classList.add("extend_menu_opacity_show")
})

showContainer.addEventListener("click", ()=>{
    mainHeader.style.left="0"
    // allContainer.style.margin="50px 15px 20px 300px"
    allContainer.style.padding="40px 0px 0px 245px"
    showContainer.classList.add("extend_menu_opacity_hide")
    showContainer.classList.remove("extend_menu_opacity_show")
})
const modeBtn = document.querySelector(".mode__change__button__test")
const allCont = document.querySelector("html")

// modeBtn.addEventListener("click",()=>{
//     allCont.classList.add("dark_main")
// })