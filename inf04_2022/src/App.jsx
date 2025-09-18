import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [Courses, setCourses] = useState(["Programowanie w C#", "Angular dla początkujących", "Kurs Django"])
  const [FullName, setFullName] = useState('')
  const [CoursNumber, setCoursNumber] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (FullName == '' || CoursNumber == '') {console.log("Wypełnij pola poprawnie")}
    else {
      if (CoursNumber > Courses.length) {console.log("Nieprawidłowy numer kursu")}
      else {
        console.log(FullName)
        console.log(Courses[CoursNumber-1])
      }
    }
  }

  const nameChange = (e) => {
    setFullName(e.target.value)
  }

  const numberChange = (e) => {
    setCoursNumber(e.target.value)
  }

  return (
    <>
        <h2>Liczba kursów: {Courses.length}</h2>
        <ol>
          {Courses.map((course, id) => <li key={id}>{course}</li>)}
        </ol>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Imię i nazwisko:</label>
            <input className="form-control" type="text" onChange={nameChange}/>
            <label>Numer kursu:</label>
            <input className="form-control" type="number" min="1" onChange={numberChange}/>
            <button type="submit" className="btn btn-primary">Zapisz do kursu</button>
          </div>
        </form>

    </>
  )
}

export default App
