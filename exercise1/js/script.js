// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) {
  // 1 - From the parent body : create a new div  (class : container)
  let div=document.createElement('div')
  div.className='container'
  let bodys=document.body.appendChild(div)
  // console.log(bodys);
  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for (let task of tasks){
    let divNew=document.createElement('div')
    divNew.className='item'
   
    divNew.textContent=task.description
    if (task.priority===1){
      divNew.style.backgroundColor='red'
    }
    else{
      divNew.style.backgroundColor='grey'
    }
  div.appendChild(divNew) 
  }
 console.log(div);
  // 3- The priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)

}

displayArray(tasks);
