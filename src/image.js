import code from './code.jpg';

function addImage() {
    const img = document.createElement('img');
    
    img.alt = 'code';
    img.width = 300;
    img.src = code;

    const body = document.querySelector('body');

    body.append(img);
}

export default addImage;
