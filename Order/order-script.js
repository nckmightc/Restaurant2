var foodItems = [];


function selectFoodItem (itemId) {
    var checkbox = document.getElementById(itemId);
    console.log(checkbox.checked)
    if(checkbox.checked) {
        foodItems.push(checkbox.value)
        console.log(foodItems)
        var list = document.createElement('ul');
        for (var i = 0; i < foodItems.length; i++) {
            var item = document.createElement('li');
            item.appendChild(document.createTextNode(foodItems[i]));
            list.appendChild(item);
            list.innerHTML = foodItems[i];
            document.body.appendChild(list);

        }
        return list;
        
    } else {
        var index = foodItems.indexOf(checkbox.value);
        foodItems.splice(index, 1);
        console.log(foodItems);
    }
}




// function makeUL(foodItems) {
//     // Create the list element:
//     var list = document.createElement('ul');

//     for (var i = 0; i < foodItems.length; i++) {
//         // Create the list item:
//         var item = document.createElement('li');

//         // Set its contents:
//         item.appendChild(document.createTextNode(foodItems[i]));

//         // Add it to the list:
//         list.appendChild(item);
//     }

//     // Finally, return the constructed list:
//     return list;
// }


// var totalPrice = [];


// var total = document.createElement("ul");
// total.innerHTML = "Total"
// document.body.appendChild(total);
// document.getElementById('total').appendChild(li);






