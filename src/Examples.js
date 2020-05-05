const { html } = require('@forgjs/noframework');
const fs = require('fs');
const Example = require('./components/Example');
const Icon = require('./components/Icon');
const CopyInput = require('./components/CopyInput');
const Markdown = require('./components/Markdown');
const Navigation = require('./components/Navigation');


const examples = [
  {
    component: Icon('x'),
    js: fs.readFileSync(`${__dirname}/components/Icon.js`, 'utf8'),
    title: 'Icon component',
  },
  {
    component: CopyInput('some text'),
    js: fs.readFileSync(`${__dirname}/components/CopyInput.js`, 'utf8'),
    scss: fs.readFileSync(`${__dirname}/components/_copyInput.scss`, 'utf8'),
    title: 'CopyInput component',
  },
  {
    component: Markdown('https://gist.githubusercontent.com/oussamahamdaoui/5530b36d847ddd1f5a20b7a7a9e7d2c1/raw/39ab835c52bcbdf4a17d21b00c6a5dd86b6a937e/anonymization-protocol.md'),
    js: fs.readFileSync(`${__dirname}/components/Markdown.js`, 'utf8'),
    scss: fs.readFileSync(`${__dirname}/components/_markdown.scss`, 'utf8'),
    title: 'Markdown component',
  },
  {
    component: Navigation(),
    js: fs.readFileSync(`${__dirname}/components/Navigation.js`, 'utf8'),
    scss: fs.readFileSync(`${__dirname}/components/_navigation.scss`, 'utf8'),
    title: 'Navigation component',
  },
];

const Examples = () => {
  const DomElement = html`
    <div>
      ${examples.map(Example)}
    </div>
  `;
  return DomElement;
};

module.exports = Examples;
