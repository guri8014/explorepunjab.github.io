const readmorebutton=document.querySelector('.readmorebtn')
const text = document.querySelector('.text')

readmorebutton.addEventListener('click',()=>{
    text.classList.toggle('show-more');
    if(readmorebutton.innerText==='Read-more'){
        readmorebutton.innerText = 'Read-less'
    }
    else{
        readmorebutton.innerText = 'Read-more'
    }
})

let rd = document.querySelector('.readmore1')
let txt = document.querySelector('.txt1')
rd.addEventListener('click',()=>{
    txt.classList.toggle('show-more')
    if(rd.innerText==='Read-more'){
        rd.innerText = 'Read-less'
    }
    else{
        rd.innerText = 'Read-more'
    }
})

burger = document.querySelector('.burger')
 nav = document.querySelector('.nav')
 mainimg = document.querySelector('.mainimg')   
burger.addEventListener('click',()=>{
    list.classList.toggle("lists-resp")
    
})