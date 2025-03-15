// documentTracking.js
function initializeDocumentTracking() {
    // Track clicks on CV and statements
    const trackedLinks = document.querySelectorAll('[data-track="true"]');
    
    trackedLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const documentId = this.getAttribute('data-document-id');
            const documentTitle = this.innerText.trim();
            
            // Send event to Google Analytics
            gtag('event', 'document_view', {
                'event_category': 'Document Clicks',
                'event_label': documentTitle,
                'document_id': documentId,
                'timestamp': new Date().toISOString()
            });
        });
    });
}

// Initialize tracking when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDocumentTracking);