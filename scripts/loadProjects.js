document.addEventListener("DOMContentLoaded", function () {
  // TODO: Make them all jpgs
  const imageData3D = [
    {
      //Mordecai Arcade
      src: "../img/art/arcade-mordecai.webp",
      alt: "Mordecai Arcade Game",
      title: "Mordecai Arcade",
      link: "https://example.com/arcade-mordecai",
    },
    {
      // Magnemite
      src: "../img/art/magnemite.webp",
      alt: "Magnemite",
      title: "Magnemite",
      link: "https://example.com/magnemite",
    },
    {
      // Larry
      src: "../img/art/larry.webp",
      alt: "Larry The Cucumber",
      title: "Larry The Pirate",
      link: "https://example.com/larry",
    },
    {
      // Pirates
      src: "../img/art/pirates-cover.webp",
      alt: "The Pirates Who Don't Do Anything Veggie Tales",
      title: "VeggieTales Album Cover",
      link: "https://example.com/pirates",
    },
    {
      // Koffing
      src: "../img/art/koffing.webp",
      alt: "Koffing",
      title: "Koffing",
      link: "https://example.com/koffing",
    },
    {
      // Rainbow
      src: "../img/art/rainbow-fishing.webp",
      alt: "Rainbow",
      title: "Rainbow",
      link: "https://example.com/rainbow",
    },
    {
      // Mushroom UFO
      src: "../img/art/mushroom-ufo.webp",
      alt: "MushroomUFO",
      title: "Mushroom UFO",
      link: "https://example.com/musthroom-ufo",
    },
    {
      // Drugs R Bad
      src: "../img/art/drugs-r-bad.webp",
      alt: "Drugs R Bad",
      title: "Drugs R Bad",
      link: "https://example.com/drugs-r-bad",
    },
    {
      //RGB2
      src: "../img/art/rgb2.webp",
      alt: "RGB2",
      title: "RGB2",
      link: "https://example.com/rgb2",
    },
    {
      // The Power
      src: "../img/art/power.webp",
      alt: "The power",
      title: "The Power",
      link: "https://example.com/the-power",
    },
    {
      // Toxic Barrels
      src: "../img/art/toxic-barrel.webp",
      alt: "Toxic Barrel",
      title: "Toxic Barre",
      link: "https://example.com/toxic-barrel",
    },
    {
      // Cookie Monster
      src: "../img/art/cookie-monster.webp",
      alt: "Cookie Monster",
      title: "Cookie Monster",
      link: "https://example.com/cookiemonster",
    },
    {
      // Rick And Morty Portal
      src: "../img/art/rick-and-morty-portal.webp",
      alt: "Rick and Morty",
      title: "Rick and Morty",
      link: "https://example.com/rick-and-morty",
    },
    {
      // Imperial Hanger
      src: "../img/art/hanger.webp",
      alt: "Star Wars Hanger",
      title: "Imperial Hanger",
      link: "https://example.com/hanger",
    },
    {
      // Omnidroid
      src: "../img/art/omnidroid.webp",
      alt: "omnidroid",
      title: "The Incredibles Omnidroid",
      link: "https://example.com/omnidroid",
    },
    {
      // Kirby
      src: "../img/art/kirby.webp",
      alt: "Kirby",
      title: "Kirby",
      link: "https://example.com/kirby",
    },
    // Add more image data objects as needed
  ];

  const imageDataCS = [
    {
      //TTR site
      src: "../img/cs/ttr-site.webp",
      alt: "Toontown Web app",
      title: "Toontown Web App",
      link: "https://github.com/codylarge/Toontown-Webapp",
    },
    {
      //Music site
      src: "../img/cs/song-site.webp",
      alt: "Music Player",
      title: "JW Music Player",
      link: "https://github.com/codylarge/MusicPlayer",
    },
    {
      //Space Blog
      src: "../img/cs/space-blog.webp",
      alt: "Space Blog",
      title: "My Space Blog",
      link: "https://github.com/codylarge/astro-space-blog",
    },
    {
      //Super Smash Sisters
      src: "../img/cs/super-smash.webp",
      alt: "Super Smash Sisters",
      title: "Super Smash Sisters",
      link: "https://github.com/codylarge/Mega-Smash-Sisters",
    },
  ];
  // Figure out which portfolio page we're on
  const isCsPortfolioPage = window.location.href.includes("csportfolio.html");

  const imageContainer = document.getElementById("imageContainer");
  let data = imageData3D;
  if (isCsPortfolioPage) {
    data = imageDataCS;
  }

  console.log(isCsPortfolioPage);
  data.forEach((image) => {
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
