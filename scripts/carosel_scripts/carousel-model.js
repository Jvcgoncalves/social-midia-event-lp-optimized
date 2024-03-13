export default class Carouse_Model{

  #currentItem = 0
  #allSpeakersArray = document.querySelectorAll(".carousel-items")
  #wrapper = document.querySelector('.carousel-wrapper')
  #max_items = this.#allSpeakersArray.length - 1

  carousel_arrow_buttons({ev}){
    this.#changeCurrentItem({ev_id: ev.id})
    
    document.querySelector(".carousel-label.active").classList.remove("active")
    document.querySelectorAll(".carousel-label")[this.#currentItem].classList.add("active")
    
    this.#wrapper.scrollTo({
      top: 0,
      left: this.#allSpeakersArray[this.#currentItem].offsetLeft - (this.#wrapper.offsetWidth - this.#allSpeakersArray[this.#currentItem].offsetWidth) / 1.75,
      behavior: "smooth",
    })
  }

  carousel_nav(){
    const carousel_nav_main_div = document.getElementById("carousel-nav")

    this.#allSpeakersArray.forEach((speaker_div,index) => {
      const input = this.#createInput({index})

      const label = this.#createLabel({input_checked: input.checked,input_id:input.id})

      this.#labelClickEvent({label,speaker_div})
      
      carousel_nav_main_div.append(input,label)
    })
  }
  // i let all these methods private because i don't need them out of here, so i 
  // made this to don't get confuse with a lot of methods

  #changeCurrentItem({ev_id}){
    if(ev_id === "next-button"){
      this.#currentItem++
    } else if(ev_id === "prev-button"){
      this.#currentItem--
    }
  
    if(this.#currentItem > this.#max_items){
      this.#currentItem = 0
    } else if(this.#currentItem < 0){
      this.#currentItem = this.#max_items
    }
  }

  #createInput({index}){
    const input = document.createElement("input")
      input.type = "radio"
      input.name = `carousel-buttons`
      input.className = "carousel-input"
      input.id = `input_${index}`
      input.checked = index === 0 ? true : false

    return input
  }

  #createLabel({input_checked,input_id}){
    const label = document.createElement("label")
    label.classList = input_checked === true ? "carousel-label active" : "carousel-label"
    label.htmlFor = input_id

    return label
  }

  #labelClickEvent({label,speaker_div}){
    label.addEventListener('click',ev =>{
      document.querySelector(".carousel-label.active").classList.remove("active")
      ev.currentTarget.classList.add("active")

      this.#wrapper.scrollTo({
        top: 0,
        left: speaker_div.offsetLeft - (this.#wrapper.offsetWidth - speaker_div.offsetWidth) / 1.75,
        behavior: "smooth",
      })
    })
  }
}