import { useState } from "react";
import axios from "axios";

function CreateTrip() {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/trip/create",
        {
          destination,
          duration,
          budget,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      alert("Trip Created Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

<div className="card shadow p-4">

<h2 className="text-center mb-4">
Create Your Trip
</h2>

<form onSubmit={handleSubmit}>

<div className="mb-3">
<label>Destination</label>

<input
className="form-control"
type="text"
placeholder="Enter Destination"
onChange={(e)=>setDestination(e.target.value)}
/>

</div>

<div className="mb-3">

<label>Duration (Days)</label>

<input
className="form-control"
type="number"
onChange={(e)=>setDuration(e.target.value)}
/>

</div>

<div className="mb-3">

<label>Budget</label>

<select
className="form-select"
onChange={(e)=>setBudget(e.target.value)}
>

<option>Select Budget</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>

</select>

</div>

<button
className="btn btn-success w-100"
type="submit"
>

Generate AI Trip

</button>

</form>

</div>

</div>
  );
}

export default CreateTrip;