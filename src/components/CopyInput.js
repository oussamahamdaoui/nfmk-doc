const { html, $, escape } = require('@forgjs/noframework');
const Icon = require('./Icon');

const CopyInput = (text) => {
  const DomElement = html`<div class="copy-input">
    <input readonly class="value" value="${escape(text)}">
    <button>${Icon('clipboard')}</button>
  </div>`;

  DomElement.addEventListener('click', () => {
    const copyText = $('.value', DomElement);
    copyText.select(1);
    copyText.setSelectionRange(1, 99999);
    document.execCommand('copy');
  });

  return DomElement;
};

module.exports = CopyInput;
