import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      

      localStorage.setItem("token", response.data.token);

      navigate("/Dashboard")

      alert("Login Success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">

<div className="row justify-content-center">

<div className="col-md-5">
    <div className="text-center mb-4">
  <h1 className="display-5 fw-bold text-primary">
    ✈️ AI Travel Planner
  </h1>

  <p className="text-muted fs-5">
    Plan Smarter. Travel Better.
  </p>
</div>

<div className="card shadow-lg mt-5">

<div className="card-body">

<h2 className="text-center mb-4">
Login
</h2>

<form onSubmit={handleSubmit}>

<input onChange={(e) => setEmail(e.target.value)}
className="form-control mb-3"
type="email"
placeholder="Email"
/>

<input onChange={(e) => setPassword(e.target.value)}
className="form-control mb-3"
type="password"
placeholder="Password"
/>

<button className="btn btn-primary w-100">
Login
</button>

</form>

</div>

</div>

</div>

</div>

</div>
  );
}

export default Login;