var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
darkBtn.classList.add("dark-btn-on");
document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

// ========NOTIFICATIONS===========





const notificationsData = [
    { id: 1, message: "Notification 1", unread: true },
    { id: 2, message: "Notification 2", unread: false },
    { id: 3, message: "Notification 3", unread: true },
    // Add more notifications as needed
];

// Function to render notifications based on filter (all or unread)
function renderNotifications(filterAll) {
    const notificationsContainer = document.getElementById('notifications');
    notificationsContainer.innerHTML = '';

    notificationsData.forEach(notification => {
        if (filterAll || notification.unread) {
            const notificationElement = document.createElement('div');
            notificationElement.classList.add('notification');
            notificationElement.innerText = notification.message;
            notificationsContainer.appendChild(notificationElement);
        }
    });
}

// Function to show all notifications
function showAll() {
    renderNotifications(true);
}

// Function to show only unread notifications
function showUnread() {
    renderNotifications(false);
}

// Function to toggle the visibility of the notification menu
function toggleNotificationMenu() {
    const notificationMenu = document.getElementById('notification-menu');
    notificationMenu.style.display = (notificationMenu.style.display === 'none' || notificationMenu.style.display === '') ? 'block' : 'none';
}

// Initial rendering with all notifications
showAll();


  // JavaScript to handle showing/hiding links LEFT SIDEBAR SEE MORE LINKS
  const seeMoreLink = document.getElementById('seeMoreLink');
  const additionalLinks = document.getElementById('additionalLinks');

  let isShowing = false;

  seeMoreLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default action of anchor tag
      if (!isShowing) {
          additionalLinks.classList.remove('hidden');
          isShowing = true;
          seeMoreLink.textContent = 'Hide';
      } else {
          additionalLinks.classList.add('hidden');
          isShowing = false;
          seeMoreLink.textContent = 'See More';
      }
  });

     // JavaScript to handle showing/hiding events RIGHT SIDEBAR SEE ALL EVENTS
     const seeAllEventsLink = document.getElementById('seeAllEventsLink');
     const moreEvents = document.getElementById('moreEvents');
 
     let isShowingEvents = false;
 
     seeAllEventsLink.addEventListener('click', function(event) {
         event.preventDefault(); // Prevent default action of anchor tag
         if (!isShowingEvents) {
             moreEvents.classList.remove('hidden');
             isShowingEvents = true;
             seeAllEventsLink.textContent = 'Show less';
         } else {
             moreEvents.classList.add('hidden');
             isShowingEvents = false;
             seeAllEventsLink.textContent = 'See All';
         }
     });

     // JavaScript to handle hiding advertisement IMAGE ON RIGHT SIDE BAR WHEN WE CLICK CLOSE
     const toggleAdvertisement = document.getElementById('toggleAdvertisement');
     const advertisementImage = document.getElementById('advertisementImage');
 
     toggleAdvertisement.addEventListener('click', function(event) {
         event.preventDefault(); // Prevent default action of anchor tag
         
         if (advertisementImage.classList.contains('hidden')) {
             advertisementImage.classList.remove('hidden'); // Show the advertisement image
             toggleAdvertisement.textContent = 'Close'; // Change link text to 'Close'
         } else {
             advertisementImage.classList.add('hidden'); // Hide the advertisement image
             toggleAdvertisement.textContent = 'Show'; // Change link text to 'Show'
         }
     });

      // JavaScript to handle toggling chat conversation IT MUST BE HIDE AND SHOW RIGHT SIDE BAR
    const toggleChat = document.getElementById('toggleChat');
    const conversationElements = document.querySelectorAll('.online-list');

    toggleChat.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action of anchor tag

        conversationElements.forEach(function(element) {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden'); // Show the conversation
                toggleChat.textContent = 'Hide Chat'; // Change link text to 'Hide Chat'
            } else {
                element.classList.add('hidden'); // Hide the conversation
                toggleChat.textContent = 'Show Chat'; // Change link text to 'Show Chat'
            }
        });
    });


    //=======MAIN CONTAINER LIKE BITTON AMINATION =========================//
    const likeBtns = document.querySelectorAll('#likeBtn, #likeBtn2');
let liked = false;
let likeCount = 120; // Initial like count

// Iterate over each like button and attach event listener
likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener('click', function() {
        if (!liked) {
            // If not already liked, change color to blue and increment like count
            this.classList.add('liked');
            likeCount++;
        } else {
            // If already liked, revert color and decrement like count
            this.classList.remove('liked');
            likeCount--;
        }
        liked = !liked; // Toggle liked status

        // Update like count for the corresponding like button
        this.parentElement.querySelector('.like-count').textContent = likeCount;
    });
});


// ================= COMMENT SECTION HIDE CODE =================

document.addEventListener("DOMContentLoaded", function() {
    var postContainers = document.querySelectorAll(".post-container");

    postContainers.forEach(function(container) {
        var commentBtn = container.querySelector(".commentBtn");
        var commentSection = container.querySelector(".comment-section");
        var postCommentBtn = container.querySelector(".postCommentBtn");
        var commentInput = container.querySelector(".commentInput");

        commentBtn.addEventListener("click", function() {
            var commentSection = container.querySelector(".comment-section");
            commentSection.classList.toggle("visible");
        });

        postCommentBtn.addEventListener("click", function() {
            var commentInput = container.querySelector(".commentInput");
            var commentText = commentInput.value;
            // Code to handle posting the comment goes here
            // For example, you can send an AJAX request to save the comment
            console.log("Posting comment: " + commentText);
            // Clear the comment input field after posting
            commentInput.value = "";
        });
    });
});

// =========== FOOTER SPINNER SECTION CODE ======================

