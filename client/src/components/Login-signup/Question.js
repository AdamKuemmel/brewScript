import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Question = () => {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postal: "",
    coffee_prep: "",
    coffee_strength: "",
    avg_cups: "",
    additions: "",
    bean_prep: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    formState.postal = parseInt(formState.postal);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your First Name"
                  name="first_name"
                  value={formState.first_name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your Last Name"
                  name="last_name"
                  value={formState.last_name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="123 Denver Drive"
                  name="address1"
                  value={formState.address1}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Apt 429"
                  name="address2"
                  value={formState.address2}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="City"
                  name="city"
                  value={formState.city}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="State"
                  name="state"
                  value={formState.state}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="ZIP"
                  name="postal"
                  value={formState.postal}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
                <div>
                  <h1>How do you like to make your coffee?</h1>
                  <button
                    className="btn btn-lg btn-light m-2"
                    name="coffee_prep"
                    onClick={handleChange}
                    value="French Press"
                  >
                    French Press
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="coffee_prep"
                    value="Coffee Pot"
                  >
                    Coffee Pot
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="coffee_prep"
                    value="Cold Brew"
                  >
                    Cold Brew
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="coffee_prep"
                    value="Pour Over"
                  >
                    Pour over
                  </button>
                </div>
                <div>
                  <h1>How strong do you like your coffee?</h1>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="coffee_strength"
                    value="Light - Pick me up!"
                  >
                    Light- Pick me Up!
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="coffee_strength"
                    value="Medium - It's only 2 PM"
                  >
                    Medium-Its only 2pm
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="coffee_strength"
                    value="String - I've got things to do!"
                  >
                    Strong-Ive got things to do!
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="coffee_strength"
                    value="Extra Strong - Get out of my Way!"
                  >
                    Extra Strong- Get out of my way!
                  </button>
                </div>
                <div>
                  <h1>Do you like to add anything to your coffee?</h1>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="additions"
                    value="Creamer"
                  >
                    Creamer
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="additions"
                    value="Sugar"
                  >
                    Sugar
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="additions"
                    value="Both"
                  >
                    Both
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="additions"
                    value="Various flavorings"
                  >
                    Various flavorings
                  </button>
                </div>
                <div>
                  <h1>
                    How many cups of coffee does your house or workplace drink a
                    day?
                  </h1>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="avg_cups"
                    value="1-2 Flying Solo"
                  >
                    1-2 flying solo
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="avg_cups"
                    value="3-4 takes two to tango"
                  >
                    3-4 it takes two tango
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="avg_cups"
                    value="5-6 might be an addiction"
                  >
                    5-6 it might an addiction
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="avg_cups"
                    value="7+ the entire office"
                  >
                    7+ the entire office
                  </button>
                </div>
                <div>
                  <h1>Whole Beans or Ground?</h1>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="bean_prep"
                    value="Whole Beans"
                  >
                    Whole Beans
                  </button>
                  <button
                    className="btn btn-lg btn-light m-2"
                    onClick={handleChange}
                    name="bean_prep"
                    value="Ground"
                  >
                    Ground
                  </button>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Question;
