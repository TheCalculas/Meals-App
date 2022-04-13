import React from "react";

import "./style.css";
export default function LoginPage() {
  return (
    <div div class="text-center">
      <main class="form-signin">
        <form>
          <h1 class="h3 mb-3 fw-normal">Log In</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; Recipe App</p>
        </form>
      </main>
    </div>
  );
}
