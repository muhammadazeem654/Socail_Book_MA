const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB limit
    },
    fileFilter: (req, file, cb) => {
        const allowedFileTypes = /jpeg|jpg|png|gif/;
        const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedFileTypes.test(file.mimetype);
        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb('Error: Only images are allowed!');
        }
    }
});

app.post('/upload', upload.single('image'), (req, res) => {
    // The uploaded file is available in req.file
    console.log('File uploaded:', req.file);
    res.redirect('/');
});

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// ===============NOTIFICATIONS==================

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

// Initial rendering with all notifications
showAll();