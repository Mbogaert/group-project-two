async function newFormHandler(event) {
  event.preventDefault();

  const dog_name = document.querySelector('#dog-name').value.trim();
  const breed = document.querySelector('#dog-breed').value.trim();
  let energy = document.querySelectorAll('input[name="dog-energy"]');
  if (document.getElementById('high-energy').checked) {
    energy = document.getElementById('high-energy').value;
  } else if (document.getElementById('in-between').checked) {
    energy = document.getElementById('in-between').value;
  } else if (document.getElementById('mellow').checked) {
    energy = document.getElementById('mellow').value; } 
  const vaccine = document.querySelectorAll('input[name="dog-vacc"]').value;
  const human_interaction = document.querySelectorAll('input[name="interaction"]').value;
  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="post-content"]').value;

  const response = await fetch(`/api/posts`, energy, {
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
    // document.location.replace('/dashboard/results');
    console.log(dog_name, energy, energyChecked);
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);