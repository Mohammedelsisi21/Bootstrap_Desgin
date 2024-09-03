let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});


let nums = document.querySelectorAll(".nums .kkkk");
let eee = document.getElementById("numbers");
let started = false;

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 10000 / goal );
}
window.onscroll = function () {
        var rect = eee.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}
