import AllPuppies from './components/AllPuppies'
import './App.css'
import { Link, Route, Routes} from 'react-router-dom'
import AddPuppyForm from './components/AddPuppyForm'
import SinglePuppy from './components/SinglePuppy'

function App() {

  return (
    <>
      <h1>Puppy Bowl</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Puppy</Link>
      </nav>


    <Routes>
      <Route path='/' element={<AllPuppies/>}/>
      <Route path='/add' element={<AddPuppyForm/>}/>
      <Route path='/details/:id' element={<SinglePuppy/>}/>
    </Routes>

    </>
  )
}

export default App
