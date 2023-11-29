import { useState } from "react";
import "../css/signin.css";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password are correct (you may want to connect this to a server for authentication)
    if (email === "user@example.com" && password === "password123") {
      // If correct, redirect to the home page (you can use react-router-dom for this)
      alert("Sign in successful! Redirecting to the home page.");
      // Replace the next line with your actual redirect logic
      navigate("/home");
    } else {
      // If incorrect, display an error message (you might want to show a more user-friendly message)
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="signin">
      <img src="/images/lets-eat.jpg" alt="lets-eat" />
      <h1>Sign In To Your Account</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" className="submit" />
      </form>
      <Link to={"/forgot-password"}>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
      </Link>
      <p className="sign-up-p">
        Don't have an account?{" "}
        <Link to={"/signup"}>
          <a href="#" className="sign-up">
            Sign Up
          </a>
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
