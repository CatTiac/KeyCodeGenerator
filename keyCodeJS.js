const key = document.querySelector('.key h3');
const code = document.querySelector('.code h3');
const keyDiv = document.getElementById('container');
const which = document.querySelector('.which h3');
const heading = document.getElementById('h1');

// document.addEventListener('keypress', ()=> {
//     let keyCode = document.getElementsByClassName('container')[0];
//     if(keyCode.style.display == 'none') {
//         keyCode.style.display = 'none';
//         keyDiv.textContent = "hide";

//     } else {
//         keyDiv.textContent = 'show';
//     }
// })

// document.addEventListener('keypress', () => {
//     if ('keypress' = true) {
//         document.addEventListener('keydown', (e) => {
//             key.innerText = e.key;
//             code.innerText = e.code;
//             which.innerText = e.which;
//         } else {
//             keyDiv.style.display == 'none',
//             keyDiv.textContent = "show",
//         }
// }
document.addEventListener('keydown', (e) => {
    key.innerText = e.key;
    code.innerText = e.code;
    which.innerText = e.which;
});

// document.getElementsByClassName('TestsDiv')[0].style.display='block';