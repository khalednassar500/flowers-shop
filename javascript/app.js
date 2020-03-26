'use strict'
let loadingPage = document.getElementById('top-name');
let topConect = document.getElementById('top-Connect');

function topNAme() {
  if (window.innerWidth < 600 ) {
    loadingPage.style.cssText = 'height: 200px;position: static;';
  }else {
    loadingPage.style.cssText = 'height: 250px;position: static; min-width: 90vw';
  }
  topConect.style.cssText = 'margin-top: 0;top: 0;'
}
loadingPage.addEventListener('animationend', topNAme)

/*add toggle icon for nav content if width < 600*/
let toggleNavIcon = document.getElementById('toggle-nav-icon');
function showNav() {
  let links = document.getElementById('links');
  if (links.style.height == 'auto') {
    links.style.height = '0';
    return
  }
  links.style.height = 'auto';
}
toggleNavIcon.addEventListener('click', showNav)
window.onscroll = () => {
    if (window.scrollY > 230) {
      document.querySelector('nav').style.cssText = '  box-shadow: 0px 1px 20px 0px #e1e1d0;opacity: 1;';
      document.querySelector('main').firstElementChild.style.cssText = 'opacity: 0; visibilty: hidden;';
      document.querySelector('#top-arrow').style.cssText = 'display: none;';
      document.getElementById('container-of-colors').style.cssText = 'opacity: 1';
    }else {
      document.querySelector('nav').style.cssText = 'box-shadow: 0 0; opacity: 0;';
      document.querySelector('main').firstElementChild.style.cssText = 'opacity: 1; visibilty: visible;';
      document.querySelector('#top-arrow').style.cssText = 'dispaly: block;';
      document.getElementById('container-of-colors').style.cssText = 'opacity: 0';
    }
    if (window.scrollY > 902) {
        document.getElementById('container-of-bouquets').style.cssText = 'opacity: 1';
    }else {
        document.getElementById('container-of-bouquets').style.cssText = 'opacity: 0';
    }
  }
  function navIcon(x) {
    x.classList.toggle('open-nav');
  }
/*-----------container of choose by color--------------*/
const CONTAINER_OF_COLORS = document.getElementById('left-choose');
let name = 'red';
function dispalyImageByColor(event) {
    if (event.target.nodeName == 'P') {
    let nameOfId = '';
    for (let x = 0; x < event.target.id.length-5; x++) {
      nameOfId += event.target.id[x + 5]
    }
    document.getElementById(name).style.cssText = 'opacity: 0;visibility: hidden;transition: 0.5s;';
    document.getElementById(nameOfId).style.cssText = 'opacity: 1;visibility: visible;transition: 2s ease-out;';
    name = nameOfId;
    document.getElementById('right-choose').scrollLeft = 0;
  }
  
}
CONTAINER_OF_COLORS.addEventListener('click', dispalyImageByColor);
/* container of bouquets*/
const ALL_Images = [['image s/4537_LAY.jpeg','images/4539_LAY.jpeg','images/6103_LAY.jpeg','images/30003887_LAY.jpeg','images/30007596_LAY.jpeg','images/30007597_LAY.jpeg','images/30010137_LAY.jpeg','images/30047878_LAY.jpeg','images/30261478_LAY.jpeg'],
                    ["images/4539_LAY.jpeg","images/6103_LAY.jpeg","images/30003887_LAY.jpeg","images/30007596_LAY.jpeg","images/30007597_LAY.jpeg","images/30010137_LAY.jpeg","images/30047878_LAY.jpeg","images/30261478_LAY.jpeg",'images/30007597_LAY.jpeg'],
                    ['images/30003887_LAY.jpeg','images/30261478_LAY.jpeg','images/30007597_LAY.jpeg','images/30185587_LAY.jpeg','images/4539_LAY.jpeg','images/30010137_LAY.jpeg','images/30047878_LAY.jpeg','images/30007596_LAY.jpeg','images/4539_LAY.jpeg'],
                    ['images/30261478_LAY.jpeg','images/4539_LAY.jpeg','images/30185587_LAY.jpeg','images/30007596_LAY.jpeg','images/30010137_LAY.jpeg','images/30047878_LAY.jpeg','images/30003887_LAY.jpeg','images/4539_LAY.jpeg','images/30007597_LAY.jpeg'],
                    ['images/30261478_LAY.jpeg','images/30007597_LAY.jpeg','images/30185587_LAY.jpeg','images/30047878_LAY.jpeg','images/30003887_LAY.jpeg','images/30007596_LAY.jpeg','images/30010137_LAY.jpeg','images/4539_LAY.jpeg','images/4539_LAY.jpeg'],
                    ['images/30261478_LAY.jpeg','images/30185587_LAY.jpeg','images/30010137_LAY.jpeg','images/30047878_LAY.jpeg','images/30003887_LAY.jpeg','images/30007596_LAY.jpeg','images/4539_LAY.jpeg','images/30007597_LAY.jpeg','images/4539_LAY.jpeg'],
                    ['images/30261478_LAY.jpeg','images/30007596_LAY.jpeg','images/30185587_LAY.jpeg','images/30007597_LAY.jpeg','images/30010137_LAY.jpeg','images/30047878_LAY.jpeg','images/30003887_LAY.jpeg','images/4539_LAY.jpeg','images/4539_LAY.jpeg'],
                    ['images/30185587_LAY.jpeg','images/30261478_LAY.jpeg','images/30010137_LAY.jpeg','images/4539_LAY.jpeg','images/4539_LAY.jpeg','images/30047878_LAY.jpeg','images/30003887_LAY.jpeg','images/30007597_LAY.jpeg','images/30007596_LAY.jpeg']
                   ]

