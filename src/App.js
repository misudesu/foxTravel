import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import Home from './Page/Home'
import Rightside from './Page/Rightside';
import Side from './Page/Side'
function App() {
  return (
   <div>
 <Router>
  <div className='flex '> 
<Side/>
  <Routes> 
  <Route exact path="/" element ={<Home/>} />
    </Routes>
    <Rightside/>
    </div>
  </Router> 
   </div>
  );
}

export default App;
