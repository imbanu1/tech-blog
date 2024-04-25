const deletePostHandler = async (event) => {
    event.preventDefault();
    const blogPostId = event.target.getAttribute("data-id");
  
    const response = await fetch(`/api/blogPost/${blogPostId}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.assign(`/dashboard`);
    } else {
      alert(response.statusText);
    }
  };
  
  const editBlogPost = async (event) => {
    event.preventDefault();
    const blogPostId = event.target.getAttribute("data-id");
    document.location.assign(`/create/${blogPostId}`);
  };
  
  const editButton = document.querySelectorAll("#editBtn");
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener("click", editBlogPost);
  }
  
  const deleteButton = document.querySelectorAll("#deleteBtn");
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deletePostHandler);
  }