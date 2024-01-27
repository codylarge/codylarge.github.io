document.addEventListener("DOMContentLoaded", function () {
  const videoData = [
    // ADD: JW Player, JDBC Project, Stack,
    {
      src: "../img/cs/SuperSmash.mp4",
      title: "Mega Smash Sisters",
      link: "https://github.com/codylarge/Mega-Smash-Sisters",
    },
    // Add more video data objects as needed
  ];

  const videoContainer = document.getElementById("videoContainer");

  videoData.forEach((video) => {
    const div = document.createElement("div");
    div.classList.add("item");

    const title = document.createElement("h2");
    title.textContent = video.title;

    const link = document.createElement("a");
    link.href = video.link;
    link.appendChild(title);

    const vid = document.createElement("video");
    vid.src = video.src;
    vid.controls = true;
    vid.muted = true;

    div.appendChild(link);
    div.appendChild(vid);
    videoContainer.appendChild(div);

    title.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents the click from reaching the parent link
      window.location.href = video.link; // Directs to the link when h2 is clicked
    });
  });
});
