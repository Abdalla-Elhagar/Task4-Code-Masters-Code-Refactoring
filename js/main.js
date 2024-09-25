let topBtn = document.querySelector("#goTop")
window.addEventListener("scroll",()=>window.scrollY > 0 ? topBtn.style.display="block":topBtn.style.display="none")