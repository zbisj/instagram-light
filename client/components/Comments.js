 import React from 'react';

 const Comments = React.createClass({
   
   renderComment(comment, i ){
     return (
       <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
        </p>
       </div>
     )
   },

    handleSubmit(e){
     e.preventDefault();
     const {postId} = this.props.params;
     const author = this.refs.author.value
     const comment = this.refs.comment.value

     this.props.addComment(postId, author, comment);
     this.refs.commentForm.reset();

    },

  render () {

    return (
      <div className="co mment">

        { this.props.postComments.map(this.renderComment)}

        <form ref="commentForm" className="comment-form" onSubmit={ this.handleSubmit }>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>

      </div>
    )
  }

 })

 export default Comments;
