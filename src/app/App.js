import './App.css';
import FormContainer from '../container/FormContainer';
import AccountDetails from '../components/AccountDetails';
export default function App() {
  return (
    <div className="App">
      <h1>Displaying Dynamic Data with Filtering from json file</h1>
      <FormContainer />
      <AccountDetails/>
    </div>
  );
}
