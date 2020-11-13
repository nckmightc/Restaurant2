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