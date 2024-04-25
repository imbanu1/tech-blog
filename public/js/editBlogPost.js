const editPost = async (event) => {
    event.preventDefault();
    const comment_body = document.getElementById("editBtn").value.trim();
    const blogPost = window.location.pathname.split("/");
    document.location.assign(`/create/${blogPost[2]}`);
  };
  
  const editButton = document.querySelectorAll("#editBtn");
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener("click", editPost);
  }
  