import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function SigninForm(){
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data); // You can replace this with your form submission logic
      };
    
      return (
    
          <section className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div
              className="bg-gray-100 text-gray-500 rounded-3xl shadow-2xl w-full overflow-hidden"
              style={{ maxWidth: "1000px" }}
            >
              <div className="md:flex w-full">
                <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                  <img
                    className="w-full"
                    src="/images/signin.png"
                    alt="header image"
                  />
                </div>
                <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl">SIGN IN</h1>
                    <p>Enter your information to register</p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex -mx-3 mb-5">
                      <div className="w-1/2 px-3">
                        <FontAwesomeIcon icon={faUser} />
                        <label
                          htmlFor="firstName"
                          className="text-sm font-semibold px-1"
                        >
                          First name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            id="firstName"
                            type="text"
                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg outline-none focus:border-indigo-500 ${
                              errors.firstName ? "border-red-500" : ""
                            }`}
                            placeholder="First name"
                            {...register("firstName", { required: true })}
                          />
                        </div>
                        {errors.firstName && (
                          <span className="text-red-500 text-sm">
                            First name is required
                          </span>
                        )}
                      </div>
                      <div className="w-1/2 px-3">
                        <FontAwesomeIcon icon={faUser} />
                        <label
                          htmlFor="lastName"
                          className="text-sm font-semibold px-1"
                        >
                          Last name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            id="lastName"
                            type="text"
                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg outline-none focus:border-indigo-500 ${
                              errors.lastName ? "border-red-500" : ""
                            }`}
                            placeholder="Last name"
                            {...register("lastName", { required: true })}
                          />
                        </div>
                        {errors.lastName && (
                          <span className="text-red-500 text-sm">
                            Last name is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex -mx-3 mb-5">
                      <div className="w-full px-3">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold px-1"
                        >
                          Email
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            id="email"
                            type="email"
                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg outline-none focus:border-indigo-500 ${
                              errors.email ? "border-red-500" : ""
                            }`}
                            placeholder="Email"
                            {...register("email", { required: true })}
                          />
                        </div>
                        {errors.email && (
                          <span className="text-red-500 text-sm">
                            Email is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex -mx-3 mb-5">
                      <div className="w-full px-3">
                        <FontAwesomeIcon icon={faLock} />
                        <label
                          htmlFor="password"
                          className="text-sm font-semibold px-1"
                        >
                          Password
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            id="password"
                            type="password"
                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg outline-none focus:border-indigo-500 ${
                              errors.password ? "border-red-500" : ""
                            }`}
                            placeholder="Password"
                            {...register("password", { required: true, minLength: 8 })}
                          />
                        </div>
                        {errors.password && (
                          <span className="text-red-500 text-sm">
                            Password must be at least 8 characters
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex -mx-3 mb-5">
                      <div className="w-full px-3">
                        <label
                          htmlFor="confirmPassword"
                          className="text-sm font-semibold px-1"
                        >
                          Confirm Password
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            id="confirmPassword"
                            type="password"
                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg outline-none focus:border-indigo-500 ${
                              errors.confirmPassword ? "border-red-500" : ""
                            }`}
                            placeholder="Confirm Password"
                            {...register("confirmPassword", { required: true })}
                          />
                        </div>
                        {errors.confirmPassword && (
                          <span className="text-red-500 text-sm" >
                          Please confirm your password
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3">
                      <button
                        type="submit"
                        className="block w-full max-w-xs mx-auto bg-extraBlue hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        REGISTER NOW
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    
    );
    }


export default SigninForm;