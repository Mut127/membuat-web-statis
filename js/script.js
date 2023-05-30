// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// slidebar
function videoUrl(hmmmm) {
  document.getElementById("slider").src = hmmmm;
}

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal

const itemDetailModal1 = document.querySelector("#item-detail-modal1");
const itemDetailButtons1 = document.querySelectorAll(".item-detail-button1");

itemDetailButtons1.forEach((btn) => {
  btn.onclick = (p) => {
    itemDetailModal1.style.display = "flex";
    p.preventDefault();
  };
});

const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");

itemDetailButtons2.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal2.style.display = "flex";
    x.preventDefault();
  };
});

const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButtons3 = document.querySelectorAll(".item-detail-button3");

itemDetailButtons3.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal3.style.display = "flex";
    x.preventDefault();
  };
});

const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButtons4 = document.querySelectorAll(".item-detail-button4");

itemDetailButtons4.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal4.style.display = "flex";
    x.preventDefault();
  };
});

const itemDetailModal5 = document.querySelector("#item-detail-modal5");
const itemDetailButtons5 = document.querySelectorAll(".item-detail-button5");

itemDetailButtons5.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal5.style.display = "flex";
    x.preventDefault();
  };
});

const itemDetailModal6 = document.querySelector("#item-detail-modal6");
const itemDetailButtons6 = document.querySelectorAll(".item-detail-button6");

itemDetailButtons6.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal6.style.display = "flex";
    x.preventDefault();
  };
});

const itemDetailModal7 = document.querySelector("#item-detail-modal7");
const itemDetailButtons7 = document.querySelectorAll(".item-detail-button7");

itemDetailButtons7.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal7.style.display = "flex";
    x.preventDefault();
  };
});

const itemDetailModal8 = document.querySelector("#item-detail-modal8");
const itemDetailButtons8 = document.querySelectorAll(".item-detail-button8");

itemDetailButtons8.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal8.style.display = "flex";
    x.preventDefault();
  };
});

const itemDetailModal9 = document.querySelector("#item-detail-modal9");
const itemDetailButtons9 = document.querySelectorAll(".item-detail-button9");

itemDetailButtons9.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal9.style.display = "flex";
    x.preventDefault();
  };
});

const itemDetailModal10 = document.querySelector("#item-detail-modal10");
const itemDetailButtons10 = document.querySelectorAll(".item-detail-button10");

itemDetailButtons10.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal10.style.display = "flex";
    x.preventDefault();
  };
});

const itemDetailModal11 = document.querySelector("#item-detail-modal11");
const itemDetailButtons11 = document.querySelectorAll(".item-detail-button11");

itemDetailButtons11.forEach((btn) => {
  btn.onclick = (x) => {
    itemDetailModal11.style.display = "flex";
    x.preventDefault();
  };
});

const tambahDetailModal = document.querySelector("#tambah-detail-modal");
const tambahDetailButtons = document.querySelectorAll(".tambah-detail-button");

tambahDetailButtons.forEach((btn) => {
  btn.onclick = (x) => {
    tambahDetailModal.style.display = "flex";
    x.preventDefault();
  };
});

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = "none";
  }
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  }
  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = "none";
  }
  if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = "none";
  }
  if (e.target === itemDetailModal5) {
    itemDetailModal5.style.display = "none";
  }
  if (e.target === itemDetailModal6) {
    itemDetailModal6.style.display = "none";
  }
  if (e.target === itemDetailModal7) {
    itemDetailModal7.style.display = "none";
  }
  if (e.target === itemDetailModal8) {
    itemDetailModal8.style.display = "none";
  }
  if (e.target === itemDetailModal9) {
    itemDetailModal9.style.display = "none";
  }
  if (e.target === itemDetailModal10) {
    itemDetailModal10.style.display = "none";
  }
  if (e.target === itemDetailModal11) {
    itemDetailModal11.style.display = "none";
  }
  if (e.target === tambahDetailModal) {
    tambahDetailModal.style.display = "none";
  }
};
