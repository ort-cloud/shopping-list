function addItemHandler() {
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    let addItem = $("#js-shopping-list-form").find('input').val();
    $('.shopping-list').append(`
    <li>
      <span class="shopping-item">${addItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
    $('#shopping-list-entry').val('')
  });
};

function checkButtonHandler(){
  $('.shopping-list').on('click', '.shopping-item-toggle',function(event){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
};

function deleteItemsHandler(){
  $('.shopping-list').on('click','.shopping-item-delete',function(event){
    $(this).closest('li').remove();
  })
}

function shoppingList(){
  addItemHandler();
  checkButtonHandler();
  deleteItemsHandler();
};

$(shoppingList());