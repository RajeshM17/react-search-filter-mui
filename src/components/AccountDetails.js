import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import CustomizedMenus from './Menu';
import CustomizedSnackbars from './SnackbarAlert';

function AccountDetails() {
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const [account, setAccount] = useState('');
  const [network, setNetwork] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    setMetamaskInstalled(typeof window.web3 !== 'undefined');
    if (metamaskInstalled) {
      loadWeb3();
      loadBlockchainData();
    }
    console.log('Component is mounted in the DOM');
  }, [metamaskInstalled]);

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

  const loadBlockchainData = async () => {
    const web3 = new Web3(
      Web3.givenProvider || 'http://localhost:8545',
    );

    const networkName = await web3.eth.net.getNetworkType();
    setNetwork(networkName);
    //fetch account
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    const walletBalance = await web3.eth.getBalance(accounts[0]);
    setBalance(walletBalance);
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default AccountDetails;
