import React from 'react';
import { Link } from 'react-router'

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>

        {
          {/* this allows us the get props from parent components down to children components*/},
         React.cloneElement(this.props.children, this.props)
        }
      </div>
    )
  }
})

export default Main;