const ALL_PRICES = [[1,1,1,1,1,1,1,1,1],
                    [12,12,12,12,12,16,13,14,10],
                    [1,13,14,1,1,16,19,17,14],
                    [1,1,1,1,1,1,17,1,1],
                    [1,1,14,1,1,1,1,15,1],
                    [1,1,1,1,15,1,1,15,1],
                    [1,15,1,1,1,1,16,1,1],
                    [1,1,15,1,1,1,1,1,18],
                    [1,30,1,1,1,1,1,1,1]
                   ]

const ALL_DESCRIPTIONS = [['some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......'],
                          ['some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......'],
                          ['some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......'],
                          ['some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......'],
                          ['some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......'],
                          ['some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......'],
                          ['some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......'],
                          ['some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......'],
                          ['some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......','some words some words some.......']
                          ]

function qalqulateLength(){
  let total = document.getElementById('total');
  total.textContent = ALL_Images.length;
}
qalqulateLength()

const NUMBERS_CONTAINER = document.getElementById('numbers-of-images');

function dispalyImages(num) {
  let x = ALL_Images[num-1];
  let p = ALL_PRICES[num-1];
  let d = ALL_DESCRIPTIONS[num-1];
  const CONTAINER_OF_IMAGES = document.getElementById('container-of-images'); 
  for (let y = 0; y <= 8; y++) {
    CONTAINER_OF_IMAGES.children[y].lastElementChild.src = x[y];  //images
    CONTAINER_OF_IMAGES.children[y].firstElementChild.firstElementChild.textContent = p[y] + ' $ +'; //prices
    CONTAINER_OF_IMAGES.children[y].firstElementChild.lastElementChild.textContent = d[y]; //small descriptions
  }
  return;
}
function changeNumber(x, y) {
  let third = document.getElementById('third');
  let second = document.getElementById('second');
  let first = document.getElementById('first');
  third.textContent = x + y;
  second.textContent = x +y - 1;
  first.textContent = x + y - 2;
}
function backgroundOfNum(y) {
  for (let x = 2; x <= 6; x++) {
    if (x != 5) {
      document.getElementById('numbers-of-images').children[x].style.cssText = 'background: white; color: #8c8c5a';
    }
  }
  document.getElementById('numbers-of-images').children[y].style.cssText = 'background: #d7d7c1; color: #f9cdad';
}
let x = 2;
function getNum(event) {
  if (event.target.nodeName == 'SPAN') {
    if (event.target.id == 'first') {
      dispalyImages(Number(event.target.textContent));
      x = 2;
      if (Number(event.target.textContent) != 1) {
        changeNumber(Number(event.target.textContent), 1);
        backgroundOfNum(x+1)
      }else { backgroundOfNum(x)}
      if (Number(event.target.textContent) == 1) {
        document.getElementById('first-dot').style.display = 'none';
      }
    }else if (event.target.id == 'second') {
      dispalyImages(Number(event.target.textContent))
      x = 3;
      backgroundOfNum(x)
    }else if (event.target.id == 'third') {
      dispalyImages(Number(event.target.textContent));
      x = 4;
      if (Number(event.target.textContent) == ALL_Images.length-2){
        document.getElementById('last-dot').style.display = 'none';
      }
      if (Number(event.target.textContent) < ALL_Images.length-1) {
        changeNumber(Number(event.target.textContent), 1);
        document.getElementById('first-dot').style.display = 'flex';
        backgroundOfNum(x-1)
        x = 3;
      }else {
        backgroundOfNum(x)
      }
    }else if (event.target.id == 'total') {
      dispalyImages(Number(event.target.textContent))
      x = 6;
      backgroundOfNum(x)
      changeNumber(ALL_Images.length-1, 0)
      document.getElementById('last-dot').style.display = 'none';
      document.getElementById('first-dot').style.display = 'flex';
    }else if (event.target.id == 'left-arrow') {
      if (x == 6) {
        x -= 2;
        document.getElementById('numbers-of-images').children[x].click();
        return
      }
      if (x > 2) {x--}
      document.getElementById('numbers-of-images').children[x].click();
      
    }else if (event.target.id == 'right-arrow' && document.getElementById('numbers-of-images').children[x].textContent != `${ALL_Images.length}`) {
      if (document.getElementById('numbers-of-images').children[x].textContent == `${ALL_Images.length-1}`) {x += 2}
      if (x < 4) {x++}
      document.getElementById('numbers-of-images').children[x].click();
    }
  }
}
NUMBERS_CONTAINER.addEventListener('click', getNum);

