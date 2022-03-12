import { useState, useEffect } from 'react'
import Button from './components/button/button'
import StartPage from './pages/start/start'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Landing from './pages/landing/landing'
import './App.css'
import { useInView } from 'react-hook-inview'
import { useVisible } from 'react-hooks-visible'

function App() {
  const [name, setName] = useState('Please press the button, to rename me.')
  const [opacityColor, setOpacityColor] = useState(1)
  const [refIsInView, isInView] = useInView({
    threshold: 1,
  })
  const [refUseIsVisible, isVisible] = useVisible()

  useEffect(() => {
    console.log(isInView)
  }, [isInView])

  useEffect(() => {
    console.log(isVisible)
    setOpacityColor(isVisible)
  }, [isVisible])

  const run = (val) => {
    setName(val)
  }

  return (
    <div className={'app'}>
      <h1>ROUTING_TEST</h1>
      <Router>
        <h1>{name}</h1>
        <Button run={run} />

        <Link to={'/start'}>Start</Link>
        <Link to={'/landing'}>Landing</Link>
        <Link to={'/start/two'}>Side 2</Link>

        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                <h1>Klaus Werner Testside</h1>
              </div>
            }
          />
          <Route path="/start/*" element={<StartPage />} />
          <Route path="/landing" exact element={<Landing />} />
        </Routes>
      </Router>

      <div className="box1"></div>
      <div className="box1"></div>
      <div className="box1"></div>
      <div className="box1"></div>
      <div ref={refIsInView} className="box2"></div>
      <div className="box1"></div>
      <div
        ref={refUseIsVisible}
        className="box3"
        style={{ opacity: opacityColor }}
      ></div>
      <div className="box1"></div>
    </div>
  )
}

export default App
