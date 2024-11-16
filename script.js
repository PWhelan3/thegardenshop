
//To fetch the text from the json file..
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the content from the JSON file
    fetch('about/about.json')
        .then(response => response.json())
        .then(data => {
            // Get the 'aboutText' array from the JSON
            const aboutTextArray = data.aboutText;
            const aboutSection = document.getElementById('about-section');

            // Clear the "Loading..." text
            aboutSection.innerHTML = '';

            // Loop through each paragraph and create a <p> element
            aboutTextArray.forEach(paragraph => {
                const p = document.createElement('p');
                p.textContent = paragraph;
                aboutSection.appendChild(p);
            });
        })
        .catch(error => {
            console.error('Error fetching about section:', error);
            document.getElementById('about-section').textContent = 'Failed to load about section.';
        });
});