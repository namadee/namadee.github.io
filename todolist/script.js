'use strict';

//adding close btn to list items
const taskList = document.querySelector('ul');
let tasks = document.querySelectorAll('li');
for (var i = 0; i < tasks.length; i++) {
	let close = document.createElement('p');
	close.className = 'close'
	close.textContent = "-"
	tasks[i].appendChild(close);
}
//removing item on click
let closeBtns = document.querySelectorAll('.close')
for (let i = 0; i < closeBtns.length; i++) {
	closeBtns[i].addEventListener('click', function(){
		const parent = closeBtns[i].parentElement;
		parent.style.display = 'none';

	})

}

// adding new input on click
const addBtn = document.querySelector('.add');
addBtn.addEventListener('click',function(){
	let newTask = document.createElement('li');
	let newInput = document.createElement('input');
	let newCheckBox = document.createElement('input')
	newCheckBox.setAttribute("type", "checkbox");
	newCheckBox.className = 'checkbox';
	newInput.className = 'taskname'
	newInput.placeholder = "Title..."
	newTask.appendChild(newInput);
	newTask.appendChild(newCheckBox);
	taskList.appendChild(newTask);
	newTask.style.marginLeft = '2rem'

	let close = document.createElement('p');
	close.className = 'close'
	close.textContent = "-"
	newTask.appendChild(close);
	close.addEventListener('click',function(){
		const parent = close.parentElement;
		parent.style.display = 'none';
	})
})

const buttons = document.querySelectorAll('.button')
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(){
		this.classList.toggle('button-clicked');
})
}

