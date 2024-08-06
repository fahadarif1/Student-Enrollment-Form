document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const cardContainer = document.getElementById('cardContainer');
    const resetButton = document.getElementById('reset');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Gather form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const website = document.getElementById('website').value;
        const url = document.getElementById('url').value;
        const gender = document.querySelector('input[name="male-female"]:checked').value;
        const skills = Array.from(document.querySelectorAll('.skills .checkbox:checked')).map(checkbox => checkbox.value);

        // Create card element
        const card = document.createElement('div');
        card.className = 'card';

        // Create and append image
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Student Image';
        card.appendChild(img);

        // Create and append info section
        const info = document.createElement('div');
        info.className = 'info';
        info.innerHTML = `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Website: <a href="${website}" target="_blank">${website}</a></p>
            <p>Gender: ${gender}</p>
            <p>Skills: ${skills.join(', ')}</p>
        `;

        // Create and append delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => card.remove());
        info.appendChild(deleteButton);

        card.appendChild(info);
        cardContainer.appendChild(card);
    });

    // Reset button functionality
    resetButton.addEventListener('click', () => form.reset());
});