document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3000/api/paintings'; // Server endpoint
    const list = document.getElementById('list');
    const paintingDetails = document.getElementById('painting-details');
    const form = document.getElementById('edit-form');

    // Fetch paintings from the API
    async function fetchPaintings() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Error fetching paintings');
            return await response.json();
        } catch (error) {
            console.error('Error:', error.message);
            return [];
        }
    }

    // Populate the paintings list
    function populateList(paintings) {
        list.innerHTML = ''; // Clear existing list
        paintings.forEach(painting => {
            const listItem = document.createElement('li');
            listItem.classList.add('painting-item');

            // Painting image
            const img = document.createElement('img');
            img.src = painting.image || 'default.jpg'; // Fallback image
            img.alt = painting.title;
            img.className = 'painting-thumbnail';

            // Button for painting
            const button = document.createElement('button');
            button.textContent = painting.title;
            button.className = 'painting-button';
            button.addEventListener('click', () => displayDetails(painting));

            listItem.appendChild(img);
            listItem.appendChild(button);
            list.appendChild(listItem);
        });
    }

    // Display painting details in the form
    function displayDetails(painting) {
        paintingDetails.style.display = 'block'; // Show the form
        document.getElementById('painting-id').value = painting._id;
        document.getElementById('title').value = painting.title;
        document.getElementById('artist').value = painting.artist;
        document.getElementById('year').value = painting.year;
        document.getElementById('description').value = painting.description;
    }

    // Fetch and display paintings on page load
    fetchPaintings().then(paintings => populateList(paintings));
});
