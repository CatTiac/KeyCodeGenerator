const key = document.querySelector('.key h3');
const code = document.querySelector('.code h3');
const which = document.querySelector('.which h3');
const bigWhich = document.querySelector('.bigWhich h2');

// const keyDiv = document.getElementsByClassName('container');
// const heading = document.getElementById('h1');

// let h1Heading = document.getElementById("h1")
// const h1Heading  = () => {
//   if (h1Heading.style.display === "none") {
//     h1Heading.style.display = "block";
//   } else {
//     h1Heading.style.display = "none";
//   }
// };

document.addEventListener('keydown', (e) => {

    key.innerText = e.key;
    code.innerText = e.code;
    which.innerText = e.which;
    bigWhich.innerText = e.which;
});




// document.addEventListener('event', (n)=> {
// //     // heading.innerHTML = n.which;
//     heading.innerText = n.which;
// //     // heading.textContent = n.which;
// //     console.log(heading);
// });



// for (let i = 0; i< heading.length; i++){
//     heading[i].style.color = "transparent";
// }


// document.getElementById("container").style.display = "none";


// function myHideShow() {
//     let x = document.getElementById('h1');
//     if (x.style.display === "none") {
//       x.style.display = "show";
//     } else {
//       x.style.display = "hide";
//     }
//   }


// window.addEventListener('keyup', (c) => {
//     heading.innerText = which.value;
//     console.log(heading);
// });


// document.addEventListener('keydown', (e) => {
//     key.innerText = e.key;
//     code.innerText = e.code;
//     which.innerText = e.which;
// });

// document.addEventListener("click", ()=> {
//         let newValue = document.createElement("h1");
//         newValue.textContent = which.value;
//         console.log(newValue);
//        })

// button.addEventListener("click", ()=> {
//     let listItem = document.createElement("li");
//     listItem.textContent = input.value;
//     //console.log(listItem);
//    })

// 
// const button= document.getElementById("submit");
// button.addEventListener("click", () => {
//     if(image.style.display == "none") {
//         image.style.display = "block";
//         button.textContent = "hide";
//     } else {
//         image.style.display = "none";
//         button.textContent = "show";
//     }
// })