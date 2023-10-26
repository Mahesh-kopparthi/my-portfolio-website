// script.js
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollButton');
    const scrollLink = document.querySelector('a[href="#scrollDiv"]');
    const scrollDiv = document.getElementById('scrollDiv');

    scrollButton.addEventListener('click', function() {
        scrollDiv.scrollIntoView({ behavior: 'smooth',block:'start' });
    });

    scrollLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollDiv.scrollIntoView({ behavior: 'smooth',block: 'start'  });
    });
});
var jobTitles = ['Front-End', 'Java', 'web', 'software'];
    var currentIndex = 0;

    function updateJobTitle() {
        var jobTitleElement = document.getElementById('dynamictexts');
        jobTitleElement.textContent = jobTitles[currentIndex];
        currentIndex = (currentIndex + 1) % jobTitles.length;
    }

    setInterval(updateJobTitle, 1600);
    let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.querySelector('.navbar').classList.add('scroll-down');
        document.querySelector('.about-me').classList.add('scroll-down');
        document.querySelector('#sociallinks').classList.add('scroll-down');
        document.querySelector('.scrolldivs').classList.add('scroll-down');
        document.querySelector('#educations').classList.add('scroll-down');
    } else {
        // Scroll up
        document.querySelector('.navbar').classList.add('scroll-up');
        document.querySelector('.about-me').classList.add('scroll-up');
        document.querySelector('#sociallinks').classList.add('scroll-up');
        document.querySelector('.scrolldivs').classList.add('scroll-up');
        document.querySelector('#educations').classList.add('scroll-up');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Define the elements to observe
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is in the viewport
            entry.target.classList.add('scroll-up'); // or 'scroll-down'
        } else {
            // Element is out of the viewport
            entry.target.classList.remove('scroll-up', 'scroll-down');
        }
    });
}, {
    threshold: 0.5 // 0.5 means when 50% of the element is visible
});

// Start observing each element
elementsToAnimate.forEach(element => {
    observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function() {
    var hoverTarget = document.querySelector('.hover-target');

    // Add hover effect on mouse enter
    hoverTarget.addEventListener("mouseenter", function() {
        hoverTarget.classList.add('hover-effect');
    });

    // Remove hover effect on mouse leave
    hoverTarget.addEventListener("mouseleave", function() {
        hoverTarget.classList.remove('hover-effect');
    });
});
// Get the element by its ID
const hoverElement = document.getElementById('hover-element');

// Function to apply hover effect when the page is scrolled
function applyHoverEffect() {
  // Get the current scroll position of the page
  const scrollPosition = window.scrollY;

  // Define the position where you want the hover effect to be applied
  const triggerPosition = 200; // Change this value to the desired scroll position

  // Check if the scroll position is greater than or equal to the trigger position
  if (scrollPosition >= triggerPosition) {
    // Add the "hover-effect" class to the element to apply hover styles
    hoverElement.classList.add('hover-effect');
  } else {
    // Remove the "hover-effect" class if the scroll position is less than the trigger position
    hoverElement.classList.remove('hover-effect');
  }
}

// Add an event listener to the "scroll" event and call the applyHoverEffect function
window.addEventListener('scroll', applyHoverEffect);
// Get the element by its ID
const hoverElement = document.getElementById('hover-element');

// Add the "hover-effect" class to simulate hover styles
hoverElement.classList.add('hover-effect');




const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

observer.observe(document.querySelector('.Travellife'));
</script>
</body>

</html>
In this example, the IntersectionObserver is used to observe the element with the class name Travellife. When the element is 20% visible in the viewport, the animate class is added, triggering the typewriter animation. This example should work as intended without any extra complexities.


const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');

        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('mobile-menu-open');
        });

        const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');

        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('mobile-menu-open');
        });


        var jobTitles = ['Front-End', 'Java', 'web', 'software'];
    var currentIndex = 0;

    function updateJobTitle() {
        var jobTitleElement = document.getElementById('dynamictexts');
        jobTitleElement.textContent = jobTitles[currentIndex];
        currentIndex = (currentIndex + 1) % jobTitles.length;
    }

    setInterval(updateJobTitle, 1600);

    const navbar = document.getElementById('navbar');
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }

    prevScrollPos = currentScrollPos;
};

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};



const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});



































































document.querySelectorAll('a[href^="about-me"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



















const travellifeElement = document.querySelector('.Travellife');

        // Options for the Intersection Observer
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.2 // Trigger the animation when 20% of the element is visible
        };

        // Callback function when the element enters the viewport
        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    travellifeElement.classList.add('animate');
                    observer.unobserve(entry.target); // Stop observing after the animation triggers
                }
            });
        }

        // Create a new Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, options);

        // Start observing the element with class "Travellife"
        observer.observe(travellifeElement);