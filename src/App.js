import './App.css';

const Banner = () => {
  return (
    <h1 className='d-flex justify-content-center align-items-center shadow-sm p-5 bg-light text-primary'>Sextant Network Stats Dashboard</h1>
  )
}

const Exhibit = (props) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Banner />
      <Exhibit title="Latency"/>
    </>
  );
}

export default App;
