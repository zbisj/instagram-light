// increament
export function increament(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// add comments

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
} 
