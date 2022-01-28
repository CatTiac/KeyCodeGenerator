const key = document.querySelector('.key h3');
const code = document.querySelector('.code h3');
const which = document.querySelector('.which h3');
const bigWhich = document.querySelector('.bigWhich h2');

const keyDiv = document.getElementsByClassName('container');
const heading = document.getElementsByClassName('heading');
const myHeading = document.getElementById("h1");

console.log(heading);

// document.addEventListener('keyup', (n) => {
//     heading.textContent = n.which;
// });

document.addEventListener('keydown', (e) => {
    
    key.innerText = e.key;
    code.innerText = e.code;
    which.innerText = e.which;
    bigWhich.innerText = e.which;
    myHeading.remove();
});

// $(document).keypress(function(h1Hide) {
//       $('heading').hide();
// });

// let myHeading = document.getElementsByTagName("h1");
// let textChange;

// document.addEventListener("keypress", (n) => {
//     console.log(n);
//     myHeading.innerText = n.which;

//     textChange = n;
//     myChange();
// });

// let myChange = () => {
//     console.log(textChange);
//     return textChange;
// }



// document.addEventListener('keydown', (e) => {
//     key.innerText = e.key;
//     code.innerText = e.code;
//     which.innerText = e.which;
// });
