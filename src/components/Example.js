const { html, $, $$ } = require('@forgjs/noframework');
const hljs = require('highlight.js');
const CopyText = require('./CopyText');

const Example = ({
  title, component, js, scss,
}) => {
  const DomElement = html`<div class="example preview">
    <h2>${title}</h2>
      <div class="nav">
        <button class="preview">Preview</button>
        <button class="see-javascript">Javascript</button>
        ${scss ? html`<button class="see-scss">SCSS</button>` : ''}
      </div>
    <div class="tabs">
      <div class="component">${component}</div>
      <pre><code class="language-javascript">${hljs.highlight('javascript', js).value}</code></pre>
      ${scss ? html`<pre><code class="language-scss">${hljs.highlight('scss', scss).value}</code></pre>` : ''}
    </div>
  </div>`;
  const navElement = $('.nav', DomElement);

  navElement.addEventListener('click', ({ target }) => {
    const currentClass = DomElement.classList.item(1);
    DomElement.classList.replace(currentClass, target.classList.item(0));
  });

  $$('pre>code', DomElement).forEach((element) => {
    CopyText(element);
  });


  return DomElement;
};

module.exports = Example;
