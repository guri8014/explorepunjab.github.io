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

let rd1 = document.querySelector('.readmore2')
let txt1 = document.querySelector('.txt2')
rd1.addEventListener('click',()=>{
    txt1.classList.toggle('show-more')
    if(rd1.innerText==='Read-more'){
        rd1.innerText = 'Read-less'
    }
    else{
        rd1.innerText = 'Read-more'
    }
})

let rd2 = document.querySelector('.readmore3')
let txt2 = document.querySelector('.txt3')
rd2.addEventListener('click',()=>{
    txt2.classList.toggle('show-more')
    if(rd2.innerText==='Read-more'){
        rd2.innerText = 'Read-less'
    }
    else{
        rd2.innerText = 'Read-more'
    }
})

burger = document.querySelector('.burger')
 nav = document.querySelector('.nav')
 mainimg = document.querySelector('.mainimg')   
burger.addEventListener('click',()=>{
    list.classList.toggle("lists-resp")
    
})