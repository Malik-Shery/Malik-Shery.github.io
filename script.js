const video = document.getElementById("video");
const captureBtn = document.getElementById("capture-btn");
const storiesContainer = document.getElementById("stories-container");
const cameraView = document.querySelector(".camera-view");
const storiesView = document.querySelector(".stories");

// Show Camera View
function showCamera() {
  cameraView.style.display = "flex";
  storiesView.style.display = "none";
  startCamera();
}

// Show Stories View
function showStories() {
  cameraView.style.display = "none";
  storiesView.style.display = "block";
}

// Start Camera
async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    console.error("Camera access denied:", error);
  }
}

// Capture Photo
captureBtn.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const img = document.createElement("img");
  img.src = canvas.toDataURL("image/png");
  storiesContainer.appendChild(img);
});

// Start with Stories View
showStories();