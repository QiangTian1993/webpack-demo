import _ from 'lodash';
import './style.scss';
import _module1 from './module1.js';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());


