const ESC_KEY = 'Escape';

const bannerCloseButton = document.querySelector('.ie-banner__button');
const bannerOverlay = document.querySelector('.ie-banner-overlay');
const banner = document.querySelector('.ie-banner')

const closeBanner = function () {
  bannerOverlay.classList.add('ie-banner-overlay--hide');

  bannerCloseButton.removeEventListener('click', closeBanner);
  window.removeEventListener('keydown', escBannerHandler);
  document.removeEventListener('click', overlayBannerHandler);
};

const escBannerHandler = function (evt) {
  if (evt.key === ESC_KEY) {
    evt.preventDefault();
    closeBanner();
  }
};

const overlayBannerHandler = function (evt) {
  if (evt.target !== banner && !banner.contains(evt.target)) {
    closeBanner();
  }
};

const closeBannerByClick = function () {
  bannerCloseButton.addEventListener('click', closeBanner);
  window.addEventListener('keydown', escBannerHandler);
  document.addEventListener('click', overlayBannerHandler);
};

if (banner) {
  closeBannerByClick();
}
