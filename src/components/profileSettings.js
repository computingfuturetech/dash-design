import React, { useEffect } from "react";
import "../assets/css/profileSettings.css";
import { useState } from "react";
import axios from "axios";

export default function ProfileSettings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState();
  const [bio, setBio] = useState("");
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    e.preventDefault();
    // console.log(e.target.files[0]);
    if (e.target.files[0] === undefined) return;
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);

    console.log(`file is ${e.target.files[0]}`);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleContactChange = (e) => {
    e.preventDefault();
    setContact(e.target.value);
  };
  const handleBioChange = (e) => {
    e.preventDefault();
    setBio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jwt = JSON.parse(localStorage.getItem("login"));
    const token = jwt.token;
    const data = new FormData();
    data.append("first_name", name);
    data.append("phone", contact);
    data.append("bio", bio);
    data.append("image", image);
    
    console.log(token);

    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    axios
      .post(
        "http://127.0.0.1:8000/user/update/",
        data,
        config
      )
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem("login"));
    const token = jwt.token;
    console.log(token);

    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    axios.post("http://127.0.0.1:8000/user/update/", {}, config).then((res) => {
      // console.log(res);
      setName(res.data.first_name);
      if (res.data.image == null) {
        console.log(`image null: ${res.data.image}`);
      } else {
        setFile(`http://127.0.0.1:8000/${res.data.image}`);
        console.log(`image: ${res.data.image}`);
        console.log(`file ${file}`)
      }
      setContact(res.data.phone);
      setBio(res.data.bio);
      setEmail(res.data.email);
      console.log(`email: ${res.data.email}`);
    });
  }, []);

  return (
    <div className="profile-settings-container">
      <h1>Profile Settings</h1>
      <div className="profile-settings-main-container">
        <div className="left">
          <div className="profile-img">
            <img src={file} alt="profile" />
            <div className="middle">
              <div className="text">
                <label htmlFor="file-input">
                  <img
                    // onClick={handleFileChange}
                    src="data:image/svg+xml,%3Csvg fill='%23ffffff' height='200px' width='200px' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 348.882 348.882' xml:space='preserve' stroke='%23ffffff'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cg%3E%3Cpath d='M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z'%3E%3C/path%3E%3Cpath d='M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                    alt=""
                  />
                </label>

                <input
                  onChange={handleFileChange}
                  type="file"
                  name="file-input"
                  id="file-input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          {/* <button>Change Profile Picture</button> */}
          <button onClick={handleSubmit} className="update">
            UPDATE
          </button>
        </div>
        <div className="right">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleNameChange}
            value={name}
          />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" value={email} readOnly />
          <label htmlFor="contact">Contact Info:</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            onChange={handleContactChange}
            value={contact}
          />
          <label htmlFor="bio">Bio:</label>
          <textarea
            name="bio"
            id="bio"
            cols="30"
            rows="10"
            onChange={handleBioChange}
            value={bio}
          ></textarea>
          <button onClick={handleSubmit} className="update">
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}
