import Web3 from 'web3';

export const loadWeb3 = async () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // DO NOTHING...
    }
  } catch (error) {
    if (error.code === 4001) {
      console.log('Please retry to login');
    } else if (error.code === -32002) {
      console.log('Please login with credentials');
    } else {
      console.log(error.message);
    }
  }
};
