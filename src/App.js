import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

// Comp should mandatorily return JSX.
// functional component with named fn 
function App() {
  return(
    <div className="App">
      <Header></Header>
      <h1>Success</h1>
      <Footer />
    </div>
  )
}

export default App;
