import { Outlet } from 'react-router-dom'
import StemNav from '../components/stem/StemNav'

export default function StemLayout() {
  return (
    <div className="stem-world">
      <StemNav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
