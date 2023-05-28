//Togle kelas aktif
const navbarNav = document.querySelector(".navbar-nav");

//ketika humberger menu diklik
document.querySelector('#humberger-menu').onclick = () ==> {
    navbarNav.classList.toggle('active');

}
