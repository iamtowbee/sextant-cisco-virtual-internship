import Card from './Card';

class IPCard extends Card
{
  constructor(props)
  {
    super(props)
    this.state = { 
      url: props.url,
      ip: null 
    };
  }
  async componentDidMount()
  {
   const response = await fetch(this.state.url);
   const data = await response.json()
   this.setState({ip: data.ip})
  }

  render()
  {
      return (
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.state.ip}</p>
          </div>
        </div >
      )
    }
  }

export default IPCard;