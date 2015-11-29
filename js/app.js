(function() {
	var app = angular.module('clipboard', []);

	app.controller('MainController', ['$scope', function($scope) {
		/*this.list = lists;*/
		$scope.newTitle = '';
		$scope.newTask = '';
		$scope.taskID = 9;

		$scope.checklist = checklists;
		$scope.tempList = $scope.checklist[0];
		$scope.tempTaskList = [];
		$scope.tempTask = {};
		$scope.tab = 1;
		$scope.newList = {};

		$scope.taskView = false;
		$scope.navView = false;
		$scope.bg = true;

		$scope.theme = {
			bgImg: 'bamboo',
			bgColor: 'bamboo-color',
			inputBorder: 'bamboo-input',
			colorRGB: { light: 'rgb(142, 168, 134)', dark: 'rgb(119, 139, 113)'},
			colorRGBA: { light: 'rgba(142, 168, 134, 0.95)', dark: 'rgba(119, 139, 113, 0.95)'}
		};

		$scope.selectTab = function(list) {
			$scope.tempList = list;
			$scope.tab = list.id;
			$scope.taskView = true;
		};

		$scope.isSelected = function(checkTab) {
			return $scope.tab === checkTab;
		};

		$scope.addList = function() {
			$scope.newList = { 
				id: $scope.checklist.length + 1,
				title: $scope.newTitle,
				tasks: [],
				completed: [],
				active: true
			};

			/*this.newList.id = this.checklist.length + 1;*/
			$scope.checklist.push($scope.newList);
			$scope.selectTab($scope.newList);
			$scope.newTitle = "";
			console.log($scope.checklist);
		};

		$scope.editTitle = function() {
			$scope.newTitle = $scope.tempList.title;
		};

		$scope.updateTitle = function() {
			$scope.tempList.title = $scope.newTitle;
			$scope.newTitle = "";
		};

		$scope.deleteList = function() {
			$scope.taskView = false;
			var index = $scope.checklist.indexOf($scope.tempList);
			$scope.checklist.splice(index, 1);

			for(var i = index; i < $scope.checklist.length; i++) {
				var newID = $scope.checklist[i].id;
				$scope.checklist[i].id = newID - 1;
			}

			if ($scope.tab > $scope.checklist.length) {
				$scope.tab = $scope.tab - 1;
			}

			$scope.newTitle = "";
		};

		$scope.addTask = function() {
			/*this.list.count++;
			this.list.tasks['task' + this.list.count] = this.newTask;*/
			$scope.taskID++;
			var item = { id: $scope.taskID, description: $scope.newTask, active: true };
			$scope.tempList.tasks.push(item);
			$scope.newTask = '';
			console.log(item);
		};

		$scope.editTask = function(taskList, task) {
			$scope.tempTaskList = taskList;
			$scope.tempTask = task;
			$scope.newTask = task.description;
			/*this.selectTask.taskDesc[task.id] = task.description;
			task.active = false;*/
		};

		$scope.updateTask = function() {
			$scope.tempTask.description = $scope.newTask;
			$scope.newTask = '';
		};

		$scope.deleteTask = function() {
			var index = $scope.tempTaskList.indexOf($scope.tempTask);
			$scope.tempTaskList.splice(index, 1);
			$scope.newTask = '';
		};

		$scope.completeTask = function(task) {
			var index = $scope.tempList.tasks.indexOf(task);
			$scope.tempList.completed.push(task);
			$scope.tempList.tasks.splice(index, 1);
			console.log($scope.tempList.completed);
		};

		$scope.undoComplete = function(task) {
			var index = $scope.tempList.completed.indexOf(task);
			$scope.tempList.tasks.push(task);
			$scope.tempList.completed.splice(index, 1);
			console.log($scope.tempList.tasks);
		};

		$scope.reset = function() {
			$scope.newTitle = '';
			$scope.newTask = '';
		};

		$scope.setTheme = function(light, dark) {
			$scope.theme.bgColor = $scope.theme.bgImg + '-color';
			$scope.theme.inputBorder = $scope.theme.bgImg + '-input';
			$scope.theme.colorRGB.light = 'rgb(' + light + ')';
			$scope.theme.colorRGB.dark = 'rgb(' + dark + ')';
			$scope.theme.colorRGBA.light = 'rgba(' + light + ', 0.95)';
			$scope.theme.colorRGBA.dark = 'rgba(' + dark + ', 0.95)';
		};

		$scope.navToggle = function() {
			if($scope.navView) {
				$scope.navView = false;
			} else {
				$scope.navView = true;
			}
		}

		$scope.selectTask = {
			checked: {},
			taskDesc: {}
		};
	}]);

	/*var lists = { 
		title: 'Hi',
		tasks: {},
		active: false,
		count: 0
	};*/

	var checklists = [
		{
			id: 1,
			title: "Videogames",
			tasks: [
				{ id: 1, description: "Mass Effect", active: true },
				{ id: 2, description: "Mass Effect 2", active: true },
				{ id: 3, description: "Mass Effect 3", active: true }
			],
			completed: [],
			active: true
		},
		{
			id: 2,
			title: "Books",
			tasks: [
				{ id: 4, description: "The Count of Monte Cristo", active: true },
				{ id: 5, description: "Never Let Me Go", active: true },
				{ id: 6, description: "The Colorless Tsukuru Tazaki", active: true }
			],
			completed: [],
			active: true
		},
		{
			id: 3,
			title: "Songs",
			tasks: [
				{ id: 7, description: "Farewell and Into the Inevitable", active: true },
				{ id: 8, description: "An End Once and For All", active: true },
				{ id: 9, description: "Liara's Theme/Vigil", active: true }
			],
			completed: [],
			active: true
		}
	];

})();
