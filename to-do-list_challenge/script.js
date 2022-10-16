const onSubmit = (event) => {
  event.preventDefault();
  document.getElementById('to-do');
  const { input } = event.target;

  list_group.innerHTML += `
  
    <li id="list-item" class="border">
    <span >
       ${input.value} 
    </span>  
    
      <button id="remove" 
      class="btn btn-info btn-del" 
      onClick="deleteList(event)">
        Remove 
      </button>
    </li>
  
  `;
};

addEventListener('submit', onSubmit);

function deleteList(event) {
  event.preventDefault();
  let list = event.target.parentNode;
  list_group.removeChild(list);
}

// function deleteList() {
//   const list_element = document.getElementById('list-item');
//   list_element.removeChild(li);
// }
