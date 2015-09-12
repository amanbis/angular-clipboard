(function() {
	var app = angular.module('clipboard', []);

	app.controller('MainController', function() {
		this.list = lists;
		this.newTitle = '';
		this.newTask = '';

		this.checklist = checklists;
		this.tab = 1;
		this.nList = newList;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};

		this.addList = function() {
			this.checklist.push(this.nList);
			this.selectTab(this.nList.id);
			console.log(this.checklist);
		};

		this.addTitle = function() {
			this.list.title = this.newTitle;
			this.list.active = true;
		};

		this.addTask = function(listObj) {
			/*this.list.count++;
			this.list.tasks['task' + this.list.count] = this.newTask;*/
			var item = this.newTask;
			listObj.tasks.push(item);
			this.newTask = '';
		};

		this.removeTask = function(task) {
			console.log(task);
		};
	});

	var lists = { 
		title: 'Hi',
		tasks: {},
		active: false,
		count: 0
	};

	var newList = { 
		id: 3,
		title: "Songs",
		tasks: [
			"Farewell and Into the Inevitable",
			"An End Once and For All",
			"Liara's Theme/Vigil"
		],
		active: false
	};

	var checklists = [
		{
			id: 1,
			title: "Videogames",
			tasks: [
				"Mass Effect",
				"Mass Effect 2",
				"Mass Effect 3"
			],
			active: false
		},
		{
			id: 2,
			title: "Books",
			tasks: [
				"The Count of Monte Cristo",
				"Never Let Me Go",
				"The Colorless Tsukuru Tazaki"
			],
			active: false
		}
	];

})();
