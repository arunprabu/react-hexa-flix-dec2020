import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Comp should mandatorily return JSX.
// functional component with named fn 
function App() {
  return(
    <div className="App">
      <Header></Header>
      <div className="mt-5">
        <h1>Success</h1>
      </div>
      <Footer />
    </div>
  )
}

export default App;
