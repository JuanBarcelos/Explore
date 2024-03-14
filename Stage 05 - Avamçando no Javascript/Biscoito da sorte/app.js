const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

document.getElementById('img01').addEventListener('click', function () {
    screen1.classList.add('hidden');
    screen2.classList.remove('hidden');
});

function btnReset () {
    screen2.classList.add('hidden');
    screen1.classList.remove('hidden');
}