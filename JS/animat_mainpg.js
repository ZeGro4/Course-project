var mtext = document.getElementById("main_text")
var cards = document.querySelectorAll("div.container")
var div = document.getElementById("section")
var steps = document.querySelectorAll(".step")
var posText = 200
var opacityText = 0
mtext.style.opacity = opacityText
mtext.style.left = posText + 'px'

// Следущая страница
function toNextPage(){
    window.location.href = 'file:///C:/Users/User/Desktop/%D0%9A%D1%83%D1%80%D1%81_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82/HTML/application.html#';
}


/* Перемещегие текста */
function moveText(){
    
    if(posText > 0){
        posText -= 5
        mtext.style.left = posText + 'px' 
        if(posText < 100){
            opacityText +=10
            mtext.style.opacity = opacityText + '%'
        }
    }
}
setInterval(moveText,15)
/* Перемещегие текста */

/* Анимация карточек */
var posCards = -80
var opacityCards = 0
for (let card of cards) {
    card.style.top = posCards + "px"
    card.style.opacity = opacityCards + "%"
  }
function moveCadrs(){
    if(posCards < 0){
        for (let card of cards) {
            card.style.top = posCards + "px"
            card.style.opacity = opacityCards + "%"
            posCards += 1.5
            opacityCards +=5
          }
    }
}
window.onload = function() {
    if(window.scrollY > 350){
       setInterval(moveCadrs,20)
    }
    
}
window.addEventListener ("scroll",() => {
    
    if(window.scrollY > 350){
        setInterval(moveCadrs,10)
    }
})

/* Анимация карточек */

/* Анимация шагов */
var arraySteps = []
var posStep1 = 300
var posStep2 = 300
var posStep3 = 300
var opacityStep = 0
for(let elem of steps){
    arraySteps.push(elem)
}
function moveStep(){
    if(posStep1 >= 0){
        posStep1 -=10 
        arraySteps[0].style.left = posStep1 + "px"
        arraySteps[0].style.opacity = opacityStep + "%"
        opacityStep +=10
    }
    if(posStep1 < 200 && posStep2 >= 0){
        posStep2 -=10 
        arraySteps[1].style.left = posStep2 + "px"
        arraySteps[1].style.opacity = opacityStep + "%"
        opacityStep +=10
    }
    if(posStep1 < 100 && posStep3 >= 0){
        posStep3 -=10 
        arraySteps[2].style.left = posStep3 + "px"
      arraySteps[2].style.opacity = opacityStep + "%"
        opacityStep +=10
    }
}

window.onload = function() {
    if(window.scrollY > 350){
       setInterval(moveStep,20)
    }
    
}
window.addEventListener ("scroll",() => {
    
    if(window.scrollY > 900){
        setInterval(moveStep,10)
    }
})

function getScroll(){
    alert(window.scrollY)
}
/* Анимация шагов */
