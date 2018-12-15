
function createPost() {
  // template functions
  const pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  const postTemplate = _.template(document.getElementById('post-template').innerHTML);
  const commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  // get blog post form data
  const postTitle = document.getElementById('post-title').value;
  const postAuthor = document.getElementById('post-author').value;
  const postBody = document.getElementById('post-body').value;

  // add page template
  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

  // add blog post
  const post = postTemplate({'title': postTitle, 'post': postBody, 'author': postAuthor});
  const blogPost = document.getElementById('post');
  blogPost.innerHTML = post;

  // add comment section
  blogPost.getElementsByTagName('footer')[0].innerHTML += commentsTemplate();
}



function postComment() {
  const commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  const commentPost = document.getElementById('comment-post').innerHTML;
  const commentAuthor = document.getElementById('comment-author').innerHTML;

  document.getElementById('comments').innerHTML += commentTemplate({'commentPost': commentPost, 'commentAuthor': commentAuthor});
}
