import './App.css';
import Banner from './Banner'
import Exhibit from './Exhibit'
import IPCard  from './IPCard';
import Card from './Card';
function App() {
  return (
    <>
      <Banner bannerText='Sextant Network Stats Dashboard'/>
      <Exhibit exhibitName='IP Address' body=''>
        <IPCard title="IPv4 Address" url='https://api64.ipify.org?format=json'></IPCard>
        <IPCard title="IPv6 Address" url='https://api64.ipify.org?format=json'></IPCard>
      </Exhibit>
    </>
  );
}

export default App;
