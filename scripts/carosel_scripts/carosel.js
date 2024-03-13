import Carouse_Model from "./carousel-model.js"

export default function addCarousel(){
  const carousel_model = new Carouse_Model()
  
  carousel_model.carousel_nav()

  document.getElementById("next-button").addEventListener("click",ev => carousel_model.carousel_arrow_buttons({ev: ev.currentTarget}))

  document.getElementById("prev-button").addEventListener("click",ev => carousel_model.carousel_arrow_buttons({ev: ev.currentTarget}))

}