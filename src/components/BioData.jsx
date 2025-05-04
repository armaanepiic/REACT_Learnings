export default function BioData(obj) {
    console.log(obj);
    
  return (
    <div>
      <h1>Biodata of {obj.name} </h1>
      <div className="personal-info {obj.name}">
        <p>Age: {obj.age}</p>
        <p>Occupation: {obj.occupation}</p>
        {obj.contact && <p>Contact: {obj.contact}</p>}
      </div>
      <div className="skills">
        <h2>My Skills:</h2>
        <ul>
          {obj?.skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interests">
        <h2>My Interest:</h2>
        <ul>
          {obj?.interests?.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
