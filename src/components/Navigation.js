const { html, $ } = require('@forgjs/noframework');
const Link = require('./Link');
const GlobalEvents = require('../GlobalEvents');

const Navigation = () => {
  const DomElement = html`<nav>
    ${Link('/', html`<a href="/" class="selected">Doc</a>`)}
    ${Link('/examples', html`<a href="/examples" >Examples</a>`)}
  </nav>`;

  GlobalEvents.subscribe('rerouted', (url) => {
    const link = $(`[href="${url.pathname}"]`, DomElement);
    $('.selected', DomElement).classList.remove('selected');
    if (link) {
      link.classList.add('selected');
    }
  });


  return DomElement;
};

module.exports = Navigation;
