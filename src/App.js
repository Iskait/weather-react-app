import './scss/all.scss'
import Header from './components/Header';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Error from './components/Error';
import { useSelector } from 'react-redux';


function App() {
  const { visible, status } = useSelector(state=>state.weather);
  return (
    <div className="wrapper">
      <Header />
      {visible && 
      status === 'success' ?
      <>    
      <Weather /> 
      <Footer />
      </>
      : visible &&
      <Error/>
      }
    </div>
  );
}

export default App;
