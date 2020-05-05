const { html, cache, $$ } = require('@forgjs/noframework');
const hljs = require('highlight.js');
const MarkdownIt = require('markdown-it');
const CopyText = require('./CopyText');

const cachedFetch = cache(async (url) => {
  const req = await fetch(url);
  const md = await req.text();
  return md;
}, 1000 * 60 * 60); // cache the result for one hour

const Markdown = async (url = 'https://raw.githubusercontent.com/oussamahamdaoui/noframework.js/master/README.md') => {
  const md = await cachedFetch(url);
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
  $$('pre>code', DomElement).forEach((element) => {
    CopyText(element);
  });

  return DomElement;
};

module.exports = Markdown;
