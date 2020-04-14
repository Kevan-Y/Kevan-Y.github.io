window.onload = function() {
  document.querySelector('#radioBox').addEventListener('click', () => {
    if (document.querySelector('#radioOrder').checked)
      document.querySelector('#OrderNumBox').removeAttribute('hidden');
    else document.querySelector('#OrderNumBox').setAttribute('hidden', 'true');
  });
  document.querySelector('#date').value = new this.Date();
};
