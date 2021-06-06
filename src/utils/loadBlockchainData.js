import { useState } from 'react';
import Web3 from 'web3';

export const loadBlockchainData = async () => {

  const web3 = new Web3(
    Web3.givenProvider || 'http://localhost:8545',
  );
 const accounts = await web3.eth.getAccounts();
  const network = await web3.eth.net.getNetworkType();
  const balance = await web3.eth.getBalance(accounts[0]);
  console.log('accounts',accounts,'balance',balance);
  return {accounts,network,balance};
};
