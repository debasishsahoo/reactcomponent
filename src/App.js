import Heading from './Heading';
import Img from './Img';
import Profile from './Profile';
import Social from './Social';
import Button from './Button';
import './App.css';

function App() {
  return (
    <>
      <Heading />
      <div className="card">
        <Img />
        <Profile />
        <Social />
        <Button />

      </div>
    </>
  );
}

export default App;
