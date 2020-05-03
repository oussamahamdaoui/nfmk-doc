const { html } = require('@forgjs/noframework');
const hljs = require('highlight.js');
const MarkdownIt = require('markdown-it');

const Markdown = async (url = 'https://raw.githubusercontent.com/oussamahamdaoui/noframework.js/master/README.md') => {
  const req = await fetch(url);
  const md = await req.text();
  const mdIt = new MarkdownIt({
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {
          // do nothing
        }
      }

      return ''; // use external default escaping
    },
  });

  const DomElement = html`<div class="markdown">${mdIt.render(md)}</div>`;

  return DomElement;
};

module.exports = Markdown;
