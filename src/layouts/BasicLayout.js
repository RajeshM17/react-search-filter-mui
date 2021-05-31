import FormContainer from '../container/FormContainer';
import AccountDetails from '../Components/AccountDetails';
export default function BasicLayout() {
  return (
    <div className="BasicLayout">
      <h1>Displaying Dynamic Data with Filtering from json file</h1>
      <AccountDetails />
      <FormContainer />
    </div>
  );
}
