var comments = document.querySelectorAll('.comment')
var cards = document.querySelectorAll(".container")
var arrayCards = []
var arrayComm = []
var posFirst = 500, posSecond = -500, posThird = 500
var positionCards = 100
var button = document.querySelector(".button_send")
/* Animate Comment */
for(let elem of comments){
    arrayComm.push(elem)
}
function changePositionComm(){
if(posFirst >=0){
    arrayComm[0].style.left = posFirst + "px"
    arrayComm[1].style.left = posSecond + "px"
    arrayComm[2].style.left = posThird + "px"
    posFirst -= 10
    posSecond += 10
    posThird -= 10
}
}
window.addEventListener ("scroll",() => {
    
    if(window.scrollY >= 80){
        setInterval(changePositionComm,10)
    }
})

/* Animate Comment */


/* Animation Cards */

for(let elem of cards){
    arrayCards.push(elem)
}

function ChangePositionCard() {
    if(positionCards >= 0){
    
    positionCards -= 10

   } 
    for(let i =0; i < 3; i++){
    arrayCards[i].style.top = positionCards + "px"
} 

  }
 window.addEventListener("scroll", () => {
      
    if(window.scrollY > 670){
        setInterval(ChangePositionCard,10)
      /* ChangePositionCard() */
    }
}) 

window.onload = function() {
    if(window.scrollY > 670){
       setInterval(ChangePositionCard,20)
    }
    
}
function getScroll(){
    alert(window.scrollY)
}
button.onclick = ()=>{
    alert("Ваш комментарий был отправлен на рассмотрение модераторам")
}