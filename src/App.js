import './App.css';
import Test from './components/Test';
import Employee from './components/Employee';
import Accordion from './components/Accordion';

function App() {
  return (
    <div>
      <div className="App">
        <h3 align="center">This is my custom components</h3>
        {/*
        nama element: h3
        attribute / properties: align 
        */}

        <Test name="Keitut" city="Nganjuk" fontColor="pink" avatar="https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png">
          Bocil tergemoi.
          <button>Tombol kei</button>
        </Test>
        <Test name="Ibu" city="Blitar" fontColor="purple" avatar="https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png">
          Ibuku yang paling hebat.
        </Test>
        <Test name="Sherly" city="Bengkulu" fontColor="black" avatar="https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png">
          Wanita ter-alpha.
        </Test>
      </div>

      <div>
        <Employee
        name="Aulia Putri Ramadhani"
        date="19-10-2004"
        gender="Female"
        email="aulia@gmail.com"
        telepon="088888888"
        divisi="Programming"
        image="https://smktelkom-mlg.sch.id/assets/upload/image/testi/img3.png"
        />
        <Employee
        name="Ijlal Ganteng"
        date="22-08-2004"
        gender="Male"
        email="ijlal@gmail.com"
        telepon="088888889"
        divisi="Programming"
        image="https://thumb.viva.co.id/media/frontend/thumbs3/2019/11/04/5dbfb7b91a197-jungkook-bts_1265_711.jpg"
        />
      </div>

      <div>
        <Accordion
        judul="Biodata"
        teks="Nama saya adalah Aulia Putri Ramadhani, saya berasal dari Mars, saat ini saya bersekolah di Neptunus."
        />
        <Accordion
        judul="Hobi"
        teks="Saya memiliki hobi yang normal, yaitu tidur."
        />
      </div>
    </div>
  );
}

export default App;
