import React from 'react';


const students = [
    {
      id: 1,
      name: "Alice",
      picture: "https://via.placeholder.com/150",
      subject: "Mathematics"
    },
    {
      id: 2,
      name: "Bob",
      picture: "https://via.placeholder.com/150",
      subject: "Science"
    },
    {
      id: 3,
      name: "Charlie",
      picture: "https://via.placeholder.com/150",
      subject: "History"
    }
  ];
  
  function Student({ name, picture, subject }) {
    return (
      <div className="student">
        <img src={picture} alt={`${name}'s picture`} />
        <h2>{name}</h2>
        <p>{subject}</p>
      </div>
    );
  }
  
  function StudentList() {
    return (
      <div className="student-list">
        {students.map(student => (
          <Student
            key={student.id}
            name={student.name}
            picture={student.picture}
            subject={student.subject}
          />
        ))}
      </div>
    );
  }
  export default StudentList
