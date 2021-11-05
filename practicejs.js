var front = document.querySelector(".topcontainer .front_s h1")
var frontflip = document.querySelector(".topcontainer .frontflip_s h1")
var bottom = document.querySelector(".backcontainer .back_s h1")
var bottomflip = document.querySelector(".backcontainer  .backflip_s h1")


var front_m = document.querySelector(".topcontainer .front_m h1")
var frontflip_m = document.querySelector(".topcontainer .frontflip_m h1")
var bottom_m = document.querySelector(".backcontainer .back_m h1")
var bottomflip_m = document.querySelector(".backcontainer  .backflip_m h1")


var frontflip_mc = document.querySelector(".topcontainer .frontflip_m ")
var bottom_mc = document.querySelector(".backcontainer .back_m ")




var front_h = document.querySelector(".topcontainer .front_h h1")
var frontflip_h = document.querySelector(".topcontainer .frontflip_h h1")
var bottom_h = document.querySelector(".backcontainer .back_h h1")
var bottomflip_h = document.querySelector(".backcontainer  .backflip_h h1")

var frontflip_hc = document.querySelector(".topcontainer .frontflip_h ")
var bottom_hc = document.querySelector(".backcontainer .back_h ")


var front_d = document.querySelector(".topcontainer .front_d h1")
var frontflip_d = document.querySelector(".topcontainer .frontflip_d h1")
var bottom_d = document.querySelector(".backcontainer .back_d h1")
var bottomflip_d = document.querySelector(".backcontainer  .backflip_d h1")

var frontflip_dc = document.querySelector(".topcontainer .frontflip_d ")
var bottom_dc = document.querySelector(".backcontainer .back_d ")



timer('2022/02/13 10:19:20')

function timer(date){
    var new_date = new Date(date);


setInterval(function(){

    var today = new Date();
    var diff = (new_date.getTime() - today.getTime()) / 1000;
     var d = Math.floor(diff / 86400);
    var s = Math.floor(diff % 3600 % 60);
    var m = Math.floor(diff % 3600 / 60);
    var h = (Math.floor(diff / 3600) - (d * 24));
    frontflip.innerHTML = s;
    front.innerHTML = s;
    bottomflip.innerHTML =s;
    bottom.innerHTML = s;
    
    frontflip_m .innerHTML =  m;
    front_m .innerHTML =  m;
    bottomflip_m .innerHTML = m;
    bottom_m .innerHTML =  m;

  

  

      
   
    if(s == 59 || s==0)
    {
     
        frontflip_mc.classList.add("topflip");  
        bottom_mc.classList.add("bottomflip");  
     
  
    }
 
    frontflip_h .innerHTML =  h;
    front_h .innerHTML =  h;
    bottomflip_h .innerHTML = h;
    bottom_h .innerHTML =  h;

     if(m ==59&&s==0|| (m==0 &&s==0))
    {
        

        frontflip_hc.classList.add("topflip");  
        bottom_hc.classList.add("bottomflip");  

      


    } 

   
    frontflip_d .innerHTML =  d;
    front_d .innerHTML =  d;
    bottomflip_d .innerHTML = d;
    bottom_d .innerHTML =  d;

      if(h == 0 && m==0 && s==0 )
    {
        frontflip_dc.classList.add("topflip");  
        bottom_dc.classList.add("bottomflip");  

               

    } 

    if(s==58){
            
        frontflip_dc.classList.remove("topflip");  
        bottom_dc.classList.remove("bottomflip"); 
        frontflip_hc.classList.remove("topflip");  
        bottom_hc.classList.remove("bottomflip"); 
        frontflip_mc.classList.remove("topflip");  
        bottom_mc.classList.remove("bottomflip"); 
       }


    if(s<10){
        frontflip.innerHTML = "0"+s;
        front.innerHTML = "0"+s;
        bottomflip.innerHTML ="0"+s;
        bottom.innerHTML = "0"+s;



    }

   
    if(m<10){
        frontflip_m.innerHTML = "0"+m;
        front_m.innerHTML = "0"+m;
        bottomflip_m.innerHTML ="0"+m;
        bottom_m.innerHTML = "0"+m;


    }

    if(h<10){
        frontflip_h.innerHTML = "0"+h;
        front_h.innerHTML = "0"+h;
        bottomflip_h.innerHTML ="0"+h;
        bottom_h.innerHTML = "0"+h;


    }

    if(d < 10){
        frontflip_d.innerHTML = "0"+d;
        front_d.innerHTML = "0"+d;
        bottomflip_d.innerHTML ="0"+d;
        bottom_d.innerHTML = "0"+d;


    }



});
}


