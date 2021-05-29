import Web3 from 'web3';
import React,{useState} from 'react'

 const loadBlockchainData=async()=> {
  var [userDetails] = useState({
    account: '',
    balance: '',
    network: ''
  });
  
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
   
    const network = await web3.eth.net.getNetworkType();
    setNetwork(network);
    //fetch account
   const account = await web3.eth.getAccounts();
    setAccount(account[0]);

    const balance = await web3.eth.getBalance(accounts[0]);
    setBalance(balance);
  }
  export default loadBlockchainData;