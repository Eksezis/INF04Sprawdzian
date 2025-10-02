import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  const [Zdjecia, setZdjecia] = useState([
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}])
  const [KwiatyChecked, setKwiatyChecked] = useState(true)
  const [ZwierzetaChecked, setZwierzetaChecked] = useState(true)
  const [SamochodyChecked, setSamochodyChecked] = useState(true)

  const changeCheckKwiaty = (e) => {
    if (e.target.checked) { setKwiatyChecked(true) }
    else { setKwiatyChecked(false) }
  }
  const changeCheckZwierzeta = (e) => {
    if (e.target.checked) { setZwierzetaChecked(true) }
    else { setZwierzetaChecked(false) }
  }
  const changeCheckSamochody = (e) => {
    if (e.target.checked) { setSamochodyChecked(true) }
    else { setSamochodyChecked(false) }
  }
  const pobranie = (identifier) => {
    setZdjecia(Zdjecia.map(zdjecie => 
      zdjecie.id === identifier ? {...zdjecie, downloads: zdjecie.downloads + 1} : zdjecie
    ))  
  }


  return (
    <>
      <h1>Kategoria zdjęć</h1>
      <div className="form-check-inline form-switch">
        <input className="form-check-input" type="checkbox" defaultChecked="true" id="kwiatyCheckbox" onChange={changeCheckKwiaty}/>
        <label className="form-check-label" htmlFor="ctrId">Kwiaty</label>
      </div>
      <div className="form-check-inline form-switch">
        <input className="form-check-input" type="checkbox" defaultChecked="true" id="zwierzetaCheckbox" onChange={changeCheckZwierzeta}/>
        <label className="form-check-label" htmlFor=" ctrId2">Zwierzęta</label>
      </div>
      <div className="form-check-inline form-switch">
        <input className="form-check-input" type="checkbox" defaultChecked="true" id="samochodyCheckbox" onChange={changeCheckSamochody}/>
        <label className="form-check-label" htmlFor=" ctrId3">Samochody</label>
      </div>  
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {Zdjecia.map((zdjecie) => {
          if (KwiatyChecked && zdjecie.category == 1) {return(
            <div key={zdjecie.id}>
              <img className='zdjecia' src={'../assets/'+zdjecie.filename}/>
              <h3>Pobrań: {zdjecie.downloads}</h3>
              <button type="button" className="btn btn-success" onClick={() => pobranie(zdjecie.id)}>Pobierz</button>
            </div>
          )}
        })}
        {Zdjecia.map((zdjecie) => {
          if (ZwierzetaChecked && zdjecie.category == 2) {return(
            <div key={zdjecie.id}>
              <img className='zdjecia' key={zdjecie.id} src={'../assets/'+zdjecie.filename}/>
              <h3>Pobrań: {zdjecie.downloads}</h3>
              <button type="button" className="btn btn-success" onClick={() => pobranie(zdjecie.id)}>Pobierz</button>
            </div>
          )}
        })}
        {Zdjecia.map((zdjecie) => {
          if (SamochodyChecked && zdjecie.category == 3) {return(
            <div key={zdjecie.id}>
              <img className='zdjecia' key={zdjecie.id} src={'../assets/'+zdjecie.filename}/>
              <h3>Pobrań: {zdjecie.downloads}</h3>
              <button type="button" className="btn btn-success" onClick={() => pobranie(zdjecie.id)}>Pobierz</button>
            </div>
          )}
        })}
      </div>
    </>
  )
}

export default App
