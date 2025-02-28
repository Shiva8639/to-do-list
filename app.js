const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task to the list
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    const listItem = document.createElement('li');
    
    // Create the task text element
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    listItem.appendChild(taskTextElement);
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });
    listItem.appendChild(deleteBtn);
    
    taskList.appendChild(listItem);
    taskInput.value = ''; // Clear input field
  }
});
