export default class ScrollController {
  constructor() {
    this.listenerExists = false;

    this.dir = 0;
  }

  addListener() {
    console.log("sdfsghd");
    if (!this.listenerExists) {
      //listener is present so don't add more of them
      this.listenerExists = true;

      window.addEventListener("mousewheel", this.handleScoll);
    }
  }

  handleScoll(e) {
    if (e.deltaY < 0) {
      this.dir = 1;
    } else {
      this.dir = -1;
    }

    console.log(this.dir);
  }
}
