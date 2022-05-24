function bgColors(){
    var container = document.getElementById("container")
    var bgColorName = prompt("enter your color")
    container.style.backgroundColor = bgColorName;

}
function textColors(){
    var  heading = document.getElementById("heading")
    var para = document.getElementById("para")
    var bgColorName = prompt("enter your color")
    heading.style.color = bgColorName
    para.style.color = bgColorName

}
function bgColors2(){
    var container = document.getElementById("container2")
    var bgColorName = prompt("enter your color")
    container.style.backgroundColor = bgColorName;

}
function textColors2(){
    var  heading = document.getElementById("heading2")
    var para = document.getElementById("para2")
    var bgColorName = prompt("enter your color")
    heading.style.color = bgColorName
    para.style.color = bgColorName

}
 function imgHandler(condition){
     var img = document.getElementById("img")
    //  console.log(condition)
    if(condition == "show"){
        img.style.display = "block";
    } else if( condition == "hide"){
        img.style.display = "none";
    } else if( condition == "small"){
        img.style.width = "250px";
        img.style.height = "250px";
    } else if( condition == "large"){
        img.style.width = "500px";
        img.style.height = "500px";

    } else{
        return;
    }
 }

 function paraChange(){
     var containers = document.getElementById("containers")
     var  para = document.getElementsByTagName("p")
     var bgColorName = prompt("enter your color")
     containers.style.color  = bgColorName
     para.style.color = bgColorName
 }
   
 function imgChange(toggle, e) {
      
    if (toggle == "on") {
        e.src = "bulbon.jpg";
      } else {
        e.src = "bulboff.jpg";
      }
    }
    