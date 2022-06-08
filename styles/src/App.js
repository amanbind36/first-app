import logo from './logo.svg';
import './App.css';







const Applogo=styled.img`
height:40vmin;
pointer-events:none;

@media (prefers-reduced-motion: no-preference){
  animation:App-logo-spin infinite 20s linear;
}
`
;


function App() {
  return (
    <AppStyled >
      <AppHeader >
        <Applogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </AppHeader>
    </AppStyled>
  );
}

export default App;
