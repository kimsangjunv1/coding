// 01 HTML/CSS 디자인 구성
// 02 클릭한 카드 뒤집기
// 03 두개의 카드 뒤집기 확인하기 (첫번째, 두번째)

const memoryWrap = document.querySelector(".memory__wrap");
const memoryCards = memoryWrap.querySelectorAll(".cards li");

let cardOne, cardTwo;
let disableDeck = false;
let matchedCard = 0;

let memoryTimeReamining = 120,  // 남은 시간
    memoryTimeInterval = "",    // 시간 간격
    point = 100;

let sound = [
    "../../assets/music/success.m4a",
    "../../assets/music/fail.m4a",
    "../../assets/music/success.m4a"
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
            // alert("게임오버");
            // soundUnSuccess.play();
            // document.querySelector(".memory_end").style.display="block";
            endGame();
            // timeReamining = 120;  // 시간
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        // document.querySelector(".memory_count").innerText = point++;
        
        soundMatch.play();
        cardOne = cardTwo = "";
        disableDeck = false;
    } else {
        point--
        document.querySelector(".memory_count").innerText = point;
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

// 게임종료
function endGame(){
    alert("게임오버");
    soundUnSuccess.play();
    document.querySelector(".memory_end").style.display="flex";
    document.querySelector(".memory_end").style.transform="translateY(0px)";
}2

// 시간 설정하기 0:00
function reduceTimes(){
    memoryTimeReamining--;
    if(memoryTimeReamining == 0){
        // matchedCard=8;
        document.querySelector(".memory_end").style.display="block";
        endGame()
    }
    // soundUnSuccess.play();
    
    document.querySelector(".memory_desc i").innerText = displayTimes();
}


// 시간 표시하기
function displayTimes(){
    if(memoryTimeReamining <= 0){
        return "0:00";
    } else {
        let minutes = Math.floor(memoryTimeReamining / 60);
        let seconds = memoryTimeReamining % 60;
        // 초 단위가 한자리수일 때 0 추가
        if(seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }
}

// 카드 섞기
function shuffleCard(){
    cardOne = cardTwo = "";
    disableDeck = false;
    matchedCard = 0;
    point=100;
    
    memoryTimeInterval = setInterval(reduceTimes, 1000);
    memoryTimeReamining=20;
    clearInterval(memoryTimeInterval)


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
        document.querySelector(".memory_count").innerText = point;
    })
}


// shuffleCard();

// 카드 클릭
memoryCards.forEach((card,i)=>{
    card.addEventListener("click", flipCard);
})



// 개인 커스텀
document.querySelector(".icon2").addEventListener("click",()=>{
    document.querySelector(".sourceContMemory").style.display="block";
    document.querySelector(".memory_begin").style.transform="translateY(0px)";
    // shuffleCard();
})

document.querySelector(".sourceContMemory_header img").addEventListener("click", ()=>{
    document.querySelector(".sourceContMemory").style.display="none";
})

document.querySelector(".memory_begin p:nth-child(3)").addEventListener("click", ()=>{
    // clearInterval(memoryTimeInterval)
    document.querySelector(".memory_begin").style.transform="translateY(1000px)";
    memoryTimeInterval = setInterval(reduceTimes, 1000);
    shuffleCard();
})

document.querySelector(".memory_restart").addEventListener("click", ()=>{
    document.querySelector(".memory_end").style.transform="translateY(1000px)";
    // memoryTimeInterval = setInterval(reduceTimes, 1000);
    // memoryTimeReamining=120;
    // clearInterval(memoryTimeInterval)
    shuffleCard();
})

document.querySelector(".icon5").addEventListener("click",()=>{
    document.querySelector(".sourceCont").style.display="block";
})
document.querySelector(".sourceCont_header img").addEventListener("click",()=>{
    document.querySelector(".sourceCont").style.display="none";
})