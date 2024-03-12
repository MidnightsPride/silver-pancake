const editFormHandler = async function(event) {
    event.preventDefault();

    const titleEl = document.getElementById('post-title');
    const bodyEl = document.getElementById('post-body');
    const postId = document.getElementById('post-id')

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id,
          title,
          content
        }),
        headers: {'Content-Type': 'application/json'}
      })
      .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);