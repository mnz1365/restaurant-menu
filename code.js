var foods = [{name: 'hamberger', price: 10}, {name: 'fish fries', price: 13}, {name: 'sunday eggs', price: 6}, {name: 'coffee', price: 4}]
var orderList = [];
var firstActive = false;
var totalPrice = 0;

//menu list
for(i=0;i<foods.length;i++) {
    //input checkbox
    var myCheck = document.createElement('input');
    myCheck.setAttribute("type", "checkbox");
    myCheck.setAttribute("id", `${foods[i].name}`);
    document.getElementById('main').appendChild(myCheck);
    //checkbox label
    var myLabel = document.createElement('label');
    myLabel.innerHTML = `${foods[i].name},  price: ${foods[i].price}`;
    document.getElementById('main').appendChild(myLabel);
    //br tag
    var br = document.createElement('br');
    document.getElementById('main').appendChild(br);
    
}

//button

function myOrders() {

    for(i=0;i<foods.length;i++) {
        let eachItem = document.getElementById(`${foods[i].name}`);
        if(eachItem.checked == true) {
            orderList.push(foods[i].name);
            totalPrice = totalPrice + foods[i].price;
        }
    }
    
    console.log(orderList);
    if(totalPrice > 0) {
        //remove all the child of main div
   let length  = document.getElementById('main').children.length;
   for(i=0;i<length;i++) {
    
               document.getElementById('main').removeChild(document.getElementById('main').children[0]);
           
   }

     //main div
     var myh2 = document.createElement('h2');
     myh2.innerHTML = 'your orders';
     document.getElementById("main2").appendChild(myh2);
     //br tag
     var br = document.createElement('br');
     document.getElementById("main2").appendChild(br);
 
     //orders
     for(i=0;i<orderList.length;i++) {
         var para = document.createElement('p');
         para.innerHTML = orderList[i];
         document.getElementById('main2').appendChild(para);
         //br tag
         var br = document.createElement('br');
         document.getElementById("main2").appendChild(br);
 
     }

     var para = document.createElement('p');
         para.innerHTML = `total price is : ${totalPrice}`;
         document.getElementById('main2').appendChild(para);

     document.getElementById("mybutton").style.display = "none";
    }
    else{
        alert("please choose form menu!")
    }
    
}

