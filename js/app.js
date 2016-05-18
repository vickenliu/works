var app=angular.module('portfolio',['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/projects/:id',{
		templateUrl:'views/show.html'
	}).when('/cv',{
		templateUrl:'views/cv.html'
	}).when('/projects',{
		templateUrl:'views/projects.html'
	}).when('/:type',{
		templateUrl:'views/projects.html'
	})
	.otherwise({redirectTo:'/projects'});
});

var projects=[{
	id:9,
	name:'On-fleek',
	info:'This was my final group project. It was completed in one week. I was the lead frond-end developer, and also worked on the backend. It was built with React+Redux.',
	link:'on-fleek.herokuapp.com',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1463269393/v0j5esvauswmm22gwyzf.png',
	type:'React+Redux+full-stack'
},{
	id:5,
	name:'Re-Reddit',
	info:'This was originally a group full-stack project by 3 people built over 2 days. I continued to work on it to the point where it is now. We used React+Redux, Facebook O-auth log-in, Node.js backend server, & a SQL database. It has all the features of reddit.',
	link:'re-reddit.herokuapp.com',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707580/reddit_znppoz.png',
	type:'React+Redux+full-stack'
},{
	id:8,
	name:'Meowtown',
	info:'This was a school challenge for server-side scripting. I added a database and used handle-bars with server redering to complete this project. It covers backend servers, databases, and server-side rendering.',
	link:'cat-city.herokuapp.com',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707560/cat_cbqfsq.png',
	type:'Node.js'
},{
	id:4,
	name:'Portfolio | App',
	info:'A one page app to showcase my portfolio. This project allowed me to play around with AJAX and a new design layout.',
	link:'www.vickenliu.com/test',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707606/test_qwzob4.png',
	type:'JQuery'
},{
	id:1,
	name:'EDA blogs',
	info:'Here is where my EDA study assignments go, including blogs and javascript apps. It records most of my reflections and learning experiences.',
	link:'vickenliu.github.io',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707600/eda_ozkjfq.png',
	type:'Javascript'
},{
	id:2,
	name:'Tongle Health Consulting Service Center',
	info:'I transfered an old style plain page to a modern, clean-design website. It is fully functional, has cross-browser compatibility, and is mobile friendly.',
	link:'www.tlgay.com',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707601/tl_yfubji.png',
	type:'Bootstrap'
},{
	id:6,
	name:'SHARE WITH ME',
	info:"I wanted others to be able to contact and share ideas with me. This app uses Ruby on Rails to build an app wherby people can communicate with me.",
	link:'share-with-me.herokuapp.com',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707574/rails_qqen0j.png',
	type:'Ruby on Rails'
},{
	id:7,
	name:'This is Me | App',
	info:'Portfolio of one page App developed with Angular Js.',
	link:'/',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707551/angular_dsppsv.png',
	type:'Angular'
}],
types=['personal','commercial'],
historys=[{
	year:'2016.1-2016.5',
	school:'Enspiral Dev Academy',
	active:'Full-stack Web Development',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_200/v1462787194/personal/dev.png'
},{
	year:'2015.10-present',
	school:'Code School',
	active:'Full-stack Development',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_200/v1462787190/personal/codeschool.png'
},{
	year:'2005.7-2009.6',
	school:'China Three Gorges University',
	active:'Engineering of Automation',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_200/v1462787191/personal/ctgu.png'
}];

app.controller('mainController', function($scope,$routeParams){
	$scope.types=types;
	$scope.routeParams=$routeParams;
	if($routeParams.type){
		$scope.projects=projects.filter(function(a){
			return a.type == $routeParams.type;
		});
	}else{
		$scope.projects=projects;
	}
});
app.directive('myName',function(){
	return{
		restrict:'E',
		scope: {
      		projects: '='
    	},
		templateUrl:'views/myName.html',
		link: function(){

		}
	};
});
app.controller('showController',function($scope,$routeParams){
	$scope.project=projects.filter(function(a){
		return a.id==$routeParams.id;
	})[0];
	$scope.console=function(){
		console.log($routeParams);
	};
});
app.controller('educationController',function($scope){
	$scope.historys=historys;
});
