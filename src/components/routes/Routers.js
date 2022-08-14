import React from 'react'
import { Route, Switch } from 'react-router'
import Header from '../layouts/Header'
import Home from '../layouts/Home'

export default function Routers() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </>
  )
}
