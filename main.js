// main.js

// Firebase configuration (replace with your own config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firebase Auth
const auth = firebase.auth();

// Signup event
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Signup successful! You can now login.');
            document.getElementById('signup-form').reset();
            showLogin();  // Automatically switch to login form
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login event
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful!');
            // Redirect to another page or perform other actions
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Show login and signup forms
function showLogin() {
    document.getElementById('login-box').classList.add('active');
    document.getElementById('signup-box').classList.remove('active');
}

function showSignup() {
    document.getElementById('signup-box').classList.add('active');
    document.getElementById('login-box').classList.remove('active');
}

// Show login form by default
showLogin();
