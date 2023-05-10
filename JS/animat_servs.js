var topTextone = document.getElementById("toptextone")
var hText = document.getElementById("h2")
var buttonSend = document.getElementById("button_send")
var cards = document.querySelectorAll("#point")
var lists = document.querySelectorAll("#list")
var arrayCards = []
var arrayList = []
var positionCards = 70
var opacityText = 0
var positionButton = -300
var opacityButton = 0
var positionlist = 400

/* Change opacity for text */
function ChangeOpacityText(){
        if(opacityText <= 100){
            topTextone.style.opacity = opacityText + "%"
            hText.style.opacity = opacityText + "%"
            opacityText += 10
        }
}
setInterval(ChangeOpacityText,100)
/* Change opacity for text */

/* Animation Button */
function ChangeButtonPosition(){
    if(positionButton <=0){
        buttonSend.style.left = positionButton + "px"
        positionButton += 15
    }
}

setInterval(ChangeButtonPosition,10)
/* Animation Button */

/* Next Page */
function toNextPage(){
    window.location.href = 'file:///C:/Users/User/Desktop/%D0%9A%D1%83%D1%80%D1%81_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82/HTML/application.html#';
}
/* Next Page */

/* Animation Cards */

for(let elem of cards){
    arrayCards.push(elem)
}
function ChangePositionCard() {
    if(positionCards >= 0){
    
    positionCards -= 5

   } 
    for(let i =0; i < 6; i++){
    arrayCards[i].style.top = positionCards + "px"
} 

  }
window.addEventListener("scroll", () => {
      
    if(window.scrollY > 92){
        setInterval(ChangePositionCard,30)
    }
})

/*Animation Cards */

function getScroll(){
    alert(window.scrollY) // 102
}
/* OnLoad */
window.onload = ()=>{
    
    if(window.scrollY > 92){
        setInterval(ChangePositionCard,30)
     }
}



/* Animation list */

for (let list of lists){
    arrayList.push(list)
}
function ChangePositionList(){
    if(positionlist > 0){
        for(let i = 0; i<5;i++)[
            arrayList[i].style.left = positionlist + "px"
        ]
        positionlist -= 10
    }
}

window.addEventListener("scroll", () => {
      
    if(window.scrollY > 420){
      setInterval( ChangePositionList,10)
    }
})
window.onload = function() {
    if(window.scrollY > 20){
       setInterval(ChangePositionList,10)
    }
    
}
/* Animation list */

