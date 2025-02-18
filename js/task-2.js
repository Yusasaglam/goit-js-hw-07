const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?dpr=2&h=750&w=1260",
    alt: "Puppy Playing on Grass",
  },
  {
    url: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?dpr=2&h=750&w=1260",
    alt: "Grey Cat Looking Up",
  },
  {
    url: "https://images.pexels.com/photos/3829231/pexels-photo-3829231.jpeg?dpr=2&h=750&w=1260",
    alt: "Beautiful Landscape with Mountains and Lake",
  }
];

const gallery = document.querySelector(".gallery");

images.forEach((image) => {
  console.log("Image", image);
  const imageListItem = document.createElement("li");
  imageListItem.classList.add("gallery-item");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image.url);
  imageElement.setAttribute("alt", image.alt);
  imageElement.setAttribute("width", "360");
  imageElement.setAttribute("height", "300");

  imageListItem.appendChild(imageElement);
  gallery.appendChild(imageListItem);
});