document.addEventListener("DOMContentLoaded", function() {
    var loadMoreBtn = document.querySelector(".load-more-btn");
    var spinner = document.querySelector(".spinner");
    var message = document.querySelector(".message");

    loadMoreBtn.addEventListener("click", function() {
        // Show spinner
        spinner.style.display = "block";

        // Hide message (if shown)
        message.style.display = "none";

        // Wait for 10 seconds
        setTimeout(function() {
            // Hide spinner
            spinner.style.display = "none";

            // Show message
            message.style.display = "block";

            // Reset the page after 10 seconds
            setTimeout(function() {
                window.location.reload();
            }, 5000);
        }, 5000);
    });
});


// ================= post ellipse fuctionality=============

document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const selectedOption = this.textContent;
            dropdownToggle.textContent = selectedOption;
            dropdownMenu.classList.remove('show');
            dropdownToggle.querySelector('i').classList.add('fa-caret-down');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const ellipsisIcons = document.querySelectorAll('.ellipse');
    const dropdownMenus = document.querySelectorAll('.ellipse-dropdown-menu');

    ellipsisIcons.forEach(function(ellipsisIcon) {
        ellipsisIcon.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });
    });

    // Close dropdown menu when clicking outside
    document.addEventListener('click', function(event) {
        ellipsisIcons.forEach(function(ellipsisIcon) {
            const dropdownMenu = ellipsisIcon.nextElementSibling;
            if (!ellipsisIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    });

    const dropdownItems = document.querySelectorAll('.ellipse-dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedOption = this.textContent;
            const dropdownMenu = this.parentElement;
            dropdownMenu.classList.remove('show');
            alert("Successfully done");
        });
    });
});




// =========== POSTING POST FROM HOME ==========
// Function to handle posting
function handlePost() {
    const postText = document.getElementById('post-text').value;
    // Logic to post the content (e.g., send it to a server, update UI, etc.)
    console.log("Posted:", postText);
    // Clear the textarea after posting
    document.getElementById('post-text').value = '';
}


// Add event listener to the "Post" button
document.getElementById('post-button').addEventListener('click', function(event) {
    event.preventDefault();
    handlePost(); // Call the handlePost function when the "Post" button is clicked
});




// =========SETTING MODAL FOR FEED BACK==============
// Get the modal element
var modal = document.getElementById("feedback-modal");

// Get the link that opens the modal
var feedbackLink = document.getElementById("feedback-link");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the link, open the modal
feedbackLink.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Event listener for feedback buttons
document.getElementById("feedback-socialbook-btn").addEventListener("click", function() {
    alert("Thank you for your feedback to Social Book");
    modal.style.display = "none"; // Close the modal after giving feedback
});

document.getElementById("feedback-wrong-btn").addEventListener("click", function() {
    alert("Please provide more details about what's wrong. Thank you!");
    modal.style.display = "none"; // Close the modal after giving feedback
});

    



// Function to open the Visme form
// Function to open the Visme form
function openVismeForm() {
    console.log('Opening Visme form...');
    // Check if Visme form exists
    if (typeof VismeFormsEmbed !== 'undefined') {
        // Replace 'YOUR_FORM_ID' with your actual form ID
        VismeFormsEmbed.open('43411');
    } else {
        console.error('VismeFormsEmbed is not defined.');
    }
}

// Get the link element
var feedbackLink = document.getElementById("feedback-link");

// Add click event listener to the link
feedbackLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior (e.g., navigating to a new page)
    console.log('Feedback link clicked.');
    openVismeForm(); // Open the Visme form
});






// =========POST CAMERA CODE FOR POST IN TIME LINE================


document.addEventListener('DOMContentLoaded', function() {
    const liveVideoLink = document.getElementById('live-video-link');

    liveVideoLink.addEventListener('click', function(event) {
        event.preventDefault();
        openCameraModal();
    });

    function openCameraModal() {
        // Create modal overlay element
        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');

        // Create modal content container
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        // Create close button
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;'; // Unicode for "x" symbol
        closeButton.classList.add('modal-close-button');
        closeButton.addEventListener('click', closeModal);

        // Create a new video element for camera preview
        const cameraPreviewModal = document.createElement('video');
        cameraPreviewModal.setAttribute('id', 'camera-preview-modal');
        cameraPreviewModal.setAttribute('autoplay', 'true');
        cameraPreviewModal.setAttribute('width', '400');
        cameraPreviewModal.setAttribute('height', '300');

        // Access the camera
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // Display the camera stream in the video element
            cameraPreviewModal.srcObject = stream;
        })
        .catch(function(error) {
            console.error('Error accessing camera:', error);
            // Close the modal in case of an error
            closeModal();
        });

        // Append close button and camera preview to modal content
        modalContent.appendChild(closeButton);
        modalContent.appendChild(cameraPreviewModal);
        modalOverlay.appendChild(modalContent);

        // Append modal overlay to body
        document.body.appendChild(modalOverlay);

        // Styling to center modal
        const modalHeight = modalContent.offsetHeight;
        const modalWidth = modalContent.offsetWidth;
        modalContent.style.top = `calc(50% - ${modalHeight / 2}px)`;
        modalContent.style.left = `calc(50% - ${modalWidth / 2}px)`;

        // Close modal when clicked outside
        modalOverlay.addEventListener('click', function(event) {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

    function closeModal() {
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    }
});


// =========== CARET DOWN POST CONTAINER FUNCTIONALITTY CODE===========


document.addEventListener("DOMContentLoaded", function() {
    var profileIcon = document.getElementById("profileIcon");
    var caretDropdown = document.getElementById("caretDropdown");

    profileIcon.addEventListener("click", function() {
        if (caretDropdown.style.display === "none") {
            caretDropdown.style.display = "block";
        } else {
            caretDropdown.style.display = "none";
        }
    });
});




