const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('header');
const closeBtns = $$('.btn__close');
const progressBtn = $('.js-progress');
const progressDropdown = $('.nav-right-dropdown');
const notifyBtn = $('.js-notify');
const notifyDropdown = $('.dropdown-notify');
const userBtn = $('.js-user');
const userDropdown = $('.user-dropdown');
const playBtn = $('.banner__play ');
const bannerOverlay = $('.banner__overlay');
const bannerVideo = $('.banner__video');
const bannerContent = $('.banner-content');

// Handle header
document.onscroll = function () {
    let space = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(space);

    if (space > 60) {
        header.style.backgroundColor = '#000';
        header.style.marginTop = '0';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.marginTop = '14px';
    }
};

// Handle nav right btn
progressBtn.onclick = function (event) {
    event.stopPropagation();
    notifyDropdown.style.display = 'none';
    userDropdown.style.display = 'none';
    if (progressDropdown.style.display == 'block') {
        progressDropdown.style.display = 'none';
    } else {
        progressDropdown.style.display = 'block';
    }
};

notifyBtn.onclick = function (event) {
    event.stopPropagation();
    progressDropdown.style.display = 'none';
    userDropdown.style.display = 'none';
    if (notifyDropdown.style.display == 'block') {
        notifyDropdown.style.display = 'none';
    } else {
        notifyDropdown.style.display = 'block';
    }
};

closeBtns.forEach((closeBtn) => {
    closeBtn.onclick = function (event) {
        event.stopPropagation();
        progressDropdown.style.display = 'none';
        notifyDropdown.style.display = 'none';
        userDropdown.style.display = 'none';
    };
});

userBtn.onclick = function (event) {
    event.stopPropagation();
    progressDropdown.style.display = 'none';
    notifyDropdown.style.display = 'none';
    if (userDropdown.style.display == 'block') {
        userDropdown.style.display = 'none';
    } else {
        userDropdown.style.display = 'block';
    }
};

document.onclick = function () {
    progressDropdown.style.display = 'none';
    notifyDropdown.style.display = 'none';
    userDropdown.style.display = 'none';
};

progressDropdown.onclick = function (event) {
    event.stopPropagation();
};
notifyDropdown.onclick = function (event) {
    event.stopPropagation();
};
userDropdown.onclick = function (event) {
    event.stopPropagation();
};

// Handle Video
playBtn.onclick = function () {
    console.log('click');
    bannerVideo.muted = !bannerVideo.muted;
    bannerVideo.audio = 1;
    bannerOverlay.style.visibility = 'hidden';
    bannerContent.style.visibility = 'hidden';
    playBtn.style.visibility = 'hidden';
};

// bannerOverlay.onmouseover = function (event) {
//     event.stopPropagation();
// }

bannerVideo.onmouseover = function () {
    console.log(132);
    bannerContent.style.visibility = 'visible';
    bannerOverlay.style.visibility = 'visible';
    bannerContent.style.opacity = 1;
    bannerOverlay.style.opacity = 1;
    setTimeout(() => {
        bannerOverlay.style.visibility = 'hidden';
        bannerContent.style.visibility = 'hidden';
        bannerContent.style.opacity = 0;
        bannerOverlay.style.opacity = 0;
    }, 2000);
};
