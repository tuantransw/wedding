// document.getElementById("redirect-groom").addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("groom-id").classList.add("is-active");
//     document.getElementById("transform-content-id").classList.add("in-active-left");
//     document.body.style.overflow = "hidden";

//     setTimeout(function () {
//         document.getElementById("groom-id").classList.add("animation-stroke-dash-offset");
//     }, 500);

//     setTimeout(function () {
//         document.getElementById("groom-id").classList.add("animation-fill-offset");
//     }, 1000);

//     setTimeout(function () {
//         document.getElementById("groom-id").classList.add("animation-opacity-content");
//     }, 1500);
// });

// document.getElementById("back-groom").addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("groom-id").classList.remove("is-active");
//     document.getElementById("transform-content-id").classList.remove("in-active-left");
//     document.body.style.overflow = "auto";
//     document.getElementById("groom-id").classList.remove("animation-stroke-dash-offset", "animation-fill-offset", "animation-opacity-content");
// });

// document.getElementById("ivitation-groom").addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("cards-groom").classList.add("is-active");
//     document.getElementById("groom-id").classList.remove("is-active");
//     document.getElementById("transform-content-id").classList.remove("in-active-left");
//     document.body.style.overflow = "auto";
// });

// const urlParams = new URLSearchParams(window.location.search);
// const home = urlParams.get("home");
// const invitation = urlParams.get("invitation");

// if (home && invitation) {
//     const clickThamGia2 = document.querySelectorAll(".click_thamgia2, .click_thamgia");
//     clickThamGia2.forEach(element => {
//         element.style.pointerEvents = "none";
//         element.style.opacity = 0.5;
//     });

//     switch (home) {
//         case "groom":
//             document.getElementById("cards-groom").classList.add("is-active");
//             document.querySelector(".click_thamgia").style.pointerEvents = "unset";
//             document.querySelector(".click_thamgia").style.opacity = 1;
//             break;
//         case "bride":
//             document.getElementById("cards-bride").classList.add("is-active");
//             document.querySelector(".click_thamgia2").style.pointerEvents = "unset";
//             document.querySelector(".click_thamgia2").style.opacity = 1;
//             break;
//         default:
//             document.querySelectorAll(".ivitation_cards").forEach(element => {
//                 element.classList.remove("is-active");
//             });

//             clickThamGia2.forEach(element => {
//                 element.style.pointerEvents = "none";
//                 element.style.opacity = 0.5;
//             });
//     }
// } else {
//     const clickThamGia2 = document.querySelectorAll(".click_thamgia2, .click_thamgia");
//     clickThamGia2.forEach(element => {
//         element.style.pointerEvents = "none";
//         element.style.opacity = 0.5;
//     });
// }

// Get the modal
var ivitationCard = document.getElementById("ivitation-card");
var ivitationCardModal = document.getElementById("cards-groom");

ivitationCard.onclick = function(){
  // ivitationCardModal.style.display = "block";
  ivitationCardModal.classList.add("is-active");
}


var back = document.getElementById("back");

back.onclick = function(){
  console.log("aloo")
    // ivitationCardModal.style.display = "block";
    ivitationCardModal.classList.remove("is-active");
  }

//   document.querySelector(".chucmung_toggle2").addEventListener("click", function(event) {
//     event.preventDefault();
//     document.querySelector("#cm-bride").classList.toggle("_chucmung_active");
//     document.querySelector("#btnMusic").style.opacity = 0;
//     document.querySelector("#btnMusic").style.visibility = "hidden";
// });

// document.querySelector("._chucmung .close2").addEventListener("click", function(event) {
//     event.preventDefault();
//     document.querySelector("#cm-bride").classList.remove("_chucmung_active");
//     document.querySelector("#btnMusic").style.opacity = 1;
//     document.querySelector("#btnMusic").style.visibility = "visible";
// });

document.querySelector(".chucmung_toggle").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#cm-groom").classList.add("_chucmung_active");
    // document.querySelector("#btnMusic").style.opacity = 0;
    // document.querySelector("#btnMusic").style.visibility = "hidden";
});

document.querySelector("._chucmung .close").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#cm-groom").classList.remove("_chucmung_active");
    // document.querySelector("#btnMusic").style.opacity = 1;
    // document.querySelector("#btnMusic").style.visibility = "visible";
});
