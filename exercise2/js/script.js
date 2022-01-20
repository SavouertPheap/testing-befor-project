// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  // TODO
  var task={}
  //  2- Set the description from the text field
  // TODO
  let description=document.getElementById('description').value;
  // console.log(description);
  task['description']=description
  
  
  
  // 3- Set the priority from select field
  // TODO
  let priority=document.getElementById('priority').value
  task['priority']=priority
  // console.log(priority);
  tasks.push(task)



  for (let task of tasks){
    if (task.priority==='Low'){
    task['priority']=0
    }else if (task.priority==='Hight'){
    task['priority']=1
    }
  }
  // 4- Add the new object to the array
  // TODO
  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
