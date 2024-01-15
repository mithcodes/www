// const heading1=document.querySelector('.heading1');
// setTimeout(()=>{
// heading1.textContent="heading 1";
// heading1.style.color="red"
// },1000)
// const heading2=document.querySelector('.heading2');
// setTimeout(()=>{
//     heading2.textContent="heading 22";
//     heading2.style.color="green"
// },3000)

const heading1=document.querySelector('.heading1');
const heading2=document.querySelector('.heading2')
setTimeout(()=>{
heading1.textContent="heading 1";
heading1.style.color="red"
setTimeout(()=>{
    heading2.textContent="heading 22";
    heading2.style.color="green"
},1000)
},1000)