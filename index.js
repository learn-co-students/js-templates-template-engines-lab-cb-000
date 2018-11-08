function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  let title = document.getElementById("postTitle").value;
  let body = document.getElementById("postBody").value;
  let author = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let post = postTemplate({'title': title, 'body': body, 'author': author});
  let postElement = document.getElementById("post");
  postElement.innerHTML = post;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsTemplate();
}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let commentText = document.getElementById("comment").value;
  let commenterName = document.getElementById("commenter").value;
  let commentsSection = document.getElementById("comments");

  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
