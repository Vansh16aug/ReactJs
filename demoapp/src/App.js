// import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response=[
      {
        name:"Nirma",
        day:"20",
        month:"June",
        year:"1998"
      },
      {
        name:"SurfExcel",
        day:"12",
        month:"July",
        year:"1999"
      },
      {
        name:"555",
        day:"16",
        month:"August",
        year:"2005"
      }
    ];
  return (
    
    <div>
      <Item name={response[0].name}>Hello ji mai hu apki first Item</Item>
      <ItemDate day={response[0].day} month ={response[0].month} year={response[0].year}></ItemDate>

      <Item name={response[1].name}></Item>
      <ItemDate day={response[1].day} month ={response[1].month} year={response[1].year}></ItemDate>

      <Item name={response[2].name}></Item>
      <ItemDate day={response[2].day} month ={response[2].month} year={response[2].year}></ItemDate>

      <div className="App">
        hellooo jii
      </div>
    </div>
  );
}

export default App;
