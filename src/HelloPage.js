const { html } = require('@forgjs/noframework');
const Head = require('./components/Head');
const Markdown = require('./components/Markdown');

const HelloPage = () => {
  const DomElement = html`<div>
    ${Head()}
    ${Markdown()}
  </div>`;

  return DomElement;
};

module.exports = HelloPage;
