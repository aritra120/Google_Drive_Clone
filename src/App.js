import './App.css';
import Header from './components/header'
import SideBar from './components/sidebar'
import FilesView from './components/filesview/FilesView'

function App() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
      <FilesView/>
    </div>
  );
}

export default App;
