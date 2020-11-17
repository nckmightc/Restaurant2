var foodItems = [];


function selectFoodItem (itemId) {
    var checkbox = document.getElementById(itemId);
    var list = document.getElementById('total');
    console.log(checkbox.checked)
    if(checkbox.checked) {
        list.innerHTML = "";
        foodItems.push(checkbox.value)
        console.log(foodItems)
        // var list = document.createElement('ul');
        for (var i = 0; i < foodItems.length; i++) {
            var item = document.createElement('li');
            item.innerHTML = (foodItems[i]);
            console.log(item);
            list.appendChild(item);
            // list.innerHTML = foodItems[i];
            // document.body.appendChild(list);

        }
        return list;
        
    } else {
        list.innerHTML = "";
        var index = foodItems.indexOf(checkbox.value);
        foodItems.splice(index, 1);
        console.log(foodItems);
        for (var i = 0; i < foodItems.length; i++) {
            var item = document.createElement('li');
            item.innerHTML = (foodItems[i]);
            console.log(item);
            list.appendChild(item);
            // list.innerHTML = foodItems[i];
            // document.body.appendChild(list);
        }
        // item[i].parentNode.removeChild(item[i]);
        console.log(item)
    }
}

var total = []

function addTotal (classNames) {
    var checkbox = document.getElementsByClassName(classNames);
    if (checkbox.checked) {
        total.push(checkbox.itemClass);
        console.log(total);
    }
}


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}