const Biodata = (obj) => {
    console.log(obj);
    
  return (
    <div className="biodata">
      <h1>Biodata of {obj.name}</h1>
      <div className="personal-info">
        <p>Age: {obj.age} </p>
        <p>Occupation: {obj.occupation}</p>
        {obj.mobile && <p>Mobile: {obj.mobile}</p>}
        {obj.location && <p>Location: {obj.location}</p>}
      </div>
      <div className="skills">
        <h3>My Skills</h3>
        <ul>
          {obj?.skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interest">
        <h3>My Interest</h3>
        <ul>
          {obj?.interests?.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Biodata;
