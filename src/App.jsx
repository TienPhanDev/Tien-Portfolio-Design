/* eslint-disable no-unused-vars */
import React from 'react'
import GridLayout from './GridLayout'
import AppBar from './AppBar'
import WithNavigation from './WithNavigation'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DrawerTypes from './DrawerTypes'
import AppBarInteraction from './AppBarInteraction'


function App() {
  return (
    <Router>
      <div>
        <AppBarInteraction/>
        {/* <WithNavigation />
        <DrawerTypes/> */}
        <GridLayout />
      </div>
    </Router>
  );
}

export default App

