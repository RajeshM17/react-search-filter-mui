import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { loadWeb3 } from '../Utils/loadWeb3';
import CustomizedMenus from './Menu/Menu';
import { CustomizedSnackbars } from './Menu/SnackbarAlert/SnackbarAlert';
const AccountDetails = () => {
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const [account, setAccount] = useState('');
  const [network, setNetwork] = useState('');
  const [balance, setBalance] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const menuName = 'Account Details';

  const loadBlockchainData = async () => {
    const web3 = new Web3(
      Web3.givenProvider || 'http://localhost:8545',
    );
    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      const networkName = await web3.eth.net.getNetworkType();
      setNetwork(networkName);

      const WalletBalance = await web3.eth.getBalance(accounts[0]);
      setBalance(WalletBalance);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  useEffect(() => {
    setMetamaskInstalled(typeof window.web3 !== 'undefined');
    if (metamaskInstalled) {
      loadWeb3();
      loadBlockchainData();
    }
  }, [metamaskInstalled, loggedIn]);
  return (
    <>
      {loggedIn ? (
        <>
          <CustomizedSnackbars
            display={loggedIn}
            severity="success"
            message="Successfully logged In"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          />
          <CustomizedMenus
            menuName={menuName}
            account={account}
            balance={balance}
            network={network}
          />
        </>
      ) : (
        <CustomizedSnackbars
          display={loggedIn}
          severity="error"
          message="Please Login into Metamask"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
      )}
      {metamaskInstalled ? (
        <CustomizedSnackbars
          display={metamaskInstalled}
          severity="success"
          message="Metamask is already Installed"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      ) : (
        <CustomizedSnackbars
          display={metamaskInstalled}
          severity="error"
          message="Please install Metamask"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      )}
    </>
  );
};

export default AccountDetails;
