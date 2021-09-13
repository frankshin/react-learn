import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './component/menu'
import routers from './routers'

import Style from './app.less'

export default class App extends Component {
  constructor (props) {
    super()
    this.state = {}
  }

  componentDidMount () {
    Style.use()
  }

  render () {
    return (
      <Router>
        <div className="container">
          <div className="left">
            <Menu />
          </div>
          <div className="right">
            <Switch>
              {
                routers.map((item, index) => {
                  const { path, component } = item
                  const Page = React.lazy(component)
                  return (
                    <Route
                      path={path}
                      key={index}
                      exact
                      render={
                        () => (
                          <Suspense fallback={<div>Loading...</div>}>
                            <Page />
                          </Suspense>
                        )
                      }
                    />
                  )
                })
              }
            </Switch>
          </div>
        </div>
      </Router>
    )
  }

  componentWillUnmount () {
    Style.unuse()
  }
}
