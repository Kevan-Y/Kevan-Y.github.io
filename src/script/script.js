window.onload = function() {
  document.querySelector('#radioBox').addEventListener('click', () => {
    if (document.querySelector('#radioOrder').checked)
      document.querySelector('#OrderNumBox').removeAttribute('hidden');
    else document.querySelector('#OrderNumBox').setAttribute('hidden', 'true');
  });
  document.querySelector('#date').value = new this.Date();
  let form = document.querySelector('#form');
  form.onsubmit = function(event) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      event.preventDefault();
      return false;
    }
    return true;
  };
};
