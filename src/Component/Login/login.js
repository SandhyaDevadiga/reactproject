import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Login</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Login
            </button>
            <Link to="/signup" className="btn btn-primary w-100">
              Signup
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
