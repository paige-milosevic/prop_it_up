import './App.css';
import People from './components/People';

function App() {
  
  const personList = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black"
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown"
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown"
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: 45,
      hairColor: "Brown"
    }
  ]

  return (
    <div className="App">
    {
      personList.map((member, index) => {
        return(
          <People 
          key={index}
          firstName={member.firstName}
          lastName={member.lastName}
          age={member.age}
          hairColor={member.hairColor}
          />
        )
      })
    }
    </div>
  );
}

export default App;
