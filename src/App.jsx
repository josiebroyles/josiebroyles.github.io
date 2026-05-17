import { HashRouter, Routes, Route } from 'react-router-dom'
import { TransitionProvider } from './context/TransitionContext'
import StemLayout from './layouts/StemLayout'
import CreativeLayout from './layouts/CreativeLayout'
import Home from './pages/stem/Home'
import Research from './pages/stem/Research'
import Skills from './pages/stem/Skills'
import CV from './pages/stem/CV'
import Contact from './pages/stem/Contact'
import Landing from './pages/creative/Landing'
import Gallery from './pages/creative/Gallery'

export default function App() {
  return (
    <HashRouter>
      <TransitionProvider>
        <Routes>
          <Route element={<StemLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/creative" element={<Landing />} />
          <Route element={<CreativeLayout />}>
            <Route path="/creative/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </TransitionProvider>
    </HashRouter>
  )
}
