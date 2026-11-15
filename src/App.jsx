
import './App.css'
import doctorImg from './assets/drvijay1.jpg' 
function App() {

  return (
    <>
      <div id="root" className='w-full h-full ' >
        <div className=' columns-2 absolute w-[1200px] h-[750px] p-10 rounded-2xl shadow-md border border-gray-100 m-[200px] '>

          <div className=''>

            <img src={doctorImg} alt="Doctor Profile Image" width="320px"/>

          </div>

          <div className=''>

            <p>Dr. Vijay Kumar</p>

            <p>वरिष्ठ कंसल्टेंट – कार्डियोलॉजी

Senior Consultant – Interventional Cardiologist

हृदय रोगों के उपचार एवं इंटरवेंशनल कार्डियोलॉजी के क्षेत्र में 20 वर्षों से अधिक का अनुभव रखने वाले विशेषज्ञ चिकित्सक।</p>

          </div>
          <div>
            <p>MBBS (Hons.) </p>

<p>MD (Medicine)</p>

<p>DM (Cardiology) </p>

<p>FACC (USA)

FSCAI (USA)</p>
          </div>



        </div>
      </div>
    </>
  )
}

export default App
