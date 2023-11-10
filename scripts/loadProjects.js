document.addEventListener("DOMContentLoaded", function () {
  // TODO: Make them all jpgs
  const imageData = [
    {
      src: "../img/art/arcade-mordecai.webp",
      alt: "Mordecai Arcade Game",
      title: "Mordecai Arcade",
      link: "https://example.com/arcade-mordecai",
    },
    {
      src: "../img/art/magnemite.webp",
      alt: "Magnemite",
      title: "Magnemite",
      link: "https://example.com/magnemite",
    },
    {
      src: "../img/art/larry.webp",
      alt: "Larry The Cucumber",
      title: "Larry The Pirate",
      link: "https://example.com/larry",
    },
    {
      src: "../img/art/pirates-cover.webp",
      alt: "The Pirates Who Don't Do Anything Veggie Tales",
      title: "VeggieTales Album Cover",
      link: "https://example.com/pirates",
    },
    {
      src: "../img/art/koffing.webp",
      alt: "Koffing",
      title: "Koffing",
      link: "https://example.com/koffing",
    },
    {
      src: "../img/art/rainbow-fishing.webp",
      alt: "Rainbow",
      title: "Rainbow",
      link: "https://example.com/rainbow",
    },
    {
      src: "../img/art/mushroom-ufo.webp",
      alt: "MushroomUFO",
      title: "Mushroom UFO",
      link: "https://example.com/musthroom-ufo",
    },
    {
      src: "../img/art/drugs-r-bad.webp",
      alt: "Drugs R Bad",
      title: "Drugs R Bad",
      link: "https://example.com/drugs-r-bad",
    },
    {
      src: "../img/art/rgb2.webp",
      alt: "RGB2",
      title: "RGB2",
      link: "https://example.com/rgb2",
    },
    {
      src: "../img/art/power.webp",
      alt: "The power",
      title: "The Power",
      link: "https://example.com/the-power",
    },
    {
      src: "../img/art/toxic-barrel.webp",
      alt: "Toxic Barrel",
      title: "Toxic Barre",
      link: "https://example.com/toxic-barrel",
    },
    {
      src: "../img/art/cookie-monster.webp",
      alt: "Cookie Monster",
      title: "Cookie Monster",
      link: "https://example.com/cookiemonster",
    },
    {
      src: "../img/art/rick-and-morty-portal.webp",
      alt: "Rick and Morty",
      title: "Rick and Morty",
      link: "https://example.com/rick-and-morty",
    },
    {
      src: "../img/art/hanger.webp",
      alt: "Star Wars Hanger",
      title: "Imperial Hanger",
      link: "https://example.com/hanger",
    },
    {
      src: "../img/art/omnidroid.webp",
      alt: "omnidroid",
      title: "The Incredibles Omnidroid",
      link: "https://example.com/omnidroid",
    },
    {
      src: "../img/art/kirby.webp",
      alt: "Kirby",
      title: "Kirby",
      link: "https://example.com/kirby",
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
