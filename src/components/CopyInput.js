const { html, $, escape } = require('@forgjs/noframework');
const Icon = require('./Icon');

const CopyInput = (text) => {
  const DomElement = html`<div class="copy-input">
    <input readonly class="value" value="${escape(text)}">
    <button>${Icon('clipboard')}</button>
  </div>`;

  DomElement.addEventListener('click', () => {
    const copyText = $('.value', DomElement);
    let start = 0;
    if (copyText.value[0] === '>') {
      start = 1;
    }
    copyText.select(start);
    copyText.setSelectionRange(start, 99999);
    document.execCommand('copy');
  });

  return DomElement;
};

module.exports = CopyInput;
