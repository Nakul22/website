/**
 * Course Schedule Interactive Functionality
 * Handles expandable lecture details in the course schedule table
 */

/**
 * Toggles the visibility of lecture details for a specific lecture
 * @param {Event} event - The click event object
 * @param {number} lectureId - The ID of the lecture to toggle details for
 */
function toggleDetails(event, lectureId) {
    // Prevent event bubbling to avoid unwanted behavior
    event.stopPropagation();
    
    // Find the details row for this lecture
    const detailsRow = document.getElementById('details-' + lectureId);
    
    // Error handling: log and exit if details row doesn't exist
    if (!detailsRow) {
        console.error('Detail row not found for lecture ' + lectureId);
        return;
    }
    
    // Toggle visibility: show if hidden, hide if visible
    if (detailsRow.style.display === 'none' || detailsRow.style.display === '') {
        detailsRow.style.display = 'table-row';
    } else {
        detailsRow.style.display = 'none';
    }
}

/**
 * Optional: Close all open lecture details
 * This function can be called to collapse all expanded lectures
 */
function closeAllDetails() {
    const allDetailRows = document.querySelectorAll('.lecture-details-row');
    allDetailRows.forEach(row => {
        row.style.display = 'none';
    });
}

/**
 * Apply alternating row colors to lecture rows
 * This runs when the page loads to ensure proper alternating colors
 */
function applyAlternatingColors() {
    const lectureRows = document.querySelectorAll('tbody tr.expandable-row');
    lectureRows.forEach((row, index) => {
        // Remove any existing row color classes
        row.classList.remove('row-even', 'row-odd');
        
        // Apply alternating colors based on lecture number (not DOM position)
        if (index % 2 === 0) {
            row.classList.add('row-even'); // Gray for 1st, 3rd, 5th lecture
        } else {
            row.classList.add('row-odd');  // White for 2nd, 4th, 6th lecture
        }
    });
}

// Apply alternating colors when the page loads
document.addEventListener('DOMContentLoaded', applyAlternatingColors);