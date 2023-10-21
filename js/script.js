// // Replace 'your_api_endpoint' with the actual URL of the API you want to call
// const apiUrl = 'https://api.tta1214.click/api/';

// // Make a GET request to the API
// fetch(apiUrl + 'products')
//   .then(response => {
//     // Check if the response status is OK (status code 200)
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     // Parse the JSON response
//     return response.json();
//   })
//   .then(data => {
//     // Do something with the JSON data
//     console.log(data)
//   })
//   .catch(error => {
//     // Handle errors here
//     console.error('There was a problem with the fetch operation:', error);
//   });

function audioClick() {
  var backgroundAudio = document.getElementById("backgroundAudio");
  var image = document.getElementById("imgMusic");
  if (backgroundAudio.paused) {
    backgroundAudio.play();
    image.src = "../images/icons/pause.png";
  } else {
    backgroundAudio.pause();
    image.src = "../images/icons/play.png";
  }
}

function changeImgAudio() {
  var backgroundAudio = document.getElementById("backgroundAudio");
  var image = document.getElementById("imgMusic");
  if (backgroundAudio.paused) {
    image.src = "../images/icons/play.png";
  } else {
    image.src = "../images/icons/pause.png";
  }
}

function hiddenAudio() {
  var btnAudio = document.getElementById("btnMusic");
  btnAudio.style.visibility = "hidden";
}

function showAudio() {
  var btnAudio = document.getElementById("btnMusic");
  btnAudio.style.visibility = "visible";
}

function openImg(idImg) {
  var img = document.getElementById(idImg);
  var popupAlbum = document.getElementById("popupAlbum");

  // var popupAlbumContent = document.getElementById("popupAlbumContent");
  // var captionText = document.getElementById("caption");
  // popupAlbumContent.src = img.src;

  popupAlbum.style.display = "block";

  // captionText.innerHTML = this.alt;

  hiddenAudio();
}

function closePopupAlbum() {
  var popupAlbum = document.getElementById("popupAlbum");
  popupAlbum.style.display = "none";
  showAudio();
}

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }

// Onload body
function runInit() {
  // setTimeout(showLoading, 2000);
  changeImgAudio();
}
// Hiển thị loading animation
function showLoading() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "block";
}

function replaceDefaultLink() {
  setTimeout(
    () => {history.replaceState('', document.title, window.location.origin + window.location.pathname)},5
  );
  
}

// const vinylDisc = document.getElementById("vinyl-disc");
//         const audio = document.getElementById("audio");

//         let isPlaying = true;

//         vinylDisc.addEventListener("click", () => {
//             if (isPlaying) {
//                 audio.pause();
//                 vinylDisc.classList.remove("playing");
//             } else {
//                 audio.play();
//                 vinylDisc.classList.add("playing");
//             }
//             isPlaying = !isPlaying;
//         });

//         // Khi trang đã tải hoàn toàn
//         document.addEventListener("DOMContentLoaded", function () {
//             const audio = document.getElementById("audio");
//             const vinylDisc = document.getElementById("vinyl-disc");
//             audio.play();
//             vinylDisc.classList.add("playing");
//         });

// Get the modal
// var ivitationCard = document.getElementById("ivitation-card");
// var ivitationCardModal = document.getElementById("ivitation-card-modal");

// ivitationCard.onclick = function(){
//   // ivitationCardModal.style.display = "block";
//   ivitationCardModal.classList.add("is-active");
// }

var photoAlbums = document.getElementById("photo-albums");

var photoAlbumsModal = document.getElementById("popup-album-image");

photoAlbums.onclick = function(){
  photoAlbumsModal.classList.add("is-active");
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  // ivitationCardModal.style.display = "none";
  ivitationCardModal.classList.remove("is-active");
}


// Lấy kích thước màn hình
function getScreenSize() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  console.log(`Chiều rộng: ${screenWidth}px, Chiều cao: ${screenHeight}px`);
}

// Hiển thị kích thước màn hình trên trang
function displayScreenSize() {
  getScreenSize();
}

// Gọi hàm hiển thị kích thước màn hình khi trang được tải
window.addEventListener("load", displayScreenSize);

// Gọi hàm hiển thị kích thước màn hình khi cửa sổ thay đổi kích thước
window.addEventListener("resize", displayScreenSize);
