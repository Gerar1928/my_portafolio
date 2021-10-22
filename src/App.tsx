import './App.scss';

const App = () => {
  return (
    <div className='container'>
      <div id='navbar'>
        <div className='logo'>Logo</div>
        <div className='menu'>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Projects</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>
      <div id='header'>
        <div id='title'>
          <p className='name'>Gerar Almonte</p>
          <p className='profession'>Software engineer</p>
        </div>
        <div id='buttons'>
          <span className='button'>
            <a href='#'>I need a website</a>
          </span>
          <span className='button'>
            <a href='#'>I'm looking to hire</a>
          </span>
        </div>
      </div>
      <div className='stars-container-one'></div>
      <div className='stars-container-two'></div>
      <div className='stars-container-three'></div>
    </div>
  );
}

export default App;