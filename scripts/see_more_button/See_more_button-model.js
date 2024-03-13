export class SeeMoreButton{
  static #see_more_button = document.querySelector(".see-more-button");
  static #event_description_div = document.querySelector(".event-description")

  static addEventToButton(){
    this.#see_more_button.addEventListener("click",ev => this.#addScrollToDescription())
  }

  static #addScrollToDescription(){
    window.scrollTo({
      top: this.#event_description_div.offsetTop / 1.25,
      behavior: "smooth"
    })
  }

}