import './style.css';
import Banner from './banner.jpg';
import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

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

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
