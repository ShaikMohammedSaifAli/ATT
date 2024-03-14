// Add an event listener for window resize
window.addEventListener('resize', function() {
    // Check viewport width
    if (window.innerWidth <= 1024) {
        // Decrease font size for smaller screens
        document.querySelectorAll('.title h1').forEach(function(element) {
            element.style.fontSize = '40px';
        });

        // Adjust logo position in navbar
        document.querySelectorAll('.navbar-brand').forEach(function(element) {
            element.style.position = 'absolute';
            element.style.left = '0';
            element.style.marginLeft = '5px';
        });

        // Adjust navbar toggler position
        document.querySelectorAll('.navbar-toggler').forEach(function(element) {
            element.style.marginLeft = '405%';
        });
    } else {
        // Reset styles for larger screens
        document.querySelectorAll('.title h1').forEach(function(element) {
            element.style.fontSize = '50px';
        });

        document.querySelectorAll('.navbar-brand').forEach(function(element) {
            element.style.position = 'initial';
        });

        document.querySelectorAll('.navbar-toggler').forEach(function(element) {
            element.style.marginLeft = 'initial';
        });
    }
});

// Add an event listener for DOMContentLoaded to check initial viewport width
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 1024) {
        // Adjust navbar nav margin for larger screens
        document.querySelectorAll('.navbar-nav').forEach(function(element) {
            element.style.marginLeft = 'auto';
        });
    }
});
