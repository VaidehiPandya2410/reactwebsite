// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RechartLine from './Components/RechartLine';
import RechartPie_one from './Components/RechartPie_one';
import RechartPie_two from './Components/RechartPie_two';
import RechartPie_final from './Components/RechartPie_final';
import ReactWordCloud from './Components/ReactWordCloud';
import SunburstChart from './Components/SunburstChart';

function App() {
  return (
    <div className='App flex flex-col'>
      <Header />

      <div className='mt-20 bg-gray-100  h-4/5 w-full flex justify-evenly mr-0'>
        <RechartLine />
        <div className='flex flex-col justify-between h-4/5 w-6/12 -mt-2'>
          <RechartPie_one />
          <RechartPie_two />
        </div>
      </div>

      <div className="bg-gray-100 flex w-10/12 h-11/12 mx-auto mt-10 mb-10 justify-between ">
        <SunburstChart/>
      </div>

      <div className='bg-gray-100 py-4 h-4/5 w-4/5 mx-auto mb-16'>
        <RechartPie_final />
      </div>

      <div className='bg-gray-100 flex w-10/12 h-screen mx-auto justify-between '>
        <ReactWordCloud />
      </div>

      <Footer />
    </div>
  );
}

export default App;
