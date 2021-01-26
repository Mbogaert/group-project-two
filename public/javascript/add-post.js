async function newFormHandler(event) {
    event.preventDefault();

    const dog_name = document.querySelector('#dog-name').value.trim();
    const energy = document.querySelector('input[name="dog-energy"]').value;
    const vaccine = document.querySelector('input[name="dog-vacc"]').value;
    const human_interaction = document.querySelector('input[name="interaction"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        dog_name,
        breed,
        energy,
        vaccine,
        human_interaction,
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/results');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);