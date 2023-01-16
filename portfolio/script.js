var bannerItem = 0;
var bannerTimer = 4000;
var bannerArray = ["dissBanner1", "dissBanner2", "dissBanner3"];
var bannerDirection = true;

window.onload = function(){
    bannerLoop1();
}

var startLoop = setInterval(function(){
    bannerLoop1();
},5000);           //Number of seconds before running again.

document.getElementById("main-diss-banner").onmouseenter = function(){
    clearInterval(startLoop);
}

document.getElementById("main-diss-banner").onmouseleave = function(){
    startLoop = setInterval(function() {
        bannerLoop1();
    }, bannerTimer);
}

document.getElementById("btnPrevious").onclick = function(){    
    bannerDirection = false;
    bannerLoop1();
}

document.getElementById("btnNext").onclick = function(){
    bannerDirection = true;
    bannerLoop1();
}

function bannerLoop1(){
    const moveArray = ["0px", "-1200px", "1200px"];
    const moveDepthArray = ["1000", "1500", "500"];
    var bannerSwitchArray = ["a","b","c"];

    if(bannerDirection === true){
        document.getElementById(bannerArray[0]).style.opacity = "0";
        moveForwards(moveArray, moveDepthArray, bannerSwitchArray);
    }else{
        document.getElementById(bannerArray[0]).style.opacity = "0";
        moveBackwards(moveArray, moveDepthArray,  bannerSwitchArray);
    }    

    setTimeout(function(){
        document.getElementById(bannerArray[0]).style.opacity = "1";
    }, 750);       
}


function moveForwards(a,b,swapArray){
    j = 2;  
    console.log();
    for(let i = 0; i<=2; i++){                         //i0->j2   i1->j0    i2->j1
        swapArray[j] = bannerArray[i];

        if(j === 2){
            j = 0;
        } else if(j === 0){
            j = 1;
        }else if (j === 1){
            j = 2;
        }
    }
    bannerArray = swapArray;

    //Rotate / sort images 
    setTimeout(function(){
        if(bannerDirection === true){
            for(let i = 0; i<bannerArray.length; i++){
                document.getElementById(bannerArray[i]).style.right = a[i];
                document.getElementById(bannerArray[i]).style.zIndex = b[i];
            }
        }
    }, 500);
}

function moveBackwards(a, b, swapArray){

    j = 1;  
    for(let i = 0; i<=2; i++){                         //i0->j1   i1->j2    i2->j0
        swapArray[j] = bannerArray[i];

        if(j === 2){
            j = 0;
        } else if(j === 0){
            j = 1;
        }else if (j === 1){
            j = 2;
        }
    }      
    bannerArray = swapArray;

    //Rotate / sort images 
    setTimeout(function(){
        if(bannerDirection === false){
            for(let i = 2; i>=0; i--){      
                document.getElementById(bannerArray[i]).style.right = a[i];
                document.getElementById(bannerArray[i]).style.zIndex = b[i];
            }
        }
    }, 500);
}