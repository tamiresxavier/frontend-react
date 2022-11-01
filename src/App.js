import React from "react";
import "./index.css";

export default function App() {
  return (
    <div class="form-container">
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          id="last_name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="last_name"
        />
        <input
          id="office"
          class="form-field"
          type="text"
          placeholder="Office"
          name="office"
        />
        <input
          id="department"
          class="form-field"
          type="text"
          placeholder="Department"
          name="department"
        />
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
