const { html } = require('@forgjs/noframework');
const Markdown = require('./components/Markdown');

const Docs = () => {
  const DomElement = html`<div class="docs">
    ${Markdown()}
  </div>`;

  return DomElement;
};

module.exports = Docs;
