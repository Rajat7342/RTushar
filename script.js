// Redirect to video page with query params
function redirectToVideo(videoSrc) {
  window.location.href = `video.html?video=${videoSrc}`;
}

// Add hover effect to play preview
const previews = document.querySelectorAll(".preview");
previews.forEach(video => {
  video.addEventListener("mouseover", () => video.play());
  video.addEventListener("mouseout", () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Predefined credentials
const validUsername = "tushar";
const validPassword = "randi";

// Function to validate login
function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === validUsername && password === validPassword) {
    document.querySelector(".overlay").style.display = "none"; // Hide overlay
    return false; // Prevent form submission
  } else {
    errorMessage.textContent = "Invalid username or password!";
    return false; // Prevent form submission
  }
}

const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const videos = document.querySelectorAll(".video");
const errorMessage = document.createElement("p");
const reset = document.querySelector("#reset-button");

// Create and style the error message
errorMessage.classList.add("error-message");
errorMessage.textContent = "No videos found!";
document.querySelector(".video-container").appendChild(errorMessage);

// Reset Functionality
reset.addEventListener("click", () => {
  searchBar.value = ""; // Clear the search bar
  errorMessage.style.display = "none"; // Hide the error message
  videos.forEach((video) => video.classList.remove("hidden")); // Show all videos
  reset.style.display = "none"; // Hide the reset button
});

// Search Function
searchButton.addEventListener("click", () => {
  const searchTerm = searchBar.value.trim().toLowerCase();
  let found = false;

  // Filter videos based on alt text
  videos.forEach((video) => {
    const altText = video.querySelector("video").getAttribute("alt").toLowerCase();
    if (altText.includes(searchTerm)) {
      video.classList.remove("hidden");
      found = true;
    } else {
      video.classList.add("hidden");
    }
  });

  // Show or hide error message
  if (!found && searchTerm !== "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }

  // Show Reset button only when a search is performed
  if (searchTerm !== "") {
    reset.style.display = "inline-block";
  }

  // Reset when search is cleared
  if (searchTerm === "") {
    videos.forEach((video) => video.classList.remove("hidden"));
    errorMessage.style.display = "none";
    reset.style.display = "none"; // Hide the reset button when input is cleared
  }
});


// Badges

const names = [
  "Akash Kumar",
  "Rajat Sharma",
  "Deepak Saini",
  "Saurabh Singhal",
  "Lakshya Pratap Singh",
];

const photos = [
  "akash.png", // Add corresponding photo paths
  "rajat.png",
  "deepak.png",
  "saurabh.png",
  "lakshya.png",
];

const container = document.getElementById("notification-container");

// Function to create and show a notification
function showNotification(name, photo) {
  const badge = document.createElement("div");
  badge.className = "notification-badge";
  badge.innerHTML = `
    <img src="${photo}" alt="${name}">
    <p><strong>${name}</strong> just Joined!</p>
  `;

  container.appendChild(badge);

  // Remove the badge after 3 seconds
  setTimeout(() => {
    badge.remove();
  }, 3000);
}

let index = 0;
setInterval(() => {
  if (index < names.length) {
    showNotification(names[index], photos[index]);
    index++;
  }
}, 1500); 
