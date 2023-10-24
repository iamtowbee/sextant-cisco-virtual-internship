const Card = (props) =>
{
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}

const Exhibit = (props) =>
{
  return (
    <div className='d-flex gap-5 container mx-auto bg-light h-50 py-5 px-4'>
      <h2>{props.exhibitName}</h2>
      <Card title='Latency' text='25 ms' />
      <Card title='Uptime' text='93%' />

    </div>
  )
}

export default Exhibit;