const API_URL = 'http://localhost:3000/api/paintings';

document.addEventListener('DOMContentLoaded', async () => {
    const list = document.getElementById('list');
    const form = document.getElementById('edit-form');

    // Fetch and display paintings
    const response = await fetch(API_URL);
    const paintings = await response.json();

    paintings.forEach(painting => {
        const listItem = document.createElement('li');
        listItem.textContent = painting.title;
        listItem.addEventListener('click', () => populateForm(painting));
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
    document.getElementById('painting-id').value = painting._id;
    document.getElementById('title').value = painting.title;
    document.getElementById('artist').value = painting.artist;
    document.getElementById('year').value = painting.year;
    document.getElementById('description').value = painting.description;
}
