import './App.css';
import Banner from './components/Banner'
import Exhibit from './components/Exhibit'
import IPCard  from './components/IPCard';
import LatencyCard from './components/LatencyCard';

function App() {
  return (
    <>
      <Banner bannerText='Sextant Network Stats Dashboard'/>
      <Exhibit exhibitName='IP Address'>
        <IPCard title="IPv4 Address" url='https://api.ipify.org?format=json'></IPCard>
        <IPCard title="IPv6 Address" url='https://api64.ipify.org?format=json'></IPCard>
      </Exhibit>

      <Exhibit exhibitName='Packets'>
        <LatencyCard title="Packet Latency" url='https://api.ipify.org?format=json'></LatencyCard>
      </Exhibit>
    </>
  );
}

export default App;
