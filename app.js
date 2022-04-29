let input_value = document.getElementById('task')
let ul = document.querySelector('ul.collection')
document.getElementById('submit_btn').addEventListener('click',  add_task)
/*
  This function add task to the list by creating new li and
  a tag by appending it to ul element and then call add_Local_storage() function
  in line 19
*/
function add_task(e) {
    if(input_value.value !== ""){
    const li = document.createElement('li')
    li.className = 'collection-item'
    li.textContent = input_value.value
    const a = document.createElement('a')
    a.className = 'delete-item secondary-content'
    a.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(a)
    ul.appendChild(li)
    add_Local_storage()
    input_value.value = ""
    }else{
        alert("empty")
    }
    e.preventDefault()
}

  document.body.addEventListener('click', delBtn);
    function delBtn(e) {
        /*
        This remove's  li under ul
        */
        if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove()

        /*
         This function loop's through the local storage array and check for the one
         thats matches item and then delete's it and set the new array to the
         local storage
        */
        let item = e.target.parentElement.parentElement.textContent
        let taskss = JSON.parse(localStorage.getItem('tasks'));
        function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
        arr.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(arr))
        }
        return arr;
    }
        console.log(removeItemOnce(taskss,item))
        localStorage.setItem('tasks', JSON.stringify(arr))
        
}        
    
        e.preventdefault()
    }

/*
 This function add task to the local storage array and then called

*/
 function add_Local_storage(){
    let task_bucket;
    let input_value = document.getElementById('task').value
         if(localStorage.getItem('tasks') === null){
             task_bucket = []
         }else{
             task_bucket = JSON.parse(localStorage.getItem('tasks'));
         }
         task_bucket.push(input_value)
         localStorage.setItem('tasks', JSON.stringify(task_bucket))
 
     const tasks = JSON.parse(localStorage.getItem('tasks'))
}

/*
 This function delete's/clear all data's  from the local storage
*/
 let clearTask = document.querySelector(".clear-tasks").addEventListener('click', clrTask)
 function clrTask(e) {
    ul = document.querySelector('ul.collection')
    let ull = ul.children
    ull = Array.from(ull)
    ull.forEach(ulll => {
        ulll.remove()
    });
    localStorage.clear()
     e.preventDefault() 
 }

 /*
 This function loop's through ul children and check's if it matches with the input value
 and if it does that it set the li style to display and if it does not it set it to none
 */
let filter = document.getElementById('filter')
filter.addEventListener('keyup', runEvent)
function runEvent(e) {
    ul = document.querySelector('ul.collection')
    let ull = ul.children
    ull = Array.from(ull)
    ull.forEach(ulll => {
        if (ulll.textContent.indexOf(filter.value) != -1) {
            ulll.style.display = 'block'
        } else {
            ulll.style.display = 'none' 
        }
    });
    e.preventDefault()
}

/*
  This function pulls data's from the local storage and display's on the ul instantly
*/
function pull_local_storage() {
    let taskss =JSON.parse(localStorage.getItem('tasks'));
         taskss.forEach(tas => {
            let ul = document.querySelector('ul.collection')
            const li = document.createElement('li')
            li.className = 'collection-item'
            li.textContent = tas
            const a = document.createElement('a')
            a.className = 'delete-item secondary-content'
            a.innerHTML = '<i class="fa fa-remove"></i>'
            li.appendChild(a)
            ul.appendChild(li)
        });      
}
pull_local_storage()



 
