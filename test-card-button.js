/* *** JAVASCRIPT START *** */
const allBoxes = document.querySelectorAll('.test-box'); 
const loadMoreBtn = document.getElementById('loadMoreBtn'); 
let visibleCount = 10; // By default 10 boxes will be visible initially

/**
 * Shows the initial set of test boxes.
 */
function showInitialBoxes() { 
    allBoxes.forEach((box, index) => { 
        if (index < visibleCount) { 
            box.style.display = 'block'; 
        } 
    }); 
} 

/**
 * Loads the next batch of test boxes (10 more).
 */
function loadMoreBoxes() { 
    let newVisibleCount = visibleCount + 10; 
    allBoxes.forEach((box, index) => { 
        if (index < newVisibleCount) { 
            box.style.display = 'block'; 
        } 
    }); 
    visibleCount = newVisibleCount; 
    
    // Hide the button if all boxes are now visible
    if (visibleCount >= allBoxes.length) { 
        loadMoreBtn.style.display = 'none';
    } 
} 

// Run on page load
window.onload = function() {
    showInitialBoxes();
    
    // Check if the button needs to be hidden initially
    if (allBoxes.length <= visibleCount) { 
        loadMoreBtn.style.display = 'none';
    }
};

// Add event listener to the "Load More" button
loadMoreBtn.addEventListener('click', loadMoreBoxes);
/* *** JAVASCRIPT END *** */
