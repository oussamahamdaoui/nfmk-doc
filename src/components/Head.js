const { html } = require('@forgjs/noframework');
const CopyInput = require('./CopyInput');

const Head = () => {
  const DomElement = html`
    <div class="head">
      <img src="./media/logo.svg">
      <p>
        noFramework.js is a list of small javascript 
        functions that help you write almost pure javascript.
        This documentation was build using noFramework.js 😜
      </p>
      ${CopyInput('> npm i @forgjs/noframework')}
    </div>
  `;

  return DomElement;
};

module.exports = Head;
