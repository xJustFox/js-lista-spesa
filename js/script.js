const shoppingList = ["latte", "pane", "pasta","olio", "deodorante"];
let listContainer = document.getElementById("shopping-list");

let i = 0;

while (i < shoppingList.length) {
    const li = document.createElement("li");
    li.innerText = shoppingList[i];
    listContainer.appendChild(li);

    ++i;
}