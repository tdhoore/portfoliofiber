import { setCurretPageIndex, getCurrentPageIndex } from "../scenes/api";

export default class ScrollController {
  constructor() {
    this.playOutroEvent = new Event("playOutro");
    this.listenerExists = false;

    this.dir = 0;
    this.currentPageIndex = 0;

    this.outroAnimFunc = false;
    this.isAnimating = false;

    this.timeOut = 1000;
  }

  addListener() {
    if (!this.listenerExists) {
      //listener is present so don't add more of them
      this.listenerExists = true;

      window.addEventListener("mousewheel", e => this.handleScoll(e));
    }
  }

  updateCanAnimate(newIndex) {
    if (newIndex !== this.currentPageIndex) {
      //this.isAnimating = false;
    }
  }

  handleScoll(e) {
    if (!this.isAnimating) {
      //wait for the animation or task to complete
      this.isAnimating = true;

      if (e.deltaY < 0) {
        this.dir = -1;
      } else {
        this.dir = 1;
      }

      //set currentIndex
      this.currentPageIndex = getCurrentPageIndex();

      //trigger the outro animation
      if (this.dir > 0) {
        window.dispatchEvent(this.playOutroEvent);
      }

      //next scene
      setCurretPageIndex(
        this.currentPageIndex + this.dir,
        this.dir > 0,
        false,
        this.dir < 0
      );

      //add control back after a wile
      setTimeout(() => {
        this.isAnimating = false;
      }, this.timeOut);
    }
  }
}
