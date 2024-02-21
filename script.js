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