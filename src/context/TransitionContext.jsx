import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TransitionContext = createContext(null)

export function TransitionProvider({ children }) {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  const goTo = (path) => {
    setVisible(true)
    setTimeout(() => {
      navigate(path)
      setTimeout(() => {
        setVisible(false)
      }, 120)
    }, 800)
  }

  return (
    <TransitionContext.Provider value={{ goTo }}>
      {children}
      <div className={`page-overlay${visible ? ' visible' : ''}`} />
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  return useContext(TransitionContext)
}
