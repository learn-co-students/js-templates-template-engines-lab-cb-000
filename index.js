function createPost() {

  // set variables for post with values from form
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  // create template functions from x-lodash-template script tags
  let pageTemplateFn = _.template(document.getElementById('page-template').innerHTML);
  let postTemplateFn = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplateFn = _.template(document.getElementById('comments-template').innerHTML);

  // insert page template into [first] 'main' element by invoking pageTemplateFn (?)
  document.getElementsByTagName('main')[0].innerHTML += pageTemplateFn();

  // load post variables into post template by invoking postTemplateFn, store in postContents variable
  let postHTML = postTemplateFn({title: title, body: body, author: author});
  
  // load comments template (comments container and form) into commentsHTML variable by invoking template function
  let commentsHTML = commentsTemplateFn();
  
  // grab post element to be filled later by above invocation of postTemplateFn
  let post = document.getElementById('post');
  
  // the line above and the line below could be refactored to remove the post variable middleman? postHTML is a middleman, too.

  // fill post element with result of postContents
  post.innerHTML = postHTML;
  
  // insert comments template into [first] footer
  post.getElementsByTagName('footer')[0].innerHTML += commentsHTML;

}

function postComment() {
  // set variables for comment with values from form
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  // create template function from x-lodash-template script tag
  let commentTemplateFn = _.template(document.getElementById('comment-template').innerHTML);

  // grab comments container from DOM
  let commentsDiv = document.getElementById('comments');

  // invoke template function with JSON to fill interpolated values
  let commentHTML = commentTemplateFn({ comment: comment, commenter: commenter});

  // insert the new comment HTML into the #comments div
  commentsDiv.innerHTML += commentHTML;

}
