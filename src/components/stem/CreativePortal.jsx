import { useTransition } from '../../context/TransitionContext'

export default function CreativePortal() {
  const { goTo } = useTransition()

  return (
    <button
      className="creative-portal"
      onClick={() => goTo('/creative')}
      aria-label="Enter creative portfolio"
    >
      creative direction ↗
    </button>
  )
}
