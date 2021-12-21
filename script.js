const span = document.querySelector("#value");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");
const myH1 = document.querySelector("h1");
const myContainer = document.querySelector(".container");
const allBtns = document.querySelectorAll(".btn")//array-like Nodelist allBtns.length => 3

let count = 0;

// for(let i = 0; i < allBtns.length; i++){
//     allBtns[i].addEventListener("click", function(event){
//         console.log(event.target, "this is event target")
//         const classes = event.target.classList;
//         console.log(classes, "this are classes")
//         if (classes.contains("decrease")){
//             count--
//         }else if(classes.contains("increase")){
//             count++
//         }else {
//             count = 0;
//         }

//         setColorSpan()
//     })
// }


allBtns.forEach(addEventToBtn) // higer order method under the hood looping through array

function addEventToBtn(el){
    el.addEventListener("click", function(event){
        console.log(event.target, "this is event target")
        const classes = event.target.classList;
        console.log(classes, "this are classes")
        if (classes.contains("decrease")){
            count--
        }else if(classes.contains("increase")){
            count++
        }else {
            count = 0;
        }

        setColorSpan()
    })

}
   
//event is object

// decreaseBtn.addEventListener('click', function(){
//     count--
//     setColorSpan()
   
// })
// resetBtn.addEventListener('click', function(){
//     count = 0;
//     setColorSpan()
   
// })
// increaseBtn.addEventListener('click', function(){
//     count++
//    setColorSpan()
// })

function setColorSpan(){
    if(count < 0){
        span.style.color = "red"
    }else if(count >0){
        span.style.color = "green";
    }else {
        span.style.color = "black"
    }
    span.innerText = count;
}

