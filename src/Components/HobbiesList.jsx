import "./HobbiesList.css";

function HobbiesList({ hobbies }) {
  return (
    <div className="hobby-container">
      <h2 className="hobby-title">My Hobbies</h2>
      <ul className="hobby-list">
        {hobbies.map((hobby, index) => (
          <li key={index} className="hobby-item">
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HobbiesList;
