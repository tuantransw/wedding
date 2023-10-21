var back = document.getElementById("back");

back.onclick = function(){
    // ivitationCardModal.style.display = "block";
    ivitationCardModal.classList.remove("is-active");
  }

//   document.querySelector(".click_thamgia").addEventListener("click", function(event) {
//     event.preventDefault();
//     document.querySelector("#cm-join").classList.add("_chucmung_active");
//     document.querySelector("#btnMusic").style.opacity = 0;
//     document.querySelector("#btnMusic").style.visibility = "hidden";
// });

// document.querySelector("._thamgia .close").addEventListener("click", function(event) {
//     event.preventDefault();
//     document.querySelector("#cm-join").classList.remove("_chucmung_active");
//     document.querySelector("#btnMusic").style.opacity = 1;
//     document.querySelector("#btnMusic").style.visibility = "visible";
// });

document.querySelector(".chucmung_toggle").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#cm-groom").classList.add("_chucmung_active");
    document.querySelector("#btnMusic").style.opacity = 0;
    document.querySelector("#btnMusic").style.visibility = "hidden";
});

document.querySelector("._chucmung .close").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#cm-groom").classList.remove("_chucmung_active");
    document.querySelector("#btnMusic").style.opacity = 1;
    document.querySelector("#btnMusic").style.visibility = "visible";
    ivitationCardModal.classList.add("is-active");
});
