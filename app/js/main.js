window.addEventListener("scroll", bringmenu);

function bringmenu() {
    if (document.documentElement.scrollTop > 450) {
        document.getElementById('hiddenmenu').classList.add('show');
        document.querySelector('nav').classList.add('header__nav_nomarg');
        document.getElementById('header__space').style.display= 'block';
    } else {
        document.getElementById('hiddenmenu').classList.remove('show');
        document.querySelector('nav').classList.remove('header__nav_nomarg');
        document.getElementById('header__space').style.display = 'none';
    }
}