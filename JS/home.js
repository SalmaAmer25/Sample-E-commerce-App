const urlProducts = "https://afternoon-falls-30227.herokuapp.com/api/v1/products/";
var imgsArr = document.querySelectorAll(".slider-container img");

counter = 0;

function next() {
  if (counter == imgsArr.length - 1) {
    counter = 0;
    slide(counter);
  } else {
    counter++;
    slide(counter);
  }
}
function perv() {
  if (counter == imgsArr.length - imgsArr.length) {
    counter = 2;
    slide(counter);
  } else {
    counter--;
    slide(counter);
  }
}

function slide(indexx) {
  for (var i = 0; i < imgsArr.length; i++) {
    imgsArr[i].className = "disactive";
  }
  imgsArr[indexx].className = "active";
}


const mainContainer = document.querySelector("#products .container");

let getId={id:""};

const xhr = new XMLHttpRequest();
xhr.open("GET",urlProducts);
xhr.send();
xhr.onload = ()=>{
  if(xhr.status === 200){
    for(const item of JSON.parse(xhr.response).data){
      const productBox = document.createElement("div");
      productBox.classList.add("product-box");
      const productHead = document.createElement("div");
      productHead.classList.add("product-head");
      productHead.id = item.ProductId;
      productBox.appendChild(productHead)
      const title = document.createElement("h2");
      title.textContent = item.Name
      productHead.appendChild(title)
      const image = document.createElement("img");
      image.src= item.ProductPicUrl;
      productHead.appendChild(image);
      productHead.addEventListener("click",()=>{
        getId.id=productHead.id;
        location.href = `product.html?${productHead.id}`
      })

      const productBottom = document.createElement("div");
      productBottom.classList.add("product-bottom");
      productBox.appendChild(productBottom);
      const productPrice = document.createElement("p");
      productPrice.textContent = `${item.CurrencyCode} ${item.Price}`;
      productBottom.appendChild(productPrice);
      const addToCartImg = document.createElement("img");
      addToCartImg.src = "../images/carts.svg";
      addToCartImg.classList.add("add-to-card");
      productBottom.appendChild(addToCartImg);
      mainContainer.appendChild(productBox);
    }
  }else{
    document.body.innerHTML="Something wrong now, try again later";
  }
}


divs = document.getElementsByClassName("card");
      divsArray = Array.from(divs);
      console.log(divsArray[0]);

      tabsArray.forEach(function (ele) {
        ele.addEventListener("click", function (e) {
          tabsArray.forEach(function (elee) {
            elee.classList.remove("active");
          });
          e.target.classList.add("active");

          divsArray.forEach(function (div) {
            div.style.display = "none";
          });
          console.log(document.querySelectorAll(e.target.dataset.cont));

          document
            .querySelectorAll(e.target.dataset.cont)
            .forEach(function (el) {
              el.style.display = "flex";
            });
        });
      });

