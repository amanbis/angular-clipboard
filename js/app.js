(function() {
	var app = angular.module('clipboard', []);

	app.controller('MainController', function() {
		this.list = lists;
		this.newTitle = '';
		this.newTask = '';
		this.taskID = 9;

		this.checklist = checklists;
		this.tab = 1;
		this.newList = {};

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};

		this.addList = function() {
			this.newList = { 
				id: 0,
				title: "New List",
				tasks: [],
				completed: [],
				active: false
			};

			this.newList.id = this.checklist.length + 1;
			this.checklist.push(this.newList);
			this.selectTab(this.newList.id);
			console.log(this.checklist);
		};

		this.addTitle = function(listObj) {
			listObj.title = this.newTitle;
			listObj.active = true;
			this.newTitle = "";
		};

		this.editTitle = function(listObj) {
			this.newTitle = listObj.title;
			listObj.active = false;
		};

		this.removeList = function(list) {
			var index = this.checklist.indexOf(list);
			this.checklist.splice(index, 1);

			for(var i = index; i < this.checklist.length; i++) {
				var newID = this.checklist[i].id;
				this.checklist[i].id = newID - 1;
			}

			if (this.tab > this.checklist.length) {
				this.tab = this.tab - 1;
			}
		};

		this.addTask = function(listObj) {
			/*this.list.count++;
			this.list.tasks['task' + this.list.count] = this.newTask;*/
			this.taskID++;
			var item = { id: this.taskID, description: this.newTask };
			listObj.tasks.push(item);
			this.newTask = '';
		};

		this.removeTask = function(list, task) {
			var index = list.tasks.indexOf(task);
			list.tasks.splice(index, 1);
		};

		this.completeTask = function(list, task) {
			var index = list.tasks.indexOf(task);
			list.completed.push(task);
			list.tasks.splice(index, 1);
			console.log(list.completed);
		};

		this.undoComplete = function(list, complete) {
			var index = list.completed.indexOf(complete);
			list.tasks.push(complete);
			list.completed.splice(index, 1);
			console.log(list.tasks);
		};

		this.selectTask = {
			checked: {}
		};
	});

	var lists = { 
		title: 'Hi',
		tasks: {},
		active: false,
		count: 0
	};

	var checklists = [
		{
			id: 1,
			title: "Videogames",
			tasks: [
				{ id: 1, description: "Mass Effect" },
				{ id: 2, description: "Mass Effect 2" },
				{ id: 3, description: "Mass Effect 3"}
			],
			completed: [],
			active: true
		},
		{
			id: 2,
			title: "Books",
			tasks: [
				{ id: 4, description: "The Count of Monte Cristo" },
				{ id: 5, description: "Never Let Me Go" },
				{ id: 6, description: "The Colorless Tsukuru Tazaki"}
			],
			completed: [],
			active: true
		},
		{
			id: 3,
			title: "Songs",
			tasks: [
				{ id: 7, description: "Farewell and Into the Inevitable" },
				{ id: 8, description: "An End Once and For All" },
				{ id: 9, description: "Liara's Theme/Vigil" }
			],
			completed: [],
			active: true
		}
	];

})();
