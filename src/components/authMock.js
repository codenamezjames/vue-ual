/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Authenticator, UALError, UALErrorType, User } from 'universal-authenticator-library';
const signatureResponse = {
    wasBroadcast: true,
    transactionId: 'Mock transaction Id'
};

function MockUser (accountName, chains) {
  new User(chains)
  this.accountName = '';
  this.chains = [];
  this.accountName = accountName;
  this.chains = chains || [{chainId:0}];
}
MockUser.prototype = Object.create(User.prototype);
MockUser.prototype.constructor = MockUser;

MockUser.prototype.toString = function() {
  return 'MockUser > ' + User.prototype.toString.call(this)
}
MockUser.prototype.getKeys = function() {
    return Promise.resolve([]);
}
MockUser.prototype.signTransaction = function(transaction, config) {
    console.info('Requested signature config', config);
    console.info('Requested signature for', transaction);
    return Promise.resolve(signatureResponse);
}
MockUser.prototype.getAccountName = function() {
    return Promise.resolve(this.accountName);
}
MockUser.prototype.getChainId = function() {
    return Promise.resolve(this.chains[0].chainId);
}
MockUser.prototype.signArbitrary = function(publicKey, data, helpText) {
    return new Promise((resolve, reject) => {
        reject(new UALError('Not implemented', UALErrorType.Signing, null, 'Mock User'));
    });
}
MockUser.prototype.verifyKeyOwnership = function(_) {
    return new Promise((resolve) => {
        resolve(true);
    });
}


function MockAuthenticator (chains) {
  new Authenticator(chains)
  this.loading = true;
}
MockAuthenticator.prototype = Object.create(Authenticator.prototype);
MockAuthenticator.prototype.constructor = MockAuthenticator;

MockAuthenticator.prototype.toString = function() {
  return 'MockAuthenticator > ' + Authenticator.prototype.toString.call(this)
}

MockAuthenticator.prototype.getOnboardingLink = function() {
  return 'https://localhost';
}
MockAuthenticator.prototype.getStyle = function() {
  return {
      /* tslint:disable */
      icon: '',
      /* tslint:enable */
      textColor: 'white',
      background: 'blue',
      text: 'Mock Auths'
  };
}
MockAuthenticator.prototype.shouldRender = function() {
  return true;
}
MockAuthenticator.prototype.shouldAutoLogin = function() {
  return false;
}
MockAuthenticator.prototype.login = function(accountName) {
  alert('Mock Login Authenticator Triggered');
  console.info('Attempted login with ', accountName);
  // Simulate login delay response
  // return new Promise<[MockUser]>((resolve) => {
  //   setTimeout(() => {
  //     resolve([new MockUser(accountName || '', this.chains)])
  //   }, 4000)
  // })
  // return Promise.reject(new UALError('it broke', UALErrorType.Login, null, 'Mock Authenticator'))
  // Login without a delay response
  return Promise.resolve([new MockUser(accountName || '', this.chains)]);
}
MockAuthenticator.prototype.shouldRequestAccountName = function() {
  return Promise.resolve(true);
}
MockAuthenticator.prototype.logout = function() {
  console.info('Logging out');
  return Promise.resolve();
}
MockAuthenticator.prototype.init = async function() {
  this.loading = false;
}
MockAuthenticator.prototype.isLoading = function() {
  return this.loading;
}
MockAuthenticator.prototype.isErrored = function() {
  return false;
}
MockAuthenticator.prototype.getError = function() {
  return new UALError('Initialization Error', UALErrorType.Initialization, null, 'this guy');
}
MockAuthenticator.prototype.reset = function() {
  console.info('resetting mock authenticator');
}
MockAuthenticator.prototype.requiresGetKeyConfirmation = function() {
  return false;
}
export {MockAuthenticator, MockUser}