/*Add products to cart*/
let productAndPrice = [[],[],[],[]];
let numOfProduct = 0;

function addPro1(event) {
  if (event.target.id == 'price') {
    let y = event.target.parentNode.children;
    if (!productAndPrice[2].includes(y[2].src)) {
      document.getElementById('shopping').firstElementChild.style.opacity = '1';
      document.getElementById('shopping').firstElementChild.textContent = ++numOfProduct;
      document.getElementById('shopping').classList.add('sho');
      document.getElementById('shopping').addEventListener('animationend', () => {
      document.getElementById('shopping').classList.remove('sho'); });
      let p = y[0].textContent.split(' ');
      productAndPrice[0].push(p[0]);
      productAndPrice[3].push(p[0]);
      productAndPrice[1].push(y[2].src);
      productAndPrice[2].push(y[2].src);
    }else {
      document.getElementById('message').textContent = 'You have already added this item to your cart';
      document.getElementById('message').classList.add('sh');
      document.getElementById('message').addEventListener('animationend', () => {
      document.getElementById('message').classList.remove('sh'); });
    }
    
  }
}
document.getElementById('right-choose').addEventListener('click', addPro1)
//-----------------------------
function addPro2(event) {
  if (event.target.id == 'price') {
    
    if (!productAndPrice[2].includes(event.target.parentNode.parentNode.lastElementChild.src)) {
      document.getElementById('shopping').firstElementChild.style.opacity = '1';
      document.getElementById('shopping').firstElementChild.textContent = ++numOfProduct;
      document.getElementById('shopping').classList.add('sho');
      document.getElementById('shopping').addEventListener('animationend', () => {
      document.getElementById('shopping').classList.remove('sho'); });
      let p = event.target.textContent.split(' ');
      productAndPrice[0].push(p[0]);
      productAndPrice[3].push(p[0]);
      productAndPrice[1].push( event.target.parentNode.parentNode.lastElementChild.src);
      productAndPrice[2].push( event.target.parentNode.parentNode.lastElementChild.src);
    }else {
      document.getElementById('message').textContent = 'You have already added this item to your cart';
      document.getElementById('message').classList.add('sh');
      document.getElementById('message').addEventListener('animationend', () => {
      document.getElementById('message').classList.remove('sh'); });
    }
  }
}
document.getElementById('container-of-images').addEventListener('click', addPro2)

