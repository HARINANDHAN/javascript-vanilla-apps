var todoList = {
	todos: [],
	addToDo: function(todoText) {		
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		for (var i = 0; i < this.todos.length; i++) {
			this.todos[i].position = i;
		}
		view.displayToDos();
	},
	changeToDo: function(position, updatedText) {
		if (position === undefined) return null;
		this.todos[position].todoText = updatedText;
		this.displayToDos();
	},
	deleteToDo: function(position) {		
		this.todos.splice(position, 1);
		this.displayToDos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;				
		view.displayToDos();
	},
	toggleAll: function() {		
		var isEverythingTrue = true;
		for (var i = 0; i < this.todos.length; i++) {
			if (this.todos[i].completed === false) {
				isEverythingTrue = false;
			}
		}		
		for (var j = 0; j < this.todos.length; j++) {
			if (isEverythingTrue) {			
				this.toggleCompleted(j);
			} else {			
				this.todos[j].completed = true;				
			}
		}
		view.displayToDos(); 
	}
};

var handlers = {
	displayToDos: function() {
  	view.displayToDos();		
	},	
	addToDo: function() {
		var inputText = $('.addToDoTextInput');
		todoList.addToDo(inputText.val());
		inputText.val("");
	},
	changeToDo: function() {
		var inputText = $('.editToDoTextInput');
		var position = 0;
		if (inputText.val().length > 0) {
			todoList.changeToDo(position, inputText.val());			
		}	else {
			console.log("There's nothing to edit son!");
		}
		inputText.val("");
	},
	deleteToDo: function() {
		var inputText = $('.deleteToDoTextInput');
		var position = 0;
		todoList.deleteToDo(position, inputText.val())
		inputText.val("");
	},
	toggleCompleted: function(position) {
		var todo = todoList.todos[position];
		todo.completed = !todo.completed;					
		view.displayToDos();
		view.toggleCompleted(todo);	
	},
	toggleAll: function() {	
		$('.fa-toggle-off').toggleClass('fa-toggle-on');
		todoList.toggleAll();				
	}
};

var view = {
	displayToDos: function() {
		$('.todolist').empty();
		for (var i = 0; i < todoList.todos.length; i++) {
			var todo = todoList.todos[i];
			var position = todo.position;			
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				// try to toggle the class fa-circle-o to fa-circle here				
				todoTextWithCompletion = '<s class="strikethrough">' + todo.todoText + '</s>';
			} else {								
				todoTextWithCompletion = todo.todoText;
			}

			$('.todolist').append(`<li class="list-group-item">
				<i class="fa fa-circle-o toggleCompleted" onclick="handlers.toggleCompleted(${position})"></i>				
				${todoTextWithCompletion}
				<button class="btn btn-success" onclick="handlers.changeToDo()">Edit</button>
				<button class="btn btn-success" onclick="handlers.deleteToDo()">Delete</button>
				</li>`);	

		}
	},
	toggleCompleted: function(todo) {
			if (todo.completed === true) {
				$('.fa-circle-o', this).toggleClass('fa-circle');
			} else {
				$('.fa-circle').toggleClass('fa-circle-o');
			}
	}
}
