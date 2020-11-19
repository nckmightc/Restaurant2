var foodItems = [];

//This function creates items for the array above based on which checkbox is checked on the page. Those items are put into an unordered list with the 'total' class.
function selectFoodItem (itemId) {
    var checkbox = document.getElementById(itemId);
    var list = document.getElementById('total');
    console.log(checkbox.checked)
    if(checkbox.checked) {
        list.innerHTML = "";
        foodItems.push(checkbox.value)
        console.log(foodItems)
        for (var i = 0; i < foodItems.length; i++) {
            var item = document.createElement('li');
            item.innerHTML = (foodItems[i]);
            console.log(item);
            list.appendChild(item);
        }
        return list;
        //The else statement removes array items if their associated checkbox is unchecked. It also removes the list item from the html.
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
        }
        console.log(item)
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