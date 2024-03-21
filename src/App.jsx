import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import { Pitch_line } from './Components/Pitch_line'
import Benefits from './Components/Benefits'
import How_its_work from './Components/How_its_work'
import ContactUs from './Components/ContactUs' 
import Footer from './Components/Footer'
import CaseStudy from './Components/CaseStudy'
import Clients from './Components/Clients'
import Slideshow from './Components/Slideshow'
import ClientsView from './Components/ClientsView'

function App() {
  

  return (
    <>
     <Navbar/>
     <div className='  ss:ml-20  sm:mx-40 md:mx-20 lg:mx-40 mx-8 mt-14 mb-4' > 
     <Banner /> </div> 
     <div className='sm:mx-40 md:mx-20 lg:mx-40 mx-12'>
     <Pitch_line  /> </div> 
     <Slideshow />
     <div className='bg-primary'> <Benefits  /></div> 
     <div><Clients/> </div>
     <How_its_work/> 
     <div className='bg-caseStudy' ><CaseStudy/></div>  
     <ClientsView /> 
     <div className='bg-contactus'><ContactUs/></div>  
     <div className='bg-footer'><Footer/></div> 

     
    
    </>
    
  )
}

export default App  
