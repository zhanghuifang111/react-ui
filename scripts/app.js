require('../css/common.css');
require('../css/header.css');
require('../css/body.css');
require('../css/console1412.css');
require('../css/font-awesome.css');
require('../css/rkactui.scss');

import React from 'react';
import { render } from 'react-dom';
import {Router,Route,useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

const appHistory  = useRouterHistory(createHashHistory)({queryKey:false});

const rootRoute ={
	component:'div',
	childRoutes:[
		{
			path:'/',
			component:require('./RootPage.js'),
			childRoutes:[
				{
					path:'/datePicker',
					component:require('./pages/DatePicker.js')
				},
				{
					path:'/table',
					component:require('./pages/Table.js')
				},
				{
					path:'/tab',
					component:require('./pages/Tab.js')
				},
				{
					path:'/editor',
					component:require('./pages/Editor.js')
				},
				{
					path:'/progressBar',
					component:require('./pages/ProgressBar.js')
				},
				{
					path:'/star',
					component:require('./pages/Star.js')
				},
				{
					path:'/searchBar',
					component:require('./pages/SearchBar.js')
				},
				{
					path:'/pagination',
					component:require('./pages/Pagination.js')
				},
				{
					path:'/button',
					component:require('./pages/Button.js')
				},
				{
					path:'/modal',
					component:require('./pages/Modal.js')
				},
				{
					path:'/annulusChart',
					component:require('./pages/AnnulusChart.js')
				},
				{
					path:'/icon',
					component:require('./pages/Icon.js')
				}
			]
		}
	]
}

render(
	<Router history={appHistory} routes={rootRoute}/>,
	document.getElementById('app')
);