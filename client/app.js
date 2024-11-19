const API_URL = 'http://localhost:3000/api/paintings';

document.addEventListener('DOMContentLoaded', async () => {
    const list = document.getElementById('list');
    const form = document.getElementById('edit-form');
    const paintingDetails = document.getElementById('painting-details');

    // Fetch and display paintings
    const response = await fetch(API_URL);
    const paintings = await response.json();

    paintings.forEach(painting => {
        const listItem = document.createElement('li');
        listItem.className = 'painting-item';

        // Image for the painting
        const img = document.createElement('img');
        img.src = painting.image;
        img.alt = painting.title;
        img.className = 'painting-thumbnail';

        // Button link for the painting
        const button = document.createElement('button');
        button.textContent = painting.title;
        button.className = 'painting-button';
        button.addEventListener('click', () => populateForm(painting));

        listItem.appendChild(img);
        listItem.appendChild(button);
        list.appendChild(listItem);
    });

    // Save button
    document.getElementById('save').addEventListener('click', async () => {
        const id = document.getElementById('painting-id').value;
        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const year = document.getElementById('year').value;
        const description = document.getElementById('description').value;

        await fetch(`${API_URL}/update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, title, artist, year, description }),
        });

        alert('Painting updated successfully');
    });
});

function populateForm(painting) {
    form.style.display = 'block'; // Show the form
    paintingDetails.style.display = 'block'; // Ensure right-side is visible

    document.getElementById('painting-id').value = painting._id;
    document.getElementById('title').value = painting.title;
    document.getElementById('artist').value = painting.artist;
    document.getElementById('year').value = painting.year;
    document.getElementById('description').value = painting.description;
}
