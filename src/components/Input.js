const { html, $ } = require('@forgjs/noframework');
const Icon = require('./Icon');

const camelCaseToSnake = (str) => str.replace(/([A-Z])/g, '-$1').toLowerCase();

const objToProps = (obj) => Object.keys(obj).map((key) => `${camelCaseToSnake(key)}="${escape(obj[key])}"`).join(' ');

const Input = ({
  icon,
  label,
  opts,
  error,
  change = () => { },
  blur = () => { },
  forbiddenKey = () => false,
}) => {
  const DomElement = html`
    <div class="input ${icon ? 'with-icon' : ''}">
      ${icon ? Icon(icon) : ''}
      <label>${label || ''}</label>
      ${opts.type === 'textarea' ? html`<textarea ${objToProps(opts)}></textarea>` : html`<input ${objToProps(opts)}>`}
    </div>
  `;
  const input = $('input', DomElement) || $('textarea', DomElement);
  const labelElement = $('label', DomElement);

  DomElement.setValue = (newValue) => {
    input.value = newValue;
    change(input.value);
    if (input.value !== '') {
      DomElement.classList.add('hasValue');
    } else {
      DomElement.classList.remove('hasValue');
    }
    DomElement.value = newValue;
  };

  input.addEventListener('keypress', (e) => {
    if (forbiddenKey(e.key)) {
      e.preventDefault();
      DomElement.classList.add('shake');
    }
  });

  DomElement.addEventListener('webkitAnimationEnd', () => {
    DomElement.classList.remove('shake');
  });

  DomElement.addEventListener('animationend', () => {
    DomElement.classList.remove('shake');
  });


  DomElement.addEventListener('click', () => {
    input.focus();
  });


  input.addEventListener('input', () => {
    DomElement.value = input.value;
    change(input.value);
  });

  input.addEventListener('focus', () => {
    DomElement.classList.add('hasValue');
  });

  input.addEventListener('tap', () => {
    DomElement.classList.add('hasValue');
  });

  input.addEventListener('touched', () => {
    DomElement.classList.add('hasValue');
  });

  input.addEventListener('click', () => {
    DomElement.classList.add('hasValue');
  });

  input.addEventListener('blur', () => {
    blur();
    if (input.value === '') {
      DomElement.classList.remove('hasValue');
    }

    if (error && error(input.value) && (labelElement.innerText !== label || labelElement.innerText !== '')) {
      DomElement.classList.add('error');
      labelElement.innerText = error(input.value);
      DomElement.error = true;
    } else if (error && error(input.value) === false) {
      DomElement.classList.remove('error');
      labelElement.innerText = label || '';
      DomElement.error = false;
    }
  });

  DomElement.setError = (err) => {
    if (err) {
      DomElement.classList.add('error');
      labelElement.innerText = err;
      DomElement.error = true;
    } else {
      DomElement.classList.remove('error');
      labelElement.innerText = label || '';
      DomElement.error = false;
    }
  };


  DomElement.value = input.value;

  return DomElement;
};

module.exports = Input;
