import FormContainer from '../container/FormContainer';
import AccountDetails from '../components/AccountDetails';
import Datatable from '../components/Datatable';
import data from '../data/MOCK_DATA.json';
export default function BasicLayout() {
  return (
    <div className="BasicLayout">
      <h1>Displaying Dynamic Data with Filtering from json file</h1>
      <FormContainer />
      <AccountDetails />
    </div>
  );
}
