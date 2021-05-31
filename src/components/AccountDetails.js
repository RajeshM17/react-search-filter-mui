import { useState, useEffect } from 'react';
import Web3 from 'web3';
import CustomizedMenus from './Menu';
import CustomizedSnackbars from './SnackbarAlert';
function AccountDetails() {
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const [account, setAccount] = useState('');
  const [network, setNetwork] = useState('');
  const [balance, setBalance] = useState('');

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // DO NOTHING...
    }
  };
  async function loadBlockchainData() {
    const web3 = new Web3(
      Web3.givenProvider || 'http://localhost:8545',
    );
    const networkName = await web3.eth.net.getNetworkType();
    setNetwork(networkName);
    //fetch account
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const WalletBalance = await web3.eth.getBalance(accounts[0]);
    setBalance(WalletBalance);
  }
  useEffect(() => {
    setMetamaskInstalled(typeof window.web3 !== 'undefined');
    if (metamaskInstalled) {
      loadWeb3();
      loadBlockchainData();
    }
  }, [metamaskInstalled]);
  return (
    <>
      {metamaskInstalled ? (
        <>
          <CustomizedSnackbars display={metamaskInstalled} />
          <CustomizedMenus
            account={account}
            balance={balance}
            network={network}
          />
        </>
      ) : (
        <CustomizedSnackbars display={metamaskInstalled} />
      )}
    </>
  );
}

export default AccountDetails;
