const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('header');
const progressBtn = $('.js-progress');
const progressDropdown = $('.nav-right-dropdown');
const notifyBtn = $('.js-notify');
const notifyDropdown = $('.dropdown-notify');
const userBtn = $('.js-user');
const playBtn = $('.banner__play ');
const bannerOverlay = $('.banner__overlay');
const bannerVideo = $('.banner__video');
const bannerContent = $('.banner-content');

// Handle header
document.onscroll = function () {
    let space = document.documentElement.scrollTop;
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
    if (progressDropdown.style.display == 'none') {
        progressDropdown.style.display = 'block';
    } else {
        progressDropdown.style.display = 'none';
    }
};
notifyBtn.onclick = function (event) {
    if (notifyDropdown.style.display == 'none') {
        notifyDropdown.style.display = 'block';
    } else {
        notifyDropdown.style.display = 'none';
    }
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
