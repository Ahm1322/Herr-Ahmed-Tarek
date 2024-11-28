document.addEventListener("DOMContentLoaded", () => {
    // Feedback array with name, text, and image
    const feedbackList = [
        {
            name: "Ahmed Mohamed Wahby",
            text: "شرحك جميل يا مستر",
            img: "pic/IMG_20241126_152311.jpg",
        },
        {
            name: "Youssef Elshemy",
            text: "بالتوفيق",
            img: "pic/youseef.jpg",
        },
        {
            name: "Anas Mohamed",
            text: "❤️❤️",
            img: "pic/anas.jpg",
        },
        {
            name: "Asmaa",
            text: "بالتوفيق بإذن الله ❤",
            img: "pic/unnamed.jpg",
        },
    ];

    let currentIndex = 0; // Tracks the current feedback

    const avatarElement = document.getElementById("feedback-avatar");
    const nameElement = document.getElementById("feedback-name");
    const textElement = document.getElementById("feedback-text");

    // Function to update feedback
    function updateFeedback() {
        const feedback = feedbackList[currentIndex];
        nameElement.textContent = feedback.name;
        textElement.textContent = `"${feedback.text}"`;
        avatarElement.src = feedback.img;

        // Update index for the next feedback
        currentIndex = (currentIndex + 1) % feedbackList.length;
    }

    // Change feedback every 10 seconds
    setInterval(updateFeedback, 10000);

    // Initialize with the first feedback
    updateFeedback();
});



// Select the menu icon and navigation links
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav_links");

// Toggle the 'active' class when the menu icon is clicked
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
