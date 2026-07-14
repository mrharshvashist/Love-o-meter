import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name1, setName1] = useState([])
  const [name2, setName2] = useState([])
  const [loveScore, setLoveScore] = useState(0)
  // const [letterCountList, setLetterCountList] = useState([])

  // objecting containing letters and their corresponding values
  const letterValues = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }

  const calculateLove = () => {
    
    let name1Values = name1.filter((letter) => letter !== ' ').map((letter) => letter.toLowerCase()).map((letter) => letterValues[letter])
    let name2Values = name2.filter((letter) => letter !== ' ').map((letter) => letter.toLowerCase()).map((letter) => letterValues[letter])
    let total1 = name1Values.reduce((sum, value) => sum + value, 0)
    let total2 = name2Values.reduce((sum, value) => sum + value, 0)
    if (name1.length === 0 || name2.length === 0) return
    let loveScore = Math.round((total1/name1.length)) * Math.round((total2/name2.length))

    if (loveScore > 100) {
      let finalLoveScore = loveScore.toString().split('')
      let [a,b,c] = finalLoveScore;
      let d = parseInt(a) + parseInt(c)
      let e = parseInt(d+b)
      if (e > 100) {
        let finalLoveScore2 = e.toString().split('')
        let [f,g,h] = finalLoveScore2;
        let i = parseInt(f) + parseInt(h)
        let j = parseInt(i+g)
        loveScore = j
      }
      else {
        loveScore = e
      }
    }
    else {
      loveScore = Math.round(loveScore)
    }
    setLoveScore(loveScore)
  }

useEffect(() => console.log('name1:', name1, 'name2:', name2), [name1, name2])

  return (
  <div className="App">
    <h1>Love Score:{loveScore !== 0 ? ` ${loveScore}%` : ''}</h1>
    <div>

    <label htmlFor="name1">Person 1:</label>
    {/* <p>{name1}</p> */}
    <input placeholder="Enter name" onKeyPress={(e) => e.key === 'Enter' && calculateLove()} type="text" id="name1" onChange={(e) => setName1(e.target.value.split(''))} />
    </div>

  
    <div>
    <label htmlFor="name2">Person 2:</label>
    {/* <p>{name2}</p> */}
    <input placeholder="Enter name" onKeyPress={(e) => e.key === 'Enter' && calculateLove()} type="text" id="name2" onChange={(e) => setName2(e.target.value.split(''))} />
    </div>


    <button onClick={calculateLove}>
      Calculate Love
    </button>



  </div>
)
}

export default App
