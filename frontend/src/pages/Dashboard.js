import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-5">

        <h1 className="text-center text-primary">
          AI Travel Planner
        </h1>

        <p className="text-center text-muted">
          Plan your dream trip with AI
        </p>

        <div className="row mt-4">

          <div className="col-md-6 mb-3">
            <Link
              to="/create-trip"
              className="btn btn-success w-100 py-3"
            >
              ✈ Create Trip
            </Link>
          </div>

          <div className="col-md-6 mb-3">
            <Link
              to="/my-trips"
              className="btn btn-primary w-100 py-3"
            >
              📍 My Trips
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;