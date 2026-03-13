import './App.css'
import { ShowSearch } from '@/features/search/ShowSearch'
import { NavigationLayout } from '@/features/navigation'

function App() {

  return (
    <NavigationLayout>
      <ShowSearch />
    </NavigationLayout>
  )
}

export default App
