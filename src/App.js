import './App.css';
import Test from './components/Test';

function App() {
  return (
    <div>
      <div className="App">
        <h3 align="center">This is my custom components</h3>
        {/*
        nama element: h3
        attribute / properties: align 
        */}

        <Test name="Keitut" city="Nganjuk" fontColor="pink" 
          avatar="https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png">
          Bocil tergemoi.
          <button>Tombol kei</button>
        </Test>
        <Test name="Ibu" city="Blitar" fontColor="purple" 
          avatar="https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png">
          Ibuku yang paling hebat.
        </Test>
        <Test name="Sherly" city="Bengkulu" fontColor="black" 
          avatar="https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png">
          Wanita ter-alpha.
        </Test>
      </div>

      <div></div>
    </div>
  );
}

export default App;
