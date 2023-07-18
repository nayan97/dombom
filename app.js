

const add = document.getElementById('add');
const del = document.getElementById('del');
const output = document.getElementById('data');

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

let count = 0;
add.onclick = () =>{
    count++
    if (count <= 10) {
        output.innerHTML  = count;
    } else {
        count = 10;
    }
  
}

del.onclick = () => {
    count--

    if(count >= 0){
        output.innerHTML = count;
    } else {
        count = 0;
    }
    
}