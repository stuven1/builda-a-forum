import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation">
        <ul className="list">
          <li className="link-admin">
            <Link to="/admin">
              Admin
            </Link>
          </li>
          <li className="link-admin">
            <Link to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
