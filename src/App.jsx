import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Navber from './components/Navigation/Navber';

function App() {
  
  return (
    <>
     <Navber/>

   {/* <main className="main_container"> */}
     <ContactHeader/>
     <ContactForm/>
     {/* </main> */}
    </>
  );
}

export default App
