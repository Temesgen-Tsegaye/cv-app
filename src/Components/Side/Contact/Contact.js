import React, { Component ,useState} from "react";
import styles from "./Contact.module.css";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPenSquare,
} from "react-icons/fa";

const Contact = ({Privew}) => {
  const [inputs, setInpute] = useState({
    email: "",
    primaryNo: "",
    altNo: "",
    insta: "",
    linkdin: "",
    facebook: "",
    twitter: "",
  });
  const [toggle, setToggle] = useState(true);
  function handleInput(e) {
    setInpute((prive) => {
      return { ...prive, [e.target.name]: e.target.value };
    });
  }
  function toggleDispaly() {
    setToggle((prive) => {
      return !prive;
    });
  }
  return <div className={styles.contact}>
          {toggle && (
        <form action="">
          <div>
            <input
              value={inputs.email}
              name="email"
              onChange={(e) => handleInput(e)}
              type="email"
              placeholder="Email"
            />
            <input
              value={inputs.primaryNo}
              name="primaryNo"
              onChange={(e) => handleInput(e)}
              type="email"
              placeholder="primary phone no"
            />
            <input
              value={inputs.altNo}
              name="altNo"
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="alternative phone no"
            />
            
            <input
              value={inputs.linkdin}
              name="linkdin"
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="linkdin"
            />
            
            <input
              value={inputs.twitter}
              name="twitter"
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="twitter"
            />

            <button onClick={toggleDispaly} type="button">add</button>
          </div>
        </form>
      )}
      {!toggle && (
        <div>
          <p className={styles.mainHeader}>CONTACTS</p>

          {Privew&&<FaPenSquare onClick={toggleDispaly} className={styles.edit} />}
          <div>
          <p className={styles.heades}>email</p>
          <p className={styles.listss}>{inputs.email}</p>
          </div>
         
          <div>
            <p className={styles.heades}>phone no</p>
            <p className={styles.listss}>{inputs.primaryNo}</p>
            <p className={styles.listss}>{inputs.altNo}</p>
          </div>
          <div>
            <p className={styles.heades}>social midea</p>
             <div className={styles.socialList}>
             <p className={styles.lists}>
              <FaLinkedin className={styles.icons} />
             <p> {inputs.linkdin}</p>
            </p>
           
            <p className={styles.lists}>
              <FaTwitter className={styles.icons} />
              <p>{inputs.twitter}</p>
            </p>
             </div>
           
          </div>
        </div>
      )}
  </div>;
};
export default Contact;
