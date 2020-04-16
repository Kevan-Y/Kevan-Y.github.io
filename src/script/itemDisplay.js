let itemsList = window.items;

function getItem(collection, gender) {
  if (gender)
    return itemsList.filter(
      item => collection.toUpperCase() === item.category && gender.toUpperCase() === item.gender
    );
  return itemsList.filter(item => collection.toUpperCase() === item.category);
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
  let row1 = document.createElement('div');
  row1.setAttribute('class', 'row');
  div3.appendChild(row1);
  let div4 = document.createElement('div');
  div4.setAttribute('class', 'col');
  row1.appendChild(div4);
  let div5 = document.createElement('div');
  div4.appendChild(div5);
  div5.setAttribute('class', 'h4');
  let span = document.createElement('span');
  div5.appendChild(span);
  span.innerText = `$${item.price}`;
  let div5_ = document.createElement('div');
  div5_.setAttribute('class', 'col');
  row1.appendChild(div5_);
  let a_i = document.createElement('a');
  a_i.setAttribute('href', '#');
  a_i.setAttribute('class', 'nav-link linkWishlist');
  div5_.appendChild(a_i);
  let i = document.createElement('i');
  i.setAttribute('class', 'far fa-heart');
  a_i.appendChild(i);
  let row2 = document.createElement('div');
  row2.setAttribute('class', 'row');
  div3.appendChild(row2);
  let div6 = document.createElement('div');
  div6.setAttribute('class', 'col');
  row2.appendChild(div6);
  let a = document.createElement('a');
  div6.appendChild(a);
  a.setAttribute('class', 'btn btn-sm btn-primary btn-block');
  a.href = '#';
  a.innerText = 'Add to cart';
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
      else document.querySelector('#MenuText').innerText = 'Men - Classic Collection';
    })
  );
  document.querySelectorAll('.JP').forEach(query =>
    query.addEventListener('click', () => {
      displayItem(getItem(query.className.split(' ')[2], query.className.split(' ')[1]));
      if (query.className.split(' ')[1] === 'F')
        document.querySelector('#MenuText').innerText = 'Women - Japanese Collection';
      else document.querySelector('#MenuText').innerText = 'Men - Japanese Collection';
    })
  );
  document.querySelectorAll('.Music').forEach(query =>
    query.addEventListener('click', () => {
      displayItem(getItem(query.className.split(' ')[2], query.className.split(' ')[1]));
      if (query.className.split(' ')[1] === 'F')
        document.querySelector('#MenuText').innerText = 'Women - Music Collection';
      else document.querySelector('#MenuText').innerText = 'Men - Music Collection';
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
  } else if (document.querySelector('#mainItemRow')) displayItemMain(getItem('Music'));
});
