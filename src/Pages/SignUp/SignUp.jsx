import { useContext, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const [signUpError, setSignUpError] = useState("");
  const [passwordValidationError, setPasswordValidationError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setSignUpError("");
    setPasswordValidationError("");

    if (password.length < 6) {
      setPasswordValidationError("Password should be at least 6 characters long.");
    } else if (!/[A-Z]/.test(password)) {
      setPasswordValidationError("Password should contain at least one capital letter.");
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordValidationError("Password should contain at least one special character (!@#$%^&*).");
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("Sign up successful!");
          // Clear input fields
          emailRef.current.value = "";
          passwordRef.current.value = "";
        })
        .catch((error) => {
          console.log(error);
          setSignUpError(error.message);
          toast.error("Sign up failed");
        });
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 lg:my-24">
        <div className="hero-content">
          <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-[500px] md:w-[500px] w-[380px] h-[800px]">
            <h1 className="text-5xl font-bold text-center mt-14">Sign Up</h1>
            <form onSubmit={handleSignUp} className="h-[600px] lg:w-[490px] w- md:w-[490px] card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="text"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-10">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  ref={passwordRef}
                />
                <label className="label">
                  <p>If you are already signed up</p>
                  <Link to="/signin">
                    <a href="#" className="label-text-alt text-lg link link-hover">
                      Sign In here ....
                    </a>
                  </Link>
                </label>
                {passwordValidationError && (
                  <div className="text-red-500 mt-2">{passwordValidationError}</div>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              {signUpError && (
                <div className="text-red-500 mt-4">{signUpError}</div>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default SignUp;
