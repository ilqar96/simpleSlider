var images =["1.jpeg","2.jpeg","3.jpeg","4.jpeg"];
var i=0;
var sliderImg = document.getElementById("sliderImg")
var btnRigh = document.querySelector(".btnRight");
var btnLeft = document.querySelector(".btnLeft");
var myInterval;
var container = document.querySelector(".container");

btnRigh.addEventListener("click",rightClick);
btnLeft.addEventListener("click",leftClick);
container.addEventListener("mouseover",stopInterval)
container.addEventListener("mouseout",startInterval)

// button click functions 
function rightClick(){
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    sliderImg.setAttribute('src','img/'+images[i]+'');
}
function leftClick(){
    if(i>0){
        i--;
    }else{
        i=images.length-1;
    }
    sliderImg.setAttribute('src','img/'+images[i]+'');
}
// auto switching functions
function startInterval(){
    myInterval = setInterval(rightClick,2000);
}
function stopInterval(){
    clearInterval(myInterval);
}

