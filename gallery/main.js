let counter = 2;

function changeImage(image) {
    let imageNumberToShow = counter.toString().padStart(3, '0');
    let nextImageUrl = `./img/landscape-${imageNumberToShow}-small.jpg`;
    image.src = nextImageUrl;
    counter = (counter + 1)
}

function click() {
    console.log("someone clicked the button")
  }