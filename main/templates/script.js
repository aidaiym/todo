// const star = document.getElementById("star").ur
// function button() {
//     if (star.src.match("star.png")) {
//         star.src = "yellow.png";
//     }
//     else {
//         star.src = "https://icons-for-free.com/iconfiles/png/512/favorite+favourite+premium+rate+rating+star+icon-1320166547676710135.png";
//     }

// }
// star.addEventListener("click", button)

document.body.addEventListener('click', e => {
    if (!e.target.matches('button')) return
    document.querySelector('#star').src = e.target.dataset.src

    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')
})