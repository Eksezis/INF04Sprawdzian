import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './app.css'

function App() {
  const [Lista, setLista] = useState(["", "Komedia", "Obyczajowy", "Sensacyjny", "Horror"])
  const [Tytul, setTytul] = useState()
  const [Rodzaj, setRodzaj] = useState()


  const onSubmit = (e) => {
    e.preventDefault()
    console.log("tytul: " + Tytul + ";" + " rodzaj: " + Lista[Rodzaj])
  }

  const changeTytul = (e) => {
    setTytul(e.target.value)
  }

  const changeRodzaj = (e) => {
    setRodzaj(e.target.value)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="poleWprowadzeniaTytułu">Tytuł filmu</label>
          <input className="form-control" type="text" onChange={changeTytul}/>
          <label htmlFor="poleWybraniuRodzaju">Rodzaj</label>
          <select className="form-control" onChange={changeRodzaj}>
            {Lista.map((element, id)=>
              <option value={Lista.indexOf(element)} key={id}>{element}</option>
            )}
          </select>
          <button type="submit" className="btn btn-primary">Dodaj</button>
        </div>
      </form>
    </>
  )
}

export default App
