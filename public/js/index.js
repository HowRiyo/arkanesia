document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".side-slider-content").forEach((content, index) => {
        if (index !== 0) content.style.opacity = 0
    })

})



// document.getElementById("trigger").addEventListener("click", () => {
//     gsap.to("#box", { x: 200, duration: 1, ease: "power2.out" });
// });
  