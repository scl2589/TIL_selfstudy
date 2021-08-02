import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">BUTTON</Button>
        <Button color="gray" >BUTTON</Button>
        <Button color="gray" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">BUTTON</Button>
      </div>
      {/* outline */}
      <div className="buttons">
        <Button size="large" outline={true}>BUTTON</Button>
        <Button color="gray" outline>BUTTON</Button>
        <Button color="pink" size="small" outline>BUTTON</Button>
      </div>
      {/* full width */}
      <div className="buttons">
        <Button size="large" fullWidth className="customized-button">BUTTON</Button>
        <Button size="large" color="gray" fullWidth>BUTTON</Button>
        <Button 
        size="large" 
        color="pink" 
        fullWidth 
        onClick={() => { 
          console.log('클릭!')
        }}
        onMouseMove={() => {
          console.log("마우스무브~~")
        }}
        >BUTTON</Button>
      </div>
    </div>
  );
}

export default App;
