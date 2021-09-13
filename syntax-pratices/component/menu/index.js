
import React, { Component } from 'react'
import routers from '../../routers'
import { Link } from 'react-router-dom'

import Style from './index.less'
export default class MenuComponent extends Component {
  componentDidMount () {
    Style.use()
  }

  render () {
    return (
      <nav>
        <ul className="menu">
          {
            routers.map((item, index) => {
              const { title, path } = item
              return (
                <li key={index}>
                  <Link to={path}>{title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }

  componentWillUnmount () {
    Style.unuse()
  }
}
