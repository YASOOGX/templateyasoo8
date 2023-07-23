///////////////links
let link=document.querySelector(".links")
let links=document.querySelectorAll(".links > li")
let links_hide=document.querySelectorAll(" .links li ul")
let slide=document.querySelector(" .slide")
let slide_bottom=document.querySelector(".slide-bottom-link")
let closes =document.querySelector(".close")
let bar =document.querySelector(".bar-links")
let scrol=document.querySelector(".head-bottom")
///////////////phone
let search_button=document.querySelector(".search-phone")
let search_page=document.querySelector(".page-search")
let closea_search=document.querySelector(".close-search")
//////////// slide
let img_slide=document.querySelectorAll(".img-slide .im-sl")
let but_next=document.querySelector(".img-slide .next")
let but_prev=document.querySelector(".img-slide .prev")
let cir_slide=document.querySelector(".img-slide .prev")
///////////////////social
let social= document.querySelector(".social-media")
let social_button= document.querySelector(".but-social")
let social_icon= document.querySelector(".but-social i")
////////////////////////////////////////
// start part links hide 
links.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        slide.classList.add("flex")
        links_hide.forEach((it,ine)=>{
            it.classList.remove("block")
            if(index===ine){
        slide_bottom.classList.add("transform")
        it.classList.add("block")
        closes.classList.add("block")
    }
  else if(index== 6){
    slide.classList.remove("flex")
    slide_bottom.classList.remove("transform")
    it.classList.remove("block")
       closes.classList.remove("block")
       window.scrollTo({
        left:0,
        top:830,
           behavior: "smooth"
            })
   }
            })
        })
})
// end part links hide 
// //////////////////////////////
// start part scrol head 
if(screen.width>=992){
    window.onscroll=function(){
        if(scrollY >= 100){
        scrol.classList.add("fixed-link")
        }
        else{
            scrol.classList.remove("fixed-link")
        }
    }
}
// end part scrol head 
///////////////////////////////////////////////
// start part close links hide 
closes.onclick=function(e){
slide_bottom.classList.remove("transform")
            links_hide.forEach((it,ine)=>{
                it.classList.remove("block")
            })
        slide.classList.remove("flex")
closes.classList.remove("block")
}
// end part links hide 
///////////////////////////////////////////
// start part toggle bar 
bar.onclick=function(){
    link.classList.toggle("block")
}
// end part toggle bar 
///////////////////////////////////////////////////
// start part search phone 
search_button.onclick=function(){
    search_page.classList.add("block")
}
closea_search.onclick=function(){
    search_page.classList.remove("block")
}
// end part search phone
//////////////////////////////////////////////////// 
// start part slide 

for(let i=0; i<1 ; i++){
     but_next.onclick=function(){
     i++
    if(i >=5 ) {
        i=0
    }
    img_slide.forEach(function(e){
    e.style.transform=`translateX(${i*-160}px) `
    })   
    }
    but_prev.onclick=function(){
    i--
        if(i <=0 ) {
            i=4
        }
        img_slide.forEach(function(e){
    e.style.transform=`translateX(${i*-160}px)`
        })   
        console.log(i)
    }   
}
// end part slide 

// start part social 
social_button.onclick=function(){
social.classList.toggle("trans")
social_icon.classList.toggle("rotat")
}
// end part social 
