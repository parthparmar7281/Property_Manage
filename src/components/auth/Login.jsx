import React, { useState } from "react";
import "./Auth.css";
import { authApi } from "../../services/authService";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleUpdate = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await authApi.login(form);

      if (res.data.success) {
        console.log("Login Success:", res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("Login Successful ");
        window.location.href = "/";
      } else {
        alert(res.data.message || "Invalid Credentials");
      }

    } catch (err) {
      console.error(err);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="card auth-card">
        <div className="text-center mb-4">
          <i className="bi bi-building auth-icon"></i>
          <h4>Property Manage</h4>
          <p className="text-muted">Login to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleUpdate}
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleUpdate}
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p className="text-center mt-3">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;