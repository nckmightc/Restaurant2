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
        var item = document.getElementById('total');
        item[i].parentNode.removeChild(item[i]);
    }
}
