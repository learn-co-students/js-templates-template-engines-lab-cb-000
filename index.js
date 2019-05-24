function createPost() {
  let postHeader = document.getElementById('postHeader').value;
  let postContent = document.getElementById('postContent').value;
  let postFooter = document.getElementById('postFooter').value;

  let pageTemplate = document.getElementById('page-template').innerHTML;
  let postTemplate = document.getElementById('post-template').innerHTML;
  let commentsTemplate = document.getElementById('comments-template').innerHTML;

  let pageTmplateFn = _.template(pageTemplate);
  let postTmplateFn = _.template(postTemplate);
  let commentsTmplateFn = _.template(commentsTemplate);

  let commentsTmplateHTML = commentsTmplateFn();
  let postTmplateHTML = postTmplateFn({postHeader: postHeader, postContent: postContent, postFooter: postFooter});
  let pageTmplateHTML = pageTmplateFn({sidebar: '', post: postTmplateHTML});

  let main = document.querySelector('main');

  main.innerHTML += pageTmplateHTML;
  main.innerHTML += commentsTmplateHTML;

}

function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //let commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  //create template function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
