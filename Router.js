import React, { Component } from 'react';
import {
	createSwitchNavigator,
	createAppContainer,
}  from 'react-navigation';

import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import BilgilerErkek from './pages/BilgilerErkek';
import BilgilerKadın from './pages/BilgilerKadın';
import Profile from './pages/Profile';
import Cinsiyet from './pages/Cinsiyet';
import Aktiflik from './pages/Aktiflik';



const AppSwitchNavigator = createSwitchNavigator(

            {
             SignUp:{
             	screen:SignUp
             },
             Welcome:{
                   screen:Welcome
             },
             BilgilerErkek:{
                 screen:BilgilerErkek
             },
             Aktiflik:{
                  screen:Aktiflik
             },
              BilgilerKadın:{
                 screen:BilgilerKadın
             },
            Profile:{
                 screen:Profile
            },
            Cinsiyet:{
                  screen:Cinsiyet
            },  
           Login:{
            	screen:Login
            }
           },
            {
               initalRootName:'Welcome'
            }

	);

export default createAppContainer(AppSwitchNavigator);