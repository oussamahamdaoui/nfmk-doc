const GlobalEvents = require('../GlobalEvents');

const Link = (url, component) => {
  component.addEventListener('click', (e) => {
    e.preventDefault();
    GlobalEvents.emit('reroute', url);
  });

  return component;
};
module.exports = Link;
