const images = ["5.jpg"];
const chosenImages = images[0];
const bgImage = document.createElement("img");

document.body.appendChild(bgImage);
document.body.style = `background-image:url(img/${chosenImages}); background-size:cover`;
