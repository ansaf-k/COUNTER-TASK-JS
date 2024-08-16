let number = 0;

console.log(document.querySelector(".number").value);

// const Displaymessage = function(num){
//     document.querySelector(".number").textContent = num;
// }

document.querySelector(".increment").addEventListener('click',function(){
    number = number + 1;
    document.querySelector(".number").textContent = number;
})

document.querySelector(".decrement").addEventListener('click',function(){
    if(number > 0){
    number = number - 1;
    document.querySelector(".number").textContent = number;
    }
})

document.querySelector(".reset").addEventListener('click',function(){
    number = 0;
    document.querySelector(".number").textContent = number;
})