document.addEventListener("DOMContentLoaded", function () {
  // Array of image data with image URLs and titles
  const imageData = [
    {
      src: "../img/art/Larry.png",
      alt: "Larry The Cucumber",
      title: "Larry The Pirate",
    },
    { src: "../img/art/Magnemite.png", alt: "Magnemite", title: "Magnemite" },
    // Add more image data objects as needed
  ];

  const imageContainer = document.getElementById("imageContainer");

  // Loop through the image data and create image divs dynamically
  imageData.forEach((image) => {
    const div = document.createElement("div");
    div.classList.add("item");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;

    const title = document.createElement("h2");
    title.textContent = image.title;

    div.appendChild(img);
    div.appendChild(title);
    imageContainer.appendChild(div);
  });
});
