import './App.css';

const Banner = () => {
  return (
    <h1 className='d-flex justify-content-center align-items-center shadow-sm p-5 bg-light text-primary mb-5 '>Sextant Network Stats Dashboard</h1>
  )
}

const Card = (props) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}

const Exhibit  = () => {
  return (
    <div className='d-flex gap-5 container mx-auto bg-light h-50 py-5 px-4'>
      <Card title='Latency' text='25 ms' />
      <Card title='Uptime' text='93%' />

    </div>
  )
}

function App() {
  return (
    <>
      <Banner />
      <Exhibit />
    </>
  );
}

export default App;
