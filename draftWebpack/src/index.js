import './style.css';
import Banner from './banner.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Webpack!';
  element.classList.add('message');

  const bannerImage = new Image();
  bannerImage.src = Banner;

  element.appendChild(bannerImage);

  return element;
}

document.body.appendChild(component());
