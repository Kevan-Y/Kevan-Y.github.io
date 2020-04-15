let itemsList = window.items;

function getItem(collection, gender) {
  if (gender)
    return itemsList.filter(item => collection.toUpperCase() === item.category && gender.toUpperCase() === item.gender);
  else return itemsList.filter(item => collection.toUpperCase() === item.category);
}

function getByGender(gender) {
  return itemsList.filter(item => gender.toUpperCase() === item.gender);
}

function clearDiv() {
  document.querySelector('#itemRow').innerHTML = '';
}

function createBox(item) {
  let div1 = document.createElement('div');
  div1.setAttribute('class', 'col mb-4');
  let fig = document.createElement('figure');
  div1.appendChild(fig);
  fig.setAttribute('class', 'card product');
  let div2 = document.createElement('div');
  fig.appendChild(div2);
  div2.setAttribute('class', 'img-wrap');
  let img = document.createElement('img');
  img.src = item.picURL;
  img.alt = '';
  div2.appendChild(img);
  let figCap = document.createElement('figcaption');
  fig.appendChild(figCap);
  figCap.setAttribute('class', 'info-wrap');
  let h5 = document.createElement('h5');
  h5.setAttribute('class', 'title');
  h5.innerText = item.name;
  let p = document.createElement('p');
  p.setAttribute('class', 'desc');
  p.innerText = item.description;
  figCap.appendChild(h5);
  figCap.appendChild(p);
  let div3 = document.createElement('div');
  fig.appendChild(div3);
  div3.setAttribute('class', 'bottom-wrap');
  let a = document.createElement('a');
  div3.appendChild(a);
  a.setAttribute('class', 'btn btn-sm btn-primary float-right');
  a.href = '#';
  a.innerText = 'Add to cart';
  let div4 = document.createElement('div');
  div3.appendChild(div4);
  div4.setAttribute('class', 'h4');
  let span = document.createElement('span');
  div4.appendChild(span);
  span.innerText = `$${item.price}`;
  return div1;
}

function displayItem(items) {
  clearDiv();
  items.forEach(element => {
    document.querySelector('#itemRow').appendChild(createBox(element));
  });
}

function displayItemMain(items) {
  items.forEach(element => {
    document.querySelector('#mainItemRow').appendChild(createBox(element));
  });
}

function click() {
  document.querySelectorAll('.EN').forEach(query =>
    query.addEventListener('click', () => {
      displayItem(getItem(query.className.split(' ')[2], query.className.split(' ')[1]));
      if (query.className.split(' ')[1] === 'F')
        document.querySelector('#MenuText').innerText = 'Women - Classic Collection';
      else
        document.querySelector('#MenuText').innerText = 'Men - Classic Collection';
    })
  );
  document.querySelectorAll('.JP').forEach(query =>
    query.addEventListener('click', () => {
      displayItem(getItem(query.className.split(' ')[2], query.className.split(' ')[1]));
      if (query.className.split(' ')[1] === 'F')
        document.querySelector('#MenuText').innerText = 'Women - Japanese Collection';
      else
        document.querySelector('#MenuText').innerText = 'Men - Japanese Collection';
    })
  );
  document.querySelectorAll('.Music').forEach(query =>
    query.addEventListener('click', () => {
      displayItem(getItem(query.className.split(' ')[2], query.className.split(' ')[1]));
      if (query.className.split(' ')[1] === 'F')
        document.querySelector('#MenuText').innerText = 'Women - Music Collection';
      else
        document.querySelector('#MenuText').innerText = 'Men - Music Collection';
    })
  );
}
window.addEventListener('load', click);
window.addEventListener('load', () => {
  if (document.querySelector('#itemRow')) {
    if (document.querySelector('#itemRow').getAttribute('data-gender') === 'F')
      displayItem(getByGender('F'));
    else if (document.querySelector('#itemRow').getAttribute('data-gender') === 'M')
      displayItem(getByGender('M'));
  } else if (document.querySelector('#mainItemRow'))
    displayItemMain(getItem('Music'));
});