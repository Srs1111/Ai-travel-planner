import { useEffect, useState } from "react";
import axios from "axios";


function MyTrips() {
  const [trips, setTrips] = useState([]);
  const [editingTrip, setEditingTrip] = useState(null);

const [formData, setFormData] = useState({
  destination: "",
  duration: "",
  budget: "",
});
const [showPlan, setShowPlan] = useState(false);
const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5000/api/trip",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTrips(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrips();
  }, []);
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this trip?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/trip/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTrips((prevTrips) =>
      prevTrips.filter((trip) => trip._id !== id)
    );

    alert("Trip deleted successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to delete trip.");
  }
};
const editUpdate = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:5000/api/trip/${editingTrip}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Trip updated successfully!");

    window.location.reload();
  } catch (err) {
    console.log(err);
    alert("Update failed");
  }
}; 
const viewAIPlan = (plan) => {
  setSelectedPlan(plan);
  setShowPlan(true);
};
  return (
    <div className="container mt-5">

<h2 className="mb-4">
My Trips
</h2>
{showPlan && (
  <div
    className="modal d-block"
    tabIndex="-1"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">AI Travel Plan</h5>

          <button
            className="btn-close"
            onClick={() => setShowPlan(false)}
          ></button>
        </div>

        <div className="modal-body">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {selectedPlan}
          </pre>
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={() => setShowPlan(false)}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  </div>
)}
{editingTrip && (
  <div className="card p-3 mb-4">
    <h3>Edit Trip</h3>

    <input
      className="form-control mb-2"
      value={formData.destination}
      onChange={(e) =>
        setFormData({
          ...formData,
          destination: e.target.value,
        })
      }
      placeholder="Destination"
    />

    <input
      className="form-control mb-2"
      value={formData.duration}
      onChange={(e) =>
        setFormData({
          ...formData,
          duration: e.target.value,
        })
      }
      placeholder="Duration"
    />

    <input
      className="form-control mb-2"
      value={formData.budget}
      onChange={(e) =>
        setFormData({
          ...formData,
          budget: e.target.value,
        })
      }
      placeholder="Budget"
    />

    <button
      className="btn btn-success me-2"
      onClick={editUpdate}
    >
      Update
    </button>
   

    <button
      className="btn btn-secondary"
      onClick={() => setEditingTrip(null)}
    >
      Cancel
    </button>
  </div>
)}

<div className="row">

{trips.map((trip)=>(

<div className="col-md-4 mb-4" key={trip._id}>

<div className="card shadow">

<div className="card-body">

<h4>{trip.destination}</h4>

<p>
<b>Duration:</b> {trip.duration} Days
</p>

<p>
<b>Budget:</b> {trip.budget}
</p>
<button
  className="btn btn-primary me-2"
  onClick={() => viewAIPlan(trip.itinerary[0])}
>
  View Plan
</button>

<button
  className="btn btn-warning me-2"
  onClick={() => {
    setEditingTrip(trip._id);

    setFormData({
      destination: trip.destination,
      duration: trip.duration,
      budget: trip.budget,
    });
  }}
>
  Edit
</button>

<button onClick={() => handleDelete(trip._id)} className="btn btn-danger">
Delete
</button>

</div>

</div>

</div>

))}

</div>

</div>
  );
}

export default MyTrips;