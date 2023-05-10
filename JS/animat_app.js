var divcontent = document.getElementById("window")
var opacityWindow = 0
var opacityWform = 0
var NameUser = document.getElementById("user")
var NumberUser = document.getElementById("number")
var CityUser = document.getElementById("city")
var Texth2 = document.getElementById("texth2")
var position = 80
NameUser.style.opacity = opacityWform + "%"
NumberUser.style.opacity = opacityWform + "%"
CityUser.style.opacity = opacityWform + "%"
Texth2.style.opacity = opacityWform + "%"
NameUser.style.transform = "translateY("+position+"px)"
NumberUser.style.transform = "translateY("+position+"px)"
CityUser.style.transform = "translateY("+position+"px)"
function changeOpacity(){
    if(opacityWindow < 100){
        divcontent.style.opacity = opacityWindow + "%"
        opacityWindow +=10
    }
    if( opacityWindow >50&& position > 0){
        NameUser.style.transform = "translateY("+position+"px)"
        NumberUser.style.transform = "translateY("+position+"px)"
        CityUser.style.transform = "translateY("+position+"px)"
        position -=5
    }

        NameUser.style.opacity = opacityWform + "%"
        NumberUser.style.opacity = opacityWform + "%"
        CityUser.style.opacity = opacityWform + "%"
        Texth2.style.opacity = opacityWform + "%"
        if(opacityWform < 100){
            opacityWform +=10
        }

}
setInterval(changeOpacity,35)