import code from './code.jpg';
import './css/image.css';

function addImage() {
    const img = document.createElement('img');
    
    img.alt = 'code';
    img.width = 300;
    img.src = code;

    img.classList.add('img');

    const body = document.querySelector('body');

    body.append(img);
}

export default addImage;
