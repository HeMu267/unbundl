function toggleDropdown(event) {
    event.stopPropagation();
    const treatmentDropdown = document.getElementById("dropdown-menu");
    const helpDropdown = document.getElementById("dropdown-help");
    
    // Hide the help dropdown if it is visible
    if (window.getComputedStyle(helpDropdown).display === "flex") {
        helpDropdown.style.display = "none";
    }
    
    // Toggle treatment dropdown
    treatmentDropdown.style.display = treatmentDropdown.style.display === "flex" ? "none" : "flex";
}

function toggleDropdownhelp(event) {
    event.stopPropagation();
    const helpDropdown = document.getElementById("dropdown-help");
    const treatmentDropdown = document.getElementById("dropdown-menu");
    const Navlinks= document.getElementById("navlinks-dropdown");
    
    // Hide the treatment dropdown if it is visible
    if (window.getComputedStyle(treatmentDropdown).display === "flex") {
        treatmentDropdown.style.display = "none";
    }
    if (window.getComputedStyle(Navlinks).display === "flex") {
        Navlinks.style.display = "none";
    }
    // Toggle help dropdown
    helpDropdown.style.display = helpDropdown.style.display === "flex" ? "none" : "flex";
}
document.getElementById("hamburger").addEventListener("click",()=>{
    console.log("hello");
    const menu=document.getElementById("sliding-menu");

    menu.classList.toggle('open');
})
document.getElementById("close").addEventListener("click",()=>{
    const menu=document.getElementById("sliding-menu");
    menu.classList.remove('open');
})
window.addEventListener('resize', () => {
    const menu=document.getElementById("sliding-menu");

    if (window.innerWidth >= 768) {
        menu.classList.remove('open');
        // slidingMenu.style.transform = 'translateX(100%)'; // Reset position
    }
});
function toggleNavlinks(event)
{
    event.stopPropagation();
    const Navlinks= document.getElementById("navlinks-dropdown");
    // const treatmentDropdown = document.getElementById("dropdown-menu");
    const helpDropdown = document.getElementById("dropdown-help");

    console.log("helg");
    // Hide the treatment dropdown if it is visible
    if (window.getComputedStyle(helpDropdown).display === "flex") {
        helpDropdown.style.display = "none";
    }
    // Toggle help dropdown
    Navlinks.style.display = Navlinks.style.display === "flex" ? "none" : "flex";
}

// Add event listeners to toggle the dropdowns
document.getElementById("treatment").addEventListener("click", toggleDropdown);
document.getElementById("button2").addEventListener("click", toggleDropdownhelp);
document.getElementById("navlinks-mini").addEventListener("click",toggleNavlinks);
// Close both dropdowns if clicked outside
document.addEventListener("click", function(event) {
    const treatmentDropdown = document.getElementById("dropdown-menu");
    const helpDropdown = document.getElementById("dropdown-help");
    const Navlinks= document.getElementById("navlinks-dropdown");
    if (!treatmentDropdown.contains(event.target) && !helpDropdown.contains(event.target) && !Navlinks.contains(event.target)) {
        treatmentDropdown.style.display = "none";
        helpDropdown.style.display = "none";
        Navlinks.style.display="none";
    }
});
document.addEventListener("click",(event)=>{
    const booking=document.getElementById("booking");
    const modal=document.getElementById("modal");
    if(!booking.contains(event.target))
    {
        modal.style.display="none";
    }
})
document.getElementById("bookingbutton").addEventListener("click",(event)=>{
    console.log("hello");
    event.stopPropagation(); 
    const modal=document.getElementById("modal");
    modal.style.display="flex";
})
// JavaScript to toggle dropdown visibility
document.getElementById("city-button").addEventListener("click", function() {
    const citiesDropdown = document.getElementById("cities");
    citiesDropdown.style.display = citiesDropdown.style.display === "none" || !citiesDropdown.style.display ? "flex" : "none";
});

// Hide dropdown when clicking outside
document.addEventListener("click", function(event) {
    const citiesDropdown = document.getElementById("cities");
    const cityButton = document.getElementById("city-button");

    if (!cityButton.contains(event.target)&& !citiesDropdown.contains(event.target)) {
        citiesDropdown.style.display = "none";
    }
});

document.getElementById("teeth-button").addEventListener("click", function() {
    const citiesDropdown = document.getElementById("teeth-issues");
    citiesDropdown.style.display = citiesDropdown.style.display === "none" || !citiesDropdown.style.display ? "flex" : "none";
});

// Hide dropdown when clicking outside
document.addEventListener("click", function(event) {
    const citiesDropdown = document.getElementById("teeth-issues");
    const cityButton = document.getElementById("teeth-button");

    if (!cityButton.contains(event.target) && !citiesDropdown.contains(event.target)) {
        citiesDropdown.style.display = "none";
    }
});


document.querySelectorAll('.carousel').forEach(carousel => {
    let isDragging = false;
    let startX;
    let scrollLeft;
  
    // Handle mouse down / start of dragging
    carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.style.cursor = 'grabbing';
      e.preventDefault(); // Prevents text selection while dragging
    });
  
    carousel.addEventListener('mousemove', (e) => {
      if (!isDragging) return; // Exit if not dragging
      e.preventDefault(); // Prevents text selection while dragging
      const x = e.pageX - carousel.offsetLeft;
      const walk = x - startX; // Calculate the distance moved
      carousel.scrollLeft = scrollLeft - walk; // Move the scroll based on the distance
    });
  
    carousel.addEventListener('mouseup', () => stopDragging());
    carousel.addEventListener('mouseleave', () => stopDragging());
  
    function stopDragging() {
      isDragging = false;
      carousel.style.cursor = 'grab';
    }
  
    // Touch support for mobile devices
    carousel.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = x - startX;
      carousel.scrollLeft = scrollLeft - walk;
    });
  
    carousel.addEventListener('touchend', () => {
      isDragging = false;
    });
});
// const carouselInner = document.querySelector('.eo8-carousel-inner');
// const prevBtn = document.getElementById('eo8-prevBtn');
// const nextBtn = document.getElementById('eo8-nextBtn');
// let currentIndex = 0;

// nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % 3; // 3 is the number of slides
//     carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
// });

// prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + 3) % 3;
//     carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
// });
  