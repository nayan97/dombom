
//kyborad event

const input = document.querySelector('input');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');




button.onclick=() => {
    console.log(input.value);
   
    h1.innerHTML = input.value
} 


input.onkeydown = () =>{
    h1.innerHTML = input.value
}

// input.onkeyup = () =>{
//     h1.innerHTML = input.value
// }



// conter code by mouse event

// const add = document.getElementById('add');
// const del = document.getElementById('del');
// const output = document.getElementById('data');
// const alts = document.getElementById('alts');
// const alte = document.getElementById('alte');


// let conut =0;
// let stopCount = '';

// add.onclick = () =>{
    
//     stopCount =setInterval(() => {
//     conut++;
//     output.innerHTML= conut;
//     if( conut >= 10){
//        clearInterval(stopCount);
        
//         alte.play();
//         conut = 0;
//         clearInterval(stopCount);
//     } else {
       
//     }


//  }, 1000)
// }



// btn.addEventListener('click', ()=>{
//  alert('are you sure')
// });

// btn.addEventListener('click', btChange);

// function btChange(){
//  alert()
// };

// h1.onclick = () => {
//  alert()
// }



//  for manual counter

// let count = 0;
// add.onclick = () =>{
  
//     count++
//     if (count <= 10) {
//         output.innerHTML  = count;
//     } else {
//         count = 10;
//         alts.play()
//     }
  
// }

// del.onclick = () => {
    
//     count--

//     if(count >= 0){
//         output.innerHTML = count;
//     } else {
//         count = 0;
//         alte.play()
//     }
    
// }