import React, { useState } from "react";
import styles from "./Education.module.css";

import { FaPenSquare } from "react-icons/fa";
const Education = ({Privew}) => {
  const [education, setEducation] = useState({
    school1: "",
    fildOfStudy1: "",
    startDate1: "",
    endDate1: "",
    school2: "",
    fildOfStudy2: "",
    startDate2: "",
    endDate2: "",
  });
  const [toggle, setToggle] = useState(true);
  function handleInput(e) {
    console.log(e.target);
    console.log(education);
    setEducation((prive) => {
      return { ...prive, [e.target.name]: e.target.value };
    });
  }
  function toggleDispaly() {
    setToggle((prive) => {
      return !prive;
    });
  }

  return (
    <div className={styles.education}>
      {toggle && (
        <div>
          <input
            onChange={(e) => {
              handleInput(e);
            }}
            value={education.school1}
            name="school1"
            type="text"
            placeholder="school name"
          />
          <input
            value={education.fildOfStudy1}
            onChange={(e) => {
              handleInput(e);
            }}
            name="fildOfStudy1"
            type="text"
            placeholder="what do u study"
          />
          <label htmlFor="start">Start date</label>
          <input
            value={education.startDate1}
            onChange={(e) => {
              handleInput(e);
            }}
            name="startDate1"
            id="start"
            type="date"
          />
          <label htmlFor="end">end</label>

          <input
            value={education.endDate1}
            onChange={(e) => {
              handleInput(e);
            }}
            name="endDate1"
            type="date"
          />

          <input
            onChange={(e) => {
              handleInput(e);
            }}
            value={education.school2}
            type="text"
            name="school2"
            placeholder="second school name(if avalabale)"
          />
          <input
            onChange={(e) => {
              handleInput(e);
            }}
            value={education.fildOfStudy2}
            type="text"
            name="fildOfStudy2"
            placeholder="what do u study"
          />
          <label htmlFor="start">Start date</label>
          <input
            value={education.startDate2}
            onChange={(e) => {
              handleInput(e);
            }}
            name="startDate2"
            id="start"
            type="date"
          />
          <label
            onChange={(e) => {
              handleInput(e);
            }}
            htmlFor="end"
          >
            end
          </label>

          <input
            onChange={(e) => {
              handleInput(e);
            }}
            value={education.endDate2}
            name="endDate2"
            type="date"
          />
          <button onClick={toggleDispaly} type="button">
            add
          </button>
        </div>
      )}
      {!toggle && (
        <div className={styles.educationDispaly}>
         {Privew&&<FaPenSquare className={styles.edit} onClick={toggleDispaly}  />} 
          <p className={styles.head}>EDUCATION</p>
          <div className={styles.educationFinal}>
            <p>{education.fildOfStudy1}</p>
            <span>{education.school1}</span>
            <span>
              {education.startDate1}-{education.endDate1}
            </span>
          </div>
          <div className={styles.educationFinal}>
            <p>{education.fildOfStudy2}</p>
            <span>{education.school2}</span>
            <span>
              {education.startDate2}-{education.endDate2}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Education;
