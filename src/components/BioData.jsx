export default function BioData(obj) {
  const {name, age, occupation,contact, skills, interests} = obj;
  console.log(obj);
    
  return (
    <div>
      <h1>Biodata of {name} </h1>
      <div className="personal-info {name}">
        <p>Age: {age}</p>
        <p>Occupation: {occupation}</p>
        {contact && <p>Contact: {contact}</p>}
      </div>
      <div className="skills">
        <h2>My Skills:</h2>
        <ul>
          {skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interests">
        <h2>My Interest:</h2>
        <ul>
          {interests?.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
