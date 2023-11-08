import './App.css'; 
import { BrowserRouter, Route, Routes, Link,} from "react-router-dom";
import { NotFound }  from "./components/not_found";
import { Home } from "./components/Home";
import Login from "./Login";
import  Form  from "./components/Form";
import  Form2  from "./components/Form2";
import  Form3  from "./components/Form3";
import  Form4  from "./components/Form4";
import  Form5  from "./components/Form5";
import  Form6  from "./components/Form6";
import  Form7  from "./components/Form7";
import  Form8  from "./components/Form8";
import  Form9  from "./components/Form9";
import  Form10  from "./components/Form10";
import  Form11  from "./components/Form11";
import  Form12  from "./components/Form12";
import  Form13  from "./components/Form13";
import  Form14  from "./components/Form14";
import  Form15  from "./components/Form15";
import  Form16  from "./components/Form16";
import  Form17  from "./components/Form17";
import  Form18  from "./components/Form18";
import  Form19  from "./components/Form19";
import  Form20  from "./components/Form20";


function App() {
  return (
    <>
    <BrowserRouter>
    <div>
    <Login/>
      <h1>Premier League Squear</h1>
      <menu>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ARA">Arsenal</Link></li>
        <li><Link to="/AVL">Aston Villa</Link></li>
        <li><Link to="/BOU">Bournemouth</Link></li>
        <li><Link to="/BHA">Brighton</Link></li>
        <li><Link to="/BRE">Brentford</Link></li>
        <li><Link to="/BUR">Burnley</Link></li>
        <li><Link to="/CHE">Chealsea</Link></li>
        <li><Link to="/CRY">Crystal Palace</Link></li>
        <li><Link to="/EVE">Everton</Link></li>
        <li><Link to="/FUL">Fulham</Link></li>
        <li><Link to="/LIV">Liverpool</Link></li>
        <li><Link to="/LUT">Luton Town</Link></li>
        <li><Link to="/MCI">Manchester City</Link></li>
        <li><Link to="/MUN">Manchester United</Link></li>
        <li><Link to="/NEW">NewCastle United</Link></li>
        <li><Link to="/NFO">Nottingham Forest</Link></li>
        <li><Link to="/SHU">Sheffield United</Link></li>
        <li><Link to="/TOT">Tottenham Hotspur</Link></li>
        <li><Link to="/WHU">West Ham United</Link></li>
        <li><Link to="/WOL">Wolverhampton Wanderers</Link></li>
      </menu>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/MCI' element={<MCI />} />
        <Route path='/ARA' element={<ARA />} />
        <Route path='/MUN' element={<MUN />} />
        <Route path='/NEW' element={<NEW />} />
        <Route path='/LIV' element={<LIV />} />
        <Route path='/BHA' element={<BHA />} />
        <Route path='/AVL' element={<AVL />} />
        <Route path='/TOT' element={<TOT />} />
        <Route path='/BRE' element={<BRE />} />
        <Route path='/FUL' element={<FUL />} />
        <Route path='/BOU' element={<BOU />} />
        <Route path='/BUR' element={<BUR />} />
        <Route path='/CHE' element={<CHE />} />
        <Route path='/CRY' element={<CRY />} />
        <Route path='/EVE' element={<EVE />} />
        <Route path='/LUT' element={<LUT />} />
        <Route path='/NFO' element={<NFO />} />
        <Route path='/SHU' element={<SHU />} />
        <Route path='/WHU' element={<WHU />} />
        <Route path='/WOL' element={<WOL />} />


      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}


function MCI(){
  return(
    <>
    <h2 className="team-title">Manchester City</h2>
    <Form />
    </>
  )
}

function ARA(){
  return(
    <>
    <h2 className="team-title">Arsenal</h2>
    <Form2 />
    </>
  )
}
function NEW(){
  return(
    <>
    <h2 className="team-title">Newcastle United</h2>
    <Form3 />
    </>
  )
}
function BHA(){
  return(
    <>
    <h2 className="team-title">Brighton</h2>
    <Form4 />
    </>
  )
}
function AVL(){
  return(
    <>
    <h2 className="team-title">Aston Villa</h2>
    <Form5 />
    </>
  )
}

function BRE(){
  return(
    <>
    <h2 className="team-title">Brentford</h2>
    <Form6 />
    </>
  )
}

function BOU(){
  return(
    <>
    <h2 className="team-title">Bournemouth</h2>
    <Form7 />
    </>
  )
}
function MUN(){
  return(
    <>
    <h2 className="team-title">Manchester United</h2>
    <Form8 />
    </>
  )
}
function NFO(){
  return(
    <>
    <h2 className="team-title">Nottingham Forest</h2>
    <Form9 />
    </>
  )
}
function BUR(){
  return(
    <>
    <h2 className="team-title">Burnley</h2>
    <Form10 />
    </>
  )
}function CHE(){
  return(
    <>
    <h2 className="team-title">Chealsea</h2>
    <Form11 />
    </>
  )
}function CRY(){
  return(
    <>
    <h2 className="team-title">Crystal Palace</h2>
    <Form12 />
    </>
  )
}function EVE(){
  return(
    <>
    <h2 className="team-title">Everton</h2>
    <Form13 />
    </>
  )
}function FUL(){
  return(
    <>
    <h2 className="team-title">Fulham</h2>
    <Form14 />
    </>
  )
}function LIV(){
  return(
    <>
    <h2 className="team-title">Liverpool</h2>
    <Form15 />
    </>
  )
}
function LUT(){
  return(
    <>
    <h2 className="team-title">Luton Town</h2>
    <Form16 />
    </>
  )
}
function SHU(){
  return(
    <>
    <h2 className="team-title">Sheffield United</h2>
    <Form17 />
    </>
  )
}
function TOT(){
  return(
    <>
    <h2 className="team-title">Tottenham Hotspur</h2>
    <Form18 />
    </>
  )
}
function WHU(){
  return(
    <>
    <h2 className="team-title">West Ham United</h2>
    <Form19 />
    </>
  )
}
function WOL(){
  return(
    <>
    <h2 className="team-title">Wolverhampton Wanderers</h2>
    <Form20 />
    </>
  )
}
export default App;
