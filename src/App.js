import './App.css'; 
import { BrowserRouter, Route, Routes, Link,} from "react-router-dom";
import { NotFound }  from "./components/not_found";
import { Home } from "./components/Home";
import Login from "./Login";

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
       
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
        <Route path='/ARS' element={<ARS />} />
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
    <h2>Manchester City</h2>
    <p>記事画面です</p>
    <Login/>
    </>
  )
}

function ARS(){
  return(
    <>
    <h2>Arsenal</h2>
    <p>記事画面です</p>
    </>
  )
}
function NEW(){
  return(
    <>
    <h2>NewCastle United</h2>
    <p>記事画面です</p>
    </>
  )
}
function BHA(){
  return(
    <>
    <h2>Brighton</h2>
    <p>記事画面です</p>
    </>
  )
}
function AVL(){
  return(
    <>
    <h2>Aston Villa</h2>
    <p>記事画面です</p>
    </>
  )
}

function BRE(){
  return(
    <>
    <h2>Brentford</h2>
    <p>記事画面です</p>
    </>
  )
}

function BOU(){
  return(
    <>
    <h2>Brighton</h2>
    <p>記事画面です</p>
    </>
  )
}
function MUN(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}
function NFO(){
  return(
    <>
    <h2>Brighton</h2>
    <p>記事画面です</p>
    </>
  )
}
function BUR(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}function CHE(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}function CRY(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}function EVE(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}function FUL(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}function LIV(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}
function LUT(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}
function SHU(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}
function TOT(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}
function WHU(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}
function WOL(){
  return(
    <>
    <h2>Manchester United</h2>
    <p>記事画面です</p>
    </>
  )
}
export default App;
