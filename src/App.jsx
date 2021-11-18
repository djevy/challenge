import './App.css';
import { searchOpportunities, getUserProfile } from './services/KineticTechApi'

function App() {
  const search = "game";
  const showShared = true

  const searchForOpportunities = async (values) => {
    // setLoading(true)

    try {
        const response = await searchOpportunities(
            search,
            showShared,
        )
        console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }
    // setLoading(false)
}
const getProfile = async () => {
  // setLoading(true)

  try {
      const response = await getUserProfile(
          search,
          showShared,
      )
      console.log('response', response)
  } catch (error) {
    console.log('error', error)
  }
  // setLoading(false)
}
  return (
    <div className="App">
      Hello World
      <button onClick={getProfile}>search</button>
    </div>
  );
}

export default App;
