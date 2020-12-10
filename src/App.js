import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProgramList from './containers/ProgramList/ProgramList';
import ChannelList from './containers/ChannelList/ChannelList';
import TrendingShows from './containers/TrendingShows/TrendingShows';
import MyProfile from './containers/MyProfile/MyProfile';
import Subscription from './components/Subscription/Subscription';
import LifeCycleDemo from './containers/LifeCycleDemo/LifeCycleDemo';

// Comp should mandatorily return JSX.
// functional component with named fn 

function App() {
  return(
    <div className='text-center'>
      <Header></Header>
      <div className="container mt-5">
        <ProgramList />
        <hr />
        <ChannelList />
        <hr/>
        <TrendingShows total='10'/>
        <hr/>
        <MyProfile />
        <hr />
        <Subscription/>
        <hr />
        <LifeCycleDemo info='demo'/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App;
