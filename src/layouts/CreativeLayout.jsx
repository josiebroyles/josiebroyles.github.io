import { Outlet } from 'react-router-dom'
import CreativeNav from '../components/creative/CreativeNav'

export default function CreativeLayout() {
  return (
    <div className="creative-world">
      <CreativeNav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
