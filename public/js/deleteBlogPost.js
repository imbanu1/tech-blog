const deletePostHandler = async (event) => {
    event.preventDefault();
    const blogPost = window.location.pathname.split("/");
    const response = await fetch(`/api/blogPost/${blogPost[2]}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.assign(`/dashboard`);
    } else {
      alert(response.statusText);
    }
  };
  
  const deleteButton = document.querySelectorAll("#deleteBtn");
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deletePostHandler);
  }
  