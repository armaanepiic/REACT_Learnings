
const Biodata = (obj) => {
    const { name, age, mobile, location, occupation, skills, interests } = obj;
  return (
    <div className="biodata">
      <h1>Biodata of {name}</h1>
      <div className="personal-info">
        <p>Age: {age} </p>
        <p>Occupation: {occupation}</p>
        {mobile && <p>Mobile: {mobile}</p>}
        {location && <p>Location: {location}</p>}
      </div>
      <div className="skills">
        <h3>My Skills</h3>
        <ul>
          {skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interest">
        <h3>My Interest</h3>
        <ul>
          {interests?.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Biodata;
