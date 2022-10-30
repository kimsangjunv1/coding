// 01 HTML/CSS 디자인 구성
// 02 클릭한 카드 뒤집기
// 03 두개의 카드 뒤집기 확인하기 (첫번째, 두번째)

const memoryWrap = document.querySelector(".memory__wrap");
const memoryCards = memoryWrap.querySelectorAll(".cards li");

let cardOne, cardTwo;
let disableDeck = false;
let matchedCard = 0;

let sound = [
    "../../../assets/music/success.m4a",
    "../../../assets/music/fail.m4a",
    "../../../assets/music/success.m4a"
]

let soundMatch = new Audio(sound[0]);
let soundUnMatch = new Audio(sound[1]);
let soundUnSuccess = new Audio(sound[2]);

// 카드 뒤집기
function flipCard(e){
    let clickedCard = e.target;

    if(clickedCard !== cardOne && !disableDeck){
        clickedCard.classList.add("flip")
        
        if(!cardOne){
            return cardOne = clickedCard;
        }

        cardTwo = clickedCard;
        disableDeck=true;

        let cardOneImg = cardOne.querySelector(".back img").src;
        let cardTwoImg = cardTwo.querySelector(".back img").src;

        matchCards(cardOneImg, cardTwoImg);
    }
}

//카드 확인(두개의 이미지 비교)
function matchCards(img1, img2){
    if(img1 == img2){
        //같을 경우
        matchedCard++;
        //이미지가 일치하는 경우

        if(matchedCard == 8){
            alert("게임오버");
            soundUnSuccess.play();
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        
        soundMatch.play();
        cardOne = cardTwo = "";
        disableDeck = false;
    } else {

        setTimeout(()=>{
            //이미지가 일치하지 않는 경우(틀린음악, 이미지가 맞지 않는 경우)
            cardOne.classList.add("shakeX");
            cardTwo.classList.add("shakeX");
        }, 500);

        setTimeout(()=>{
            cardOne.classList.remove("shakeX");
            cardTwo.classList.remove("shakeX");
            cardOne.classList.remove("flip");
            cardTwo.classList.remove("flip");
            cardOne = cardTwo = "";
            disableDeck = false;
    }, 1000)
    soundUnMatch.play();
    }
}

// 카드 섞기
function shuffleCard(){
    cardOne = cardTwo = "";
    disableDeck = false;
    matchedCard = 0;

    let arr = [2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9];
    let result = arr.sort(()=>Math.random()>0.5 ? 1 : -1);

    memoryCards.forEach((card, index)=>{
        card.classList.remove("flip");
        
        setTimeout((e,i)=>{
            card.classList.add("flip");
        }, 200 * index)

        setTimeout((e,i)=>{
            card.classList.remove("flip");
        }, 4000);

        let imgTag = card.querySelector(".back img");
        imgTag.src = `../assets/memory/${arr[index]}.png`
    })
}


// shuffleCard();

// 카드 클릭
memoryCards.forEach((card,i)=>{
    card.addEventListener("click", flipCard);
})