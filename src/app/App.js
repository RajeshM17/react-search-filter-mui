import './App.css';
// import data from '../data/MOCK_DATA.json';
import FormContainer from '../container/FormContainer';
import AccountDetails from '../components/AccountDetails';
// import SizePaginationGrid from '../components/Pagination';
export default function App() {
  return (
    <div className="App">
      <h1>Displaying Dynamic Data with Filtering from json file</h1>
      {/* <SizePaginationGrid data={data} /> */}
      <FormContainer />
        <AccountDetails/>
    </div>
  );
}
