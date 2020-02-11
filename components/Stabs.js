import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { resetIdCounter } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
resetIdCounter();
const Stabs =  props => (
  <Tabs>
    <TabList>
      <Tab>Description</Tab>
    </TabList>
 
    <TabPanel>
    <h2>{props.item.title}</h2>
      <p>
        {props.item.description}
      </p>
    </TabPanel>
  </Tabs>
);
export default Stabs