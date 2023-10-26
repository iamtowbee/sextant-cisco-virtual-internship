import Card from './Card';

class LatencyCard extends Card
{
  constructor(props)
  {
    super(props)
    this.state = { 
      latency: null
    };
  }
  async componentDidMount()
  {
    const ws = new WebSocket("ws://localhost:55455")

    // await ws.send("Hello")
    ws.onmessage = (event) =>
    {
      let timedelta = Date.now() - event.data
      this.setState({ latency: timedelta })
    }
  }

  render()
  {
      return (
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.state.latency} ms</p>
          </div>
        </div >
      )
    }
  }

export default LatencyCard;