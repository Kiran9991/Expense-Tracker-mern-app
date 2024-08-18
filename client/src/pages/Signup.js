import React from "react";

import classes from './Signup.module.css';

const Signup = () => {
  return (
    <div className={classes.formContainer}>
      <form className={classes.mainForm}>
        <div className={classes.formInputs}>
          <label>Name:-</label><br/>
          <input type="text" />
        </div>
        <div className={classes.formInputs}>
          <label>Email:-</label><br/>
          <input type="text" />
        </div>
        <div className={classes.formInputs}>
          <label>Password:-</label><br/>
          <input type="text" />
        </div>
        <div className={classes.formBtn}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
