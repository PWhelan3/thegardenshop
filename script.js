
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


// Parallax Scrolling Effect for Both Directions
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // Current vertical scroll position
    const background = document.querySelector('#backgroundImg');
    const logo = document.querySelector('#logoSmall');

    // Adjust movement speeds for parallax
    background.style.transform = `translateY(${scrollY * 0.3}px) scale(2)`; // Moves slower
    logo.style.transform = `translateY(${scrollY * 2}px) scale(1.4)`; // Moves slower than background
});