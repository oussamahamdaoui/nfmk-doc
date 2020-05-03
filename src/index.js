// eslint-disable-next-line import/no-extraneous-dependencies
require('babel-polyfill');
const { html } = require('@forgjs/noframework');
const router = require('./Router');
const Footer = require('./components/Footer');

const App = () => {
  const DomElement = html`<div class="app">
    ${router.init()}
    ${Footer()}
  </div>`;

  return DomElement;
};

document.body.appendChild(App());
