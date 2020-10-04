/* eslint-disable no-unused-vars */
import React from 'react'
import GridLayout from './GridLayout'
import AppBar from './HOC/AppBar'
import WithNavigation from './HOC/WithNavigation'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import DrawerTypes from './HOC/DrawerTypes'
import AppBarInteraction from './HOC/AppBarInteraction'
import Header from './Header'
import Footer from './Footer'
import HeroContainer from './HeroContainer'

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          {/* <HeroContainer/> */}
          {/* <AppBarInteraction/> */}
          {/* <WithNavigation />
          <DrawerTypes/>
          <GridLayout /> */}
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App

