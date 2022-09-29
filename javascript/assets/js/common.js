
        // 모달
        const modalBtn = document.querySelector(".modal__btn");
        const modalClose = document.querySelector(".modal__close");
        const modalCont = document.querySelector(".modal__cont");


        //보이기
        modalBtn.addEventListener("click", ()=>{
            modalCont.classList.add("show");
            modalCont.classList.remove("hide");
        })


        //숨기기
        modalClose.addEventListener("click", ()=>{
            modalCont.classList.add("hide");
        })


        // 탭 메뉴
        const tabBtn = document.querySelectorAll(".modal__box .tabs > div")
        const tabCont = document.querySelectorAll(".modal__box .cont > div")

        tabBtn.forEach((e, i) => {
            e.addEventListener("click", (event) => {
                event
                    .preventDefault(); //상단의 event 라는 장소에 클릭 값이 저장되는데 그 장소에 지정한 이름 뒤에 .preventDefault()를 적어 막는다

                //li의 클래스로 붙어있던 active를 모두 제거했습니다.
                //e라고 지정해 li를 불러와도 괜찮고 li를 적어 태그를 바로 지정해도 괜찮다.
                tabBtn.forEach(e => {
                    e.classList.remove("active")
                })

                //내가 클릭한 버튼(e=li)에 active를 추가해봄
                e.classList.add("active")

                //버튼을 클릭하면 모든 자식 박스를 숨김
                tabCont.forEach(div => {
                    div.style.display = "none"
                })

                //[i]클릭한 버튼과 [i]박스를 보이게 함
                tabCont[i].style.display = "block";
            })
        })