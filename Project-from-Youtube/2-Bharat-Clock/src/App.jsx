
import AppName from './components/AppName';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App() {
  

  return (
    <center>
    {/* imported components */}
      <AppName/>
      <ClockSlogan/>
      <CurrentTime/>
    </center>
  )
}

export default App
