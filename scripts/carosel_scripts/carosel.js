let currentItem = 0
const allSpeakers = document.querySelectorAll(".carousel-items")
const wrapper = document.querySelector('.carousel-wrapper')
const max_items = allSpeakers.length - 1

export default function addCarousel(){
  document.getElementById("next-button").addEventListener("click",ev => addCarouselButtons(ev.currentTarget))
  document.getElementById("prev-button").addEventListener("click",ev => addCarouselButtons(ev.currentTarget))
  createCarouselNav(allSpeakers)
}

function addCarouselButtons(ev){
  
  if(ev.id === "next-button"){
    currentItem++
  } else if(ev.id === "prev-button"){
    currentItem--
  }

  if(currentItem > max_items){
    currentItem = 0
  } else if(currentItem < 0){
    currentItem = max_items
  }
  document.querySelector(".carousel-label.active").classList.remove("active")
  document.querySelectorAll(".carousel-label")[currentItem].classList.add("active")
  
  wrapper.scrollTo({
    top: 0,
    left: allSpeakers[currentItem].offsetLeft - (wrapper.offsetWidth - allSpeakers[currentItem].offsetWidth) / 1.75,
    behavior: "smooth",
  })
}

function createCarouselNav(children){
  const carousel_nav_main_div = document.getElementById("carousel-nav")

  children.forEach((speaker_div,index) => {
    const input = document.createElement("input")
    input.type = "radio"
    input.name = `carousel-buttons`
    input.className = "carousel-input"
    input.id = `input_${index}`
    input.checked = index === 0 ? true : false

    const label = document.createElement("label")
    label.classList = input.checked === true ? "carousel-label active" : "carousel-label"
    label.htmlFor = input.id

    label.addEventListener('click',ev =>{
      document.querySelector(".carousel-label.active").classList.remove("active")
      ev.currentTarget.classList.add("active")

      wrapper.scrollTo({
        top: 0,
        left:speaker_div.offsetLeft - (wrapper.offsetWidth -speaker_div.offsetWidth) / 1.75,
        behavior: "smooth",
      })
    })
    carousel_nav_main_div.append(input,label)
  })

}