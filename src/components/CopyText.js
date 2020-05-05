const { html, $ } = require('@forgjs/noframework');
const Icon = require('./Icon');

const CopyText = (component) => {
  const DomElement = html`<div class="copy-text">
    ${Icon('clipboard')}
    <textarea class="value"></textarea>
  </div>`;

  component.appendChild(DomElement);
  DomElement.addEventListener('click', () => {
    const copyText = $('.value', DomElement);
    copyText.value = component.innerText.trim();
    copyText.select(0);
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  });

  return component;
};

module.exports = CopyText;
