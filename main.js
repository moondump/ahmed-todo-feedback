// creates the inputItem then focuses it
var inputItem = document.getElementById("inputItem");
inputItem.focus();

// adds inputs to the list
function addItem(input) {
    var inputItem = this.inputItem;
    var list = document.getElementById('list');
    var listItem = document.createElement("li");

    // sets up the delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });

    // sets up the check box
    var checkBox = document.createElement("input");
    checkBox.id = "check";
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function() {
        labelText.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
    });

    // sets up the label
    var label = document.createElement("label");
    var labelText = document.createElement("span");
    labelText.innerText = input.value;

    // moves checkBox and labelText into label
    label.appendChild(checkBox);
    label.appendChild(labelText);

    // put the label and the delete button into the list item
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    // moves the listItem into list then
    // focuses and selects input and returns false
    list.appendChild(listItem);

    inputItem.value = '';
    inputItem.focus();
    return false;
}
let taskForm = document.getElementById('task-form');
taskForm.addEventListener("submit", function(ev) {
  ev.preventDefault();

  console.log('input item', this.inputItem);
  addItem(this.inputItem);
})