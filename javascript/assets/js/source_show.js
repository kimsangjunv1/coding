hljs.highlightAll();

// 탭 가져오기
const tabAll = document.querySelectorAll(".source__tab > div")
const tabHtml = document.querySelector(".source__tab__01")
const tabCss = document.querySelector(".source__tab__02")
const tabJavascript = document.querySelector(".source__tab__03")

// 탭 소스
const tabSourceContainer = document.querySelectorAll(".source__container > div")
const tabSourceHtml = document.querySelector(".source__contaienr__html")
const tabSourceCss = document.querySelector(".source__contaienr__css")
const tabSourceJavascript = document.querySelector(".source__contaienr__javscript")

//소스 보기 버튼
const sourceShow = document.querySelector(".source__button")

//소스 닫기 버튼
const sourceClose = document.querySelector(".source__close")

//소스 창
const sourceDescCont = document.querySelector(".source__desc")
const sourceDescBox = document.querySelector(".source__box")

sourceShow.addEventListener("click", ()=>{
    tabSourceHtml.classList.add("active")
    sourceDescBox.classList.remove("hide")
    sourceDescCont.classList.remove("hide")
    tabSourceHtml.style.display="block"
    sourceShow.style.display="none"
})

sourceClose.addEventListener("click", ()=>{
    sourceDescCont.classList.add("hide")
    sourceDescBox.classList.add("hide")
    sourceShow.style.display="block"
})

tabAll.forEach((e,i)=>{
    e.addEventListener("click", ()=>{
        tabAll.forEach((e,i)=>{
            e.classList.remove("active")
        })
        e.classList.add("active")
        tabSourceContainer.forEach((e,i)=>{
            tabSourceContainer[i].style.display="none"
        })
        tabSourceContainer[i].style.display="block"
    })
})