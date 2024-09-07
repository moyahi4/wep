const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you too! 😘";
    gif.src = "images/animation2.gif";  // استبدل animation2 بالرسم المتحرك الجديد
    gif.style.display = "block";
});

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
