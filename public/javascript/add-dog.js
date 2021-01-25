async function addDogHandler(event) {
    event.preventDefault();
    // code goes here
    const dog_name = document.querySelector('#dog-name').value.trim();
    const energy = document.querySelector('input[name="dog-energy"]').value;
    const vaccine = document.querySelector('input[name="dog-vacc"]').value;
    const human_interaction = document.querySelector('input[name="interaction"]').value;

    if (dog_name && energy && vaccine && human_interaction) {
    const response = await fetch(`/api/dogs`, {
            method: "post",
            body: JSON.stringify({
                dog_name,
                energy,
                vaccine,
                human_interaction
            }),
            headers: { "Content-Type": "application/json" },
        });
            // need to make it so it alerts the user if they don't submit properly and reroute to matches
        if (response.ok) {
            console.log("success");
            document.location.replace(`/dashboard/results`);
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector(".new-dog-form").addEventListener("submit", addDogHandler);