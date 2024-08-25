

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.reviews p');
    let currentIndex = 0; // initial visible paragraph

    function updateVisibility() {
        paragraphs.forEach((p, index) => {
            if (index === currentIndex) {
                p.style.visibility = 'visible';
                p.style.display = 'inline-block';
                p.style.zIndex = '1';
            } else {
                p.style.visibility = 'hidden';
                p.style.display = 'none';
                p.style.zIndex = '-1';
            }
        });
    }

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % paragraphs.length; // adds 1 to index
        updateVisibility();
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + paragraphs.length) % paragraphs.length; // subtracts 1 from index
        updateVisibility();
    });

    updateVisibility(); //calls function
});