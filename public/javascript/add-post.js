async function newFormHandler(event) {
  event.preventDefault();
  
  const dog_name = document.querySelector('#dog-name').value.trim();
  const breed = document.querySelector('#dog-breed').value.trim();
  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="post-content"]').value;
  
  const allEnergy = document.querySelectorAll('input[name="dog-energy"]');
  let energy;
    for (const rb of allEnergy) {
      if (rb.checked) {
        energy = rb.value;
      }
    };

  const allVaccine = document.querySelectorAll('input[name="dog-vacc"]');
  let vaccine;
    for (const rb of allVaccine) {
      if (rb.checked) {
        vaccine = rb.value;
      }
    };

  const allHuman_interaction = document.querySelectorAll('input[name="interaction"]');
  let human_interaction;
    for (const rb of allHuman_interaction) {
      if (rb.checked) {
        human_interaction = rb.value;
      }
    };

  // const response = await fetch(`/api/posts`, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     dog_name,
  //     breed,
  //     energy,
  //     vaccine,
  //     human_interaction,
  //     title,
  //     content
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });

  // if (response.ok) {
  //   document.location.replace('/dashboard/results');
    console.log(dog_name, energy, vaccine, human_interaction);
  // } else {
  //   alert(response.statusText);
  // }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);