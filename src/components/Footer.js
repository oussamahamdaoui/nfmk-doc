const { html } = require('@forgjs/noframework');

const Footer = () => {
  const DomElement = html`<footer>
    <img class="mascot" src="./media/mascot.svg">
    <h2>The end</h2>
  </footer>`;

  return DomElement;
};

module.exports = Footer;
