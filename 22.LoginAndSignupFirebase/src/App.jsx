import './App.css';
import { Component } from 'react';
import Greet from './components/Greet.jsx'; // Assuming you'll use this later
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import { initializeApp } from "firebase/app";
// Import only what you need from firebase/auth
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendEmailVerification,GoogleAuthProvider,signInWithPopup } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-KgxthxBBSSwACs2BLUNEBKlWeZRJ_lU",
  authDomain: "ws-suevey.firebaseapp.com",
  databaseURL: "https://ws-suevey-default-rtdb.asia-southeast1.firebasedatabase.app", // You might not need this if you're only using Auth initially
  projectId: "ws-suevey",
  storageBucket: "ws-suevey.firebaseapp.com", // Corrected storageBucket domain
  messagingSenderId: "195960283408",
  appId: "1:195960283408:web:6ca10acd164d21c251c595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Pass the app instance to getAuth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        // Use a single state to control which form is shown
        // 'register' or 'login'. Could add 'loggedIn' later.
        currentView: 'register',
        name: null, // Consider if you need to store name here, Auth mostly uses email/uid
        email: null,
        password: null, // Avoid storing password in state
        showPassword: false,
    }
  }

  // Handler for user registration
  registrationHandler = async (event) => {
    event.preventDefault();
    const name = event.target.name.value; // Name is not stored by Firebase Auth email/password
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Basic validation example
    if (!email || !password) {
        console.error("Email and password are required for registration.");
        // You might want to show this to the user
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully!
        const user = userCredential.user;
        console.log("User registered successfully:", user);
        // If registration is successful, the user is automatically signed in.
        // You might want to redirect them or show a different view now.
        // For now, let's switch to the login view, although they are already signed in.
        // A better approach might be to check the auth state (using onAuthStateChanged - see below)
        // and render a logged-in view.
        sendEmailVerification(auth.currentUser)
        this.setState({ currentView: 'login', email: user.email,name }); // Update state after success
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration failed:", errorCode, errorMessage);
        // Handle specific errors like auth/weak-password, auth/email-already-in-use etc.
        // You might want to display the error message to the user.
      });
  }

  // Handler for user login
  loginHandler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

     // Basic validation example
    if (!email || !password) {
        console.error("Email and password are required for login.");
        // You might want to show this to the user
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully!
        const user = userCredential.user;
        console.log("User signed in successfully:", user);
        // The user is now signed in. Update state or redirect.
        // Maybe show a logged-in dashboard or welcome message.
        // Let's assume you want to show a success message or navigate elsewhere.
        // For demonstration, we'll just log success and update state (though state change isn't strictly needed if you handle auth state globally).
         this.setState({ currentView: 'loggedIn', email: user.email }); // Example: switch to a 'loggedIn' view
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login failed:", errorCode, errorMessage);
        // Handle specific errors like auth/user-not-found, auth/wrong-password etc.
        // Display the error message to the user.
      });
  }

  googleLoginHandler =() =>{

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("User signed in successfully:", user);
    this.setState({ currentView: 'loggedIn', email: user.email,name:user.displayName }); // Example: switch to a 'loggedIn' view
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }


  // Handler to switch between the Register and Login forms
  switchViewHandler =(view) => {
    this.setState({currentView: view});
  }

  passwordHandler = () =>{
    this.setState({showPassword: !this.state.showPassword})
  }

  render() {
    const { currentView, name, email, showPassword } = this.state;

    return (
      <div>
        {/* Conditional rendering based on currentView state */}
        {currentView === 'register' && (
          <Register
            submit={this.registrationHandler} // Pass the registration handler
            showPassword={showPassword}
            click={this.passwordHandler}
            // Pass a handler to switch to the login view
            page={() => this.switchViewHandler('login')}
          />
        )}

        {currentView === 'login' && (
          <Login
            submit={this.loginHandler} // Pass the login handler
            showPassword={showPassword}
            click={this.passwordHandler}
            google={this.googleLoginHandler}
            // Pass a handler to switch to the register view
            page={() => this.switchViewHandler('register')}
          />
        )}

        {/* Example of showing something when logged in */}
        {/* {currentView === 'loggedIn' && (
            <div>
                <h2>Welcome!</h2>
                <p>You are signed in with email: {email}</p>
            </div>
         )} */}

        {/* If you were using Greet to show user info after login */}
        {currentView === 'loggedIn' && <Greet name={name} email={email} />}

      </div>
    )
  }
}

export default App;
