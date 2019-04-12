function postComment(){

  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);
  let commentsDiv = document.getElementById('comments');

  //execute template function with JSON object for the interpolated values
  let templateHTML += templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;

}



function createPost(){

  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageDiv = document.getElementById('page');
  pageDiv.innerHTML = pageTemplate;

  // add post to page
  let postTemplate = document.getElementById('post-template').innerHTML;
  let templateFn = _.template(postTemplate);
  let postsDiv = document.getElementById('post');

  let postTemplateHTML = templateFn({ title: title, body: body, author: author });
  postsDiv.innerHTML += postTemplateHTML;

  // add comments section
  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentsDiv = document.getElementById('sidebar');
  commentsDiv.innerHTML = commentsTemplate;

}
