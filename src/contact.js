import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    FullName: "",
    email: "",
    TestInvitationCode: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { FullName, email,  TestInvitationCode } = userData;

    if (FullName &&  email && TestInvitationCode) {
      const res = fetch(
        "https://chromeextension-2adfb-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FullName,
            email,
            TestInvitationCode,
          }),
        }
      );

      if (res) {
        setUserData({
          FullName: "",
          email: "",
          TestInvitaionCode: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="FullName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.FullName}
                          onChange={postUserData}
                        />
                      </div>
                      
                    </div>
                    <div className="row">
                      
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="TestInvitationCode"
                          id=""
                          className="form-control"
                          placeholder="Enter Your TestInvitationCode"
                          value={userData.TestInvitationCode}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      StartTest
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;