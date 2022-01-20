// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayArray(array) {
  //1- You have to delete the old node parent were is stored the items of your list
  let containers = document.querySelectorAll(".container");
  if (containers.length > 1) {
    containers[1].remove();
  }

  // 2-Create a new container that will contain the items in your list
  let divC=document.createElement('div')
  divC.className='container'
  document.body.appendChild(divC)
  // 3 - For all tasks,  create a new div (class : item), and append it the container
  for (let task of array){
     let divI=document.createElement('div')
    divI.className='item'
    divI.textContent=task.description
    console.log(divI);
    divC.appendChild(divI)
  
 
  // 3.1 the priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
    if (task.priority==='Low'){
      task.priority=0
    }
    else if (task.priority==='Hight'){
      task.priority=1 
    }
  if (task.priority==1){
      divI.style.backgroundColor='red'
    }
  else if(task.priority==0){
      divI.style.backgroundColor='grey'
    
    }
  }
}

function addItem() {
  // 1- Create a new task
 let  task={}
  //  2- Set the description from the text field
  let description=document.getElementById('description').value

  // 3- Set the priority fro from select field
  let priority=document.getElementById('priority').value

  // 4- Add the new object to the array
  task.description=description
  task.priority=priority
  tasks.push(task)
  console.log(tasks);

  // 5- Call  the displayArray function to refresh the DOM

  displayArray(tasks);
 
}
 
// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
