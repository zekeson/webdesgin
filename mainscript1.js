const introScreen = document.getElementById('introScreen');
const introOverlay = document.getElementById('introOverlay');

// 이미지 배열
const images = [
    './overlayimg/overlay1.JPG',
    './overlayimg/overlay2.JPG',
    './overlayimg/overlay3.JPG',
    './overlayimg/overlay4.JPG',
    './overlayimg/overlay5.JPG'
];

let currentIndex = 0;

// 이미지 요소 2개를 사용한 크로스페이드 구조 생성
const bg1 = document.createElement('div');
const bg2 = document.createElement('div');

[bg1, bg2].forEach(bg => {
  bg.className = 'intro-bg';
  introScreen.appendChild(bg);
});

let showingBg = bg1;

// 초기 이미지 바로 보여주기
window.addEventListener('DOMContentLoaded', () => {
  showingBg.style.backgroundImage = `url('${images[0]}')`;
  showingBg.style.opacity = 1;
});

// 이미지 전환 함수
function switchImage() {
  const nextBg = (showingBg === bg1) ? bg2 : bg1;
  currentIndex = (currentIndex + 1) % images.length;

  nextBg.style.backgroundImage = `url('${images[currentIndex]}')`;
  nextBg.style.opacity = 1;
  showingBg.style.opacity = 0;

  showingBg = nextBg;
}

// 2초마다 이미지 전환
setInterval(switchImage, 3000);

// 클릭 시 서서히 사라지기
introOverlay.addEventListener('click', () => {
  introScreen.classList.add('fade-out');
  introOverlay.classList.add('fade-out');
});

const sliderImages = document.querySelectorAll('.slider-img');
let currentSlide = 0;

function showNextSlide() {
  sliderImages[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % sliderImages.length;
  sliderImages[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000); // 4초마다 전환

