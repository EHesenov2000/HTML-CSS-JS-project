var counter = 0;

function Righticon() {
  counter++;
  document;

  if (counter % 2 == 1) {
    $(".RightIcon ul li").slideDown();
    document
      .querySelector(".RightIcon ul ul i")
      .setAttribute("class", "bi bi-filter-right float-end ");
  } else {
    $(".RightIcon ul li").slideUp();
    document
      .querySelector(".RightIcon ul ul i")
      .setAttribute("class", "bi bi-filter-left float-end");
  }
}
// -------------------------------------------------

// Duzgun email format:   nese@nese.nese
document.querySelector(".EmailInput").addEventListener("keyup", function () {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(this.value)) {
    this.style.border = "2px solid red";
    document.querySelector(".div").innerText = "Duzgun daxil edin";
    return false;
  } else {
    document.getElementsByClassName("Subscribe")[0].onclick = function () {
      toastr["success"]("Təşəkkürlər", "Icra edildi ");
    };
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "100",
      hideDuration: "1000",
      timeOut: "2500",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };

    this.style.border = "1px solid black";
    document.querySelector(".div").innerText = "";

    return true;
  }
});
// -------------------------drop a message---------------------

var inputlarSayi = 0;
function ONCLICK() {
  for (let n = 0; n < document.getElementsByClassName("Mesajlar").length; n++) {
    if (document.getElementsByClassName("Mesajlar")[n].value) {
      document.getElementsByClassName("Mesaj")[n].innerText = "";
      inputlarSayi++;
    } else {
      document.getElementsByClassName("Mesaj")[n].innerText =
        "Duzgun daxil edin";
      document.getElementsByClassName("Mesajlar")[n].style.border =
        "2px solid red";
    }
  }
  if (inputlarSayi == 3) {
    for (
      let d = 0;
      d < document.getElementsByClassName("Mesajlar").length;
      d++
    ) {
      document.getElementsByClassName("Mesajlar")[d].value = "";
    }
    toastr["success"]("Təşəkkürlər", "Icra edildi ");

    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  }
}
function LegvEt(e) {
  e.preventDefault();
  for (let n = 0; n < document.getElementsByClassName("Mesajlar").length; n++) {
    if (document.getElementsByClassName("Mesajlar")[n].value) {
      document.getElementsByClassName("Mesaj")[n].innerText = "";
      document.getElementsByClassName("Mesajlar")[n].style.border =
        "2px solid black";
    } else {
      document.getElementsByClassName("Mesaj")[n].innerText =
        "Duzgun daxil edin";
      document.getElementsByClassName("Mesajlar")[n].style.border =
        "2px solid red";
    }
  }
}
// -----------------------------------------------------------

// -----------------------
