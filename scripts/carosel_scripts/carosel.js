import Carouse_Model from "./Carousel-model.js"

export default function addCarousel(){
  Carouse_Model.carousel_nav()

  document.getElementById("next-button").addEventListener("click",ev => Carouse_Model.carousel_arrow_buttons({ev: ev.currentTarget}))

  document.getElementById("prev-button").addEventListener("click",ev => Carouse_Model.carousel_arrow_buttons({ev: ev.currentTarget}))

}