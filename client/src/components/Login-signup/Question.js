import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Question = () => {
  return (
    <>
      <div>
        <h1>How do you like to make your coffee?</h1>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          French Press
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Coffee Pot
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Cold Brew
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Pour over
        </button>
      </div>
      <div>
        <h1>How strong do you like your coffee?</h1>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Light- Pick me Up!
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Medium-Its only 2pm
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Strong-Ive got things to do!
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Extra Strong- Get out of my way!
        </button>
      </div>
      <div>
        <h1>Do you like to add anything to your coffee?</h1>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Creamer
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Sugar
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Both
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          Various flavorings
        </button>
      </div>
      <div>
        <h1>
          How many cups of coffee does your house or workplace drink a day?
        </h1>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          1-2 flying solo
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          3-4 it takes two tango
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          5-6 it might an addiction
        </button>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
          7+ the entire office
        </button>
      </div>
    </>
  );
};

export default Question;
