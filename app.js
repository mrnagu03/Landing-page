let slides = document.querySelectorAll(".slider");
let noOfslides = slides.length;
console.log(noOfslides)
let counter = 0;
slides.forEach(
    (slider, index) => {
        slider.style.left = `${index * 100}%`

    }
)
let nextBt = document.querySelector(".next");
let prevBt = document.querySelector(".prev");

nextBt.addEventListener("click", () => {

    counter++
    slideBox()

})
prevBt.addEventListener("click", () => {
    counter--
    slideBox()
})

let slideBox = () => {
    slides.forEach((slider) => {
        slider.style.transform = `translateX(-${counter * 100}%)`

    })
}




