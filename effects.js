$(document).ready(function() {
  function addNewItem(list, itemInput) {
    var listItem = document.createElement('li');
    listItem.innerText = itemInput;
    list.appendChild(listItem);
  }

  $('.buttonAdd').focus();

  $('.buttonAdd').click(function() {
    var itemInput = $('#input');
    console.log(itemInput);
    addNewItem(document.getElementById('checklist'), itemInput.val());
    itemInput.val('');
  });

  $('#input').keypress(function(e) {
    if(e.which == 13) {
      $('.buttonAdd').click();
    }
  });

});
