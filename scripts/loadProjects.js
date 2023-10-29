document.addEventListener("DOMContentLoaded", function () {
  // TODO: Make them all jpgs
  const imageData = [
    {
      src: "../img/art/Arcade.png",
      alt: "Mordecai Arcade Game",
      title: "Mordecai Arcade",
      link: "https://example.com/Arcade",
    },
    {
      src: "../img/art/Magnemite.png",
      alt: "Magnemite",
      title: "Magnemite",
      link: "https://example.com/Magnemite",
    },
    {
      src: "../img/art/Larry.png",
      alt: "Larry The Cucumber",
      title: "Larry The Pirate",
      link: "https://example.com/Larry",
    },
    {
      src: "../img/art/Pirates.png",
      alt: "The Pirates Who Don't Do Anything Veggie Tales",
      title: "VeggieTales Album Cover",
      link: "https://example.com/Pirates",
    },
    {
      src: "../img/art/Koffing.jpg",
      alt: "Koffing",
      title: "Koffing",
      link: "https://example.com/Koffing",
    },
    {
      src: "../img/art/Rainbow.png",
      alt: "Rainbow",
      title: "Rainbow",
      link: "https://example.com/Rainbow",
    },
    {
      src: "../img/art/MushroomUFO.png",
      alt: "MushroomUFO",
      title: "Mushroom UFO",
      link: "https://example.com/MushroomUFO",
    },
    {
      src: "../img/art/Drugs R Bad.jpg",
      alt: "Drugs R Bad",
      title: "Drugs R Bad",
      link: "https://example.com/Rainbow",
    },
    // Add more image data objects as needed
  ];

  const imageContainer = document.getElementById("imageContainer");

  imageData.forEach((image) => {
    const div = document.createElement("div");
    div.classList.add("item");

    const link = document.createElement("a");
    link.href = image.link; // Set the link

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;

    const title = document.createElement("h2");
    title.textContent = image.title;

    link.appendChild(img); // Append the image to the anchor element
    div.appendChild(link); // Append the anchor to the container
    div.appendChild(title);
    imageContainer.appendChild(div);
  });
});
