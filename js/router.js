export class Router {

  routes = {};
  pageBackground = {};
  allButtons = document.querySelectorAll("a");

  add(path, page) {
    this.routes[path] = page;
  }

  addPageBackground(path,image) {
    this.pageBackground[path] = image;
  }
  
  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handleStyle(path) {
    const clickedButton = document.querySelector(`a[href="${path}"]`);
    for (const button of this.allButtons) {
      button.classList.remove("selected");
    }
    clickedButton.classList.toggle("selected");

    const body = document.body;
    body.style.backgroundImage = `url(${this.pageBackground[path]})`;

  }

  handle(){
    const path = window.location.pathname;
    const page = this.routes[path] || this.routes[404];

    fetch(page)
      .then(response => response.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html;
      });
    
    this.handleStyle(path);

  }

};