let numOfItemsDisplayed = 0;
function shopping() {
  const CONTAINER_OF_ITEMS = document.getElementById('items-left');
  const CONTAINER_OF_prices = document.getElementById('prices');

  if (productAndPrice[1].length == 0 && CONTAINER_OF_ITEMS.children.length == 0) {
    document.getElementById('message').textContent = "You haven't chosen any flowers yet";
    document.getElementById('message').classList.add('sh');
    document.getElementById('message').addEventListener('animationend', () => {
    document.getElementById('message').classList.remove('sh'); });
  }else {
    document.getElementById('shopping-basket').classList.add('open-basket');
    document.body.style.overflow = 'hidden';
    
    for (let x = 0; x <= productAndPrice[0].length-1; x++) { //sort item in left side and sort prices in right side
      let item = document.createElement('div');
      item.setAttribute('class','item')
      item.innerHTML = `<div class='num-of-item'>${numOfItemsDisplayed + 1}</div>
      <img src='${productAndPrice[1][x]}' alt='flowers'>`
      CONTAINER_OF_ITEMS.appendChild(item);

      let price = document.createElement('div');
      price.setAttribute('class','price-of-item');
      price.innerHTML =`<p>${numOfItemsDisplayed + 1}</p>
      <input type="number" min='1' value='1' onclick="calculatePrice(this)">
      <p>${productAndPrice[0][x]} $</p>`
      CONTAINER_OF_prices.appendChild(price);

      numOfItemsDisplayed += 1;
    }

    let n = productAndPrice[0].length;
    for (let y = 0; y <= n-1; y++) {
      productAndPrice[0].shift();
      productAndPrice[1].shift();
    }
  }
}
document.getElementById('shopping').addEventListener('click', shopping);
function closeBasket() {
  document.getElementById('shopping-basket').classList.remove('open-basket');
  document.body.style.overflow = 'visible';
}
let pr ; //To get the first value of the price
let it ;  // to get the item

document.getElementById('tot').addEventListener('click', () => {alert(productAndPrice[4])})
function rewrite() {
  if (Number(it.value) >= 1) {
    it.parentNode.lastElementChild.textContent = Number(it.value) * Number(pr) + ' $';
    it.style.background = 'white';
  }else {
    it.style.background = 'red';
    it.parentNode.lastElementChild.textContent = 0;
  }
}
function calculatePrice(x) { // on write
  let pricesR = x.parentNode.parentNode.children;
  let [...i] = pricesR;
  pr = productAndPrice[3][i.indexOf(x.parentNode)];
  it = x;
  x.addEventListener('input', rewrite);
}

let totalPriceOfItems = 0;
function totalPrice(x) {
  if (x.checked == true) {
    document.getElementById('buy').style.cssText = 'pointer-events: visible';
    let pri = document.getElementById('prices')
    for (let s = 0; s <= pri.children.length-1; s++) {
      totalPriceOfItems += Number(pri.children[s].lastElementChild.textContent.split(' ')[0])
    }
    document.getElementById('tot').textContent = totalPriceOfItems + ' $';
    pri.style.cssText = 'pointer-events: none';
  }
  else {
    document.getElementById('buy').style.cssText = 'pointer-events: none';
    document.getElementById('tot').textContent = '';
    document.getElementById('prices').style.cssText = 'pointer-events: visible';
    totalPriceOfItems = 0;
  }
  
}
/*comments of people */
let c = 0;
function displayComment(event) {
  if (event.target.nodeName == 'SPAN') {
    event.target.style.background = '#f9cdad';
    document.getElementById('arrow-comment').children[c].style.background = 'white';
    let num = Number(event.target.id[event.target.id.length-1]);
    document.getElementById('comment').children[c].style.cssText = 'visibility: hidden;opacity: 0;'
    document.getElementById('comment').children[num].style.cssText = 'visibility: visible;opacity: 1;'
    c = num;
  }
}
document.getElementById('arrow-comment').addEventListener('click', displayComment)
//alert(window.innerWidth)