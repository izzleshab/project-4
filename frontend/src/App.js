import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import TurtleIndex from './components/turtles/TurtleIndex'
import TurtleShow from './components/turtles/TurtleShow'
import TurtleNew from './components/turtles/TurtleNew'
import TurtleEdit from './components/turtles/TurtleEdit'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import ProfilePage from './components/userprofile/ProfilePage'

class App extends React.Component {
  // async componentDidMount() {
  //   try {
  //     const response = await fetch('/api/turtles')
  //     const data = await response.json()
  //     console.log(data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/turtles/new" component={TurtleNew} />
          <Route path="/turtles/:id/edit" component={TurtleEdit} />
          <Route path="/turtles/:id" component={TurtleShow} />
          <Route path="/turtles" component={TurtleIndex} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
