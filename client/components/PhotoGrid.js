import React from 'react';
import { Link } from 'react-router'
import Photo from './Photo'
const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        { this.props.posts.map((post, i) => <Photo key={i} {...this.props} i={i} post={post}/>  )}
      </div>
    )
  }
})

export default PhotoGrid;
