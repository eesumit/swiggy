import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    myGender: '',
    mail: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here using formData
    console.log('Form submitted:', formData);
  };

  return (
    <div className="main">
      <div className="outer">
        <div className="left">
          <h3>START FOR FREE</h3>
          <h1>Create a new account.</h1>
          <p className="signup">
            Embark on a Journey to a Healthier Lifestyle with Our <br /> Fitness and Wellness Community
            <br />Sign Up Today!
          </p>
        </div>
        <div className="right">
          <div className="cross">
            <img src="cross.png" alt="" />
          </div>
          <div className="content">
            <h1 className="start">Get started</h1>
            <span className="span">
              Already a member? <span className="spanlog">Log in</span>
            </span>
            <form onSubmit={handleSubmit}>
              <div className="name">
                <div className="first">
                  <label className="opacity" htmlFor="fname">
                    First name:
                  </label>
                  <br />
                  <input
                    className="fname"
                    type="text"
                    id="fname"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                  <br />
                </div>
                <div className="last">
                  <label className="opacity" htmlFor="lname">
                    Last name:
                  </label>
                  <br />
                  <input
                    className="lname"
                    type="text"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="gender">
                <h2 className="opacity">Gender</h2>
                <div className="both">
                  <div className="male">
                    <input
                      type="radio"
                      id="html"
                      name="myGender"
                      value="Male"
                      checked={formData.myGender === 'Male'}
                      onChange={handleChange}
                    />
                    <label htmlFor="html">Male</label>
                  </div>
                  <div className="female">
                    <input
                      type="radio"
                      id="css"
                      name="myGender"
                      value="Female"
                      checked={formData.myGender === 'Female'}
                      onChange={handleChange}
                    />
                    <label htmlFor="css">Female</label>
                  </div>
                </div>
              </div>

              <div className="mail">
                <label className="opacity" htmlFor="mail">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                />
              </div>

              <div className="password">
                <label className="opacity" htmlFor="password">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="button" onClick={handleSubmit}>
                Sign up
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
