import Card from './Card';

class IPCard extends Card {
  constructor(props) {
    super(props)
    this.state = {address: ""};
  }
  async componentDidMount() {
    // Get props
    const API_URL = this.props.isV4 ? "https://api.ipify.org" : "https://api64.ipify.org";
    const address = await fetch(API_URL)
    this.setState({ip: address})
  }
  render() {
    return (
      <p>{this.state.ip}</p>
    )
  }
}

const Exhibit = (props) =>
{
  return (
    <div className='d-flex flex-column gap-1 container mx-auto bg-light h-50 py-5 px-4 shadow'>
      <h2>{props.exhibitName}</h2>
      <div className="d-flex gap-5">
        <IPCard title='IPv4 Address' text="" isV4={true}/>
        <IPCard title='IPv6 Address' text="" isV4={false}/>
      </div>

    </div>
  )
}

export default Exhibit;