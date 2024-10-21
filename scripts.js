document.addEventListener("DOMContentLoaded", () => {
  // Collapse section
  const collapseBtn = document.getElementById("collapseBtn");
  let sidebar = document.getElementById("sidebar");

  collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  // Toggle section
  const toggleDarkMode = document.getElementById("toggleDarkMode");
  const body = document.body;

  // Dark mode toggle
  toggleDarkMode.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });

  //   Hamburger section
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  sidebar = document.getElementById("sidebar");

  // Toggle sidebar on hamburger menu click (mobile)
  hamburgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });

  // Chart.js logic
  const ctx = document.getElementById("eventChart").getContext("2d");
  const eventChart = new Chart(ctx, {
    type: "bar", 
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Event Registrations per Month",
          data: [650, 950, 780, 420, 1000, 580, 850, 350, 620, 320, 980, 600], 
          backgroundColor: "#8576FF", 
          borderColor: "#F8FAFC", 
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 200,
            max: 1000,
          },
        },
      },
    },
  });

  // Carousel Functionality
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  let currentIndex = 0;
  const totalItems = carouselItems.length;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Slide transition logic
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Button event listeners
  prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  // Optional Auto-Slide (every 5 seconds)
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);

  // JavaScript to handle modal display and close
  const eventRows = document.querySelectorAll(".event-table tbody tr");
  const modal = document.getElementById("eventModal");
  const closeButton = document.querySelector(".close-button");

  // Function to open the modal and set event details
  eventRows.forEach((row) => {
    row.addEventListener("click", () => {
      const eventName = row.cells[0].textContent;
      const eventDate = row.cells[1].textContent;
      const speakerName = row.cells[2].textContent;
      const status = row.cells[3].textContent;

      // Set modal content
      document.getElementById("modalEventName").textContent = eventName;
      document.getElementById("modalEventDate").textContent = eventDate;
      document.getElementById("modalEventDescription").textContent =
        "Event Description"; // Update accordingly
      document.getElementById(
        "modalEventSpeakers"
      ).textContent = `Speaker: ${speakerName}, Status: ${status}.`;

      // Show the modal
      modal.style.display = "flex";
    });
  });

  // Function to close the modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});
