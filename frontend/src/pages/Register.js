import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">

<div className="row justify-content-center">

<div className="col-md-5">

<div className="card shadow-lg mt-5">

<div className="card-body">

<h2 className="text-center mb-4">
Login
</h2>

<form onSubmit={handleSubmit}>

    
    <input
  name="name"
  onChange={handleChange}
/>

<input
className="form-control mb-3"
type="email"
placeholder="Email"
/>

<input
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

export default Register;