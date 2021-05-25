import React, { Component, Fragment } from 'react';
import Web3 from 'web3';
import CustomizedMenus from './Menu';
import CustomizedSnackbars from './SnackbarAlert';
class AccountDetails extends Component {
  async componentWillMount() {
    // Detect Metamask
    const metamaskInstalled = typeof window.web3 !== 'undefined';
    this.setState({ metamaskInstalled });
    if (metamaskInstalled) {
      await this.loadWeb3();
      await this.loadBlockchainData();
    }
    
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // DO NOTHING...
    }
  }
  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
   
    const network = await web3.eth.net.getNetworkType();
    this.setState({ networkName: network });
    
    //fetch account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const walletbalance = await web3.eth.getBalance(accounts[0]);
    this.setState({ balance: walletbalance });
  }
  constructor(props) {
    super(props);
    this.state = { account: '', balance: '', networkName: '' };
  }

  render() {
    return (
      <div className="container">
        { this.state.metamaskInstalled ?<Fragment>
        <CustomizedSnackbars display={this.state.metamaskInstalled}/>
        <CustomizedMenus account={this.state.account} balance={this.state.balance} networkName={this.state.networkName}/>
        </Fragment>:<CustomizedSnackbars display={this.state.metamaskInstalled}/>}
        
      </div>
    );
  }
}

export default AccountDetails;
