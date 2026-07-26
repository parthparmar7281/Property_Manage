import React, { useState } from "react";
import "./Auth.css";
import { authApi } from "../../services/authService";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: ""
  });

  const handleUpdate = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await authApi.register(form);

      console.log("Success:", res.data);
      alert("Registration Successful ");

    } catch (err) {
      console.error(err);
      alert("Error in registration ");
    }
  };

  return (
    <div className="auth-container signup-bg">
      <div className="card auth-card">
        <div className="text-center mb-3">
          <i className="bi bi-person-plus-fill auth-icon text-success"></i>
          <h4>Create Account</h4>
          <p className="text-muted">Join Property Manage</p>
        </div>

        <form onSubmit={handleSignUp}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleUpdate}
                className="form-control"
                placeholder="Full Name"
              />
            </div>

            <div className="col-md-6">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleUpdate}
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleUpdate}
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleUpdate}
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="mb-3">
            <label>Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleUpdate}
              className="form-select"
            >
              <option value="">Select Role</option>
              <option value="2">Buyer</option>
              <option value="3">Seller</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>

          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;