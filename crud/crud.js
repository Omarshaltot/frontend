var price = document.getElementById("floatingPrice");
var description = document.getElementById("floatingDescription");
var category = document.getElementById("floatingCategory");
var name1 = document.getElementById("floatingName");
var productlist = [];



function save() {
  var product = {
    name: name1.value,
    category: category.value,
    description: description.value,
    price: price.value,
  };

  clear();
  display();

  productlist.push(product);
  console.log(productlist);
}
function clear() {
  document.getElementById("floatingName").value = "";
  document.getElementById("floatingCategory").value = "";
  document.getElementById("floatingDescription").value = "";
  document.getElementById("floatingPrice").value = "";
}

function display() {
   var cartoona=''

   for(var i=0;i<productlist.length;i++){
   cartoona += `
   <div class="row w-25">
           <div class="card">
             <div class="card-img-top">
               <img src="download (1).jpg" alt="product image" />
             </div>
             <div class="card-body">
               <h4>Product Name :<span>`+productlist[i].name+`</span></h4>
               <p>Product Price :<span>`+productlist[i].price+`</span></p>
               <p>Product Category :<span>m`+productlist[i].category+`</span></p>
               <p>
                 Product Description :<span
                   >`+productlist[i].description+`</span
                 >
               </p>
             </div>
           </div>
         </div>
   
   
               `;
    rowData.innerHTML = cartoona;

}

}
