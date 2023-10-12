// Replace 'your_api_endpoint' with the actual URL of the API you want to call
const apiUrl = 'https://api.tta1214.click/api/';

// Make a GET request to the API
fetch(apiUrl + 'products')
  .then(response => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Do something with the JSON data
    console.log(data)
  })
  .catch(error => {
    // Handle errors here
    console.error('There was a problem with the fetch operation:', error);
  });

function audioClick() {
  var backgroundAudio = document.getElementById("backgroundAudio");
  var image = document.getElementById("imgMusic");
  if (backgroundAudio.paused) {
    backgroundAudio.play();
    image.src = "https://tuantransw.github.io/wedding/Images/Icons/pause.png";
  } else {
    backgroundAudio.pause();
    image.src = "https://tuantransw.github.io/wedding/Images/Icons/play.png";
  }
}

function changeImgAudio() {
  var backgroundAudio = document.getElementById("backgroundAudio");
  var image = document.getElementById("imgMusic");
  if (backgroundAudio.paused) {
    image.src = "https://tuantransw.github.io/wedding/Images/Icons/play.png";
  } else {
    image.src = "https://tuantransw.github.io/wedding/Images/Icons/pause.png";
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
  setTimeout(showLoading, 2000);
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



