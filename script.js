let button=document.querySelector("button.button");
let img=document.querySelector("div.child img");
let parent=document.querySelector("div.parent");
let copy=document.querySelector("div.copy");
let lifirst=document.querySelectorAll("ul.principe li");
let div1=document.querySelector("div.second")
let div2=document.querySelector("div.INFO");
let div3=document.querySelector("div.more");
let div4=document.querySelector("div.location");
button.addEventListener("click",function(){
button.style.display="none";
 parent.style.display="none";
 img.style.display="none";
copy.style.display="block";
})
lifirst.forEach(function(e){
    e.onclick=function(){
        if(e.className==="first"){
     lifirst.forEach(function(e){
e.style.backgroundColor="white"
     });
            this.style.backgroundColor="purple";
            div2.style.display="none";
            div3.style.display="none";
            div4.style.display="none";
            div1.style.display="block";
        }else if(e.className==="third"){
            lifirst.forEach(function(e){
                e.style.backgroundColor="white"
                     });
            this.style.backgroundColor="purple";
            div1.style.display="none";
            div3.style.display="none";
            div4.style.display="none";
            div2.style.display="block";
        }else if(e.className==="fourth"){
            lifirst.forEach(function(e){
                e.style.backgroundColor="white"
                     });
            this.style.backgroundColor="purple";
            div1.style.display="none";
            div2.style.display="none"; 
            div4.style.display="none";
            div3.style.display="block";
        }else{
            lifirst.forEach(function(e){
                e.style.backgroundColor="white"
                     });
            this.style.backgroundColor="purple";
            div1.style.display="none";
            div2.style.display="none"; 
            div3.style.display="none"; 
            div4.style.display="block";
        }
    }
})
