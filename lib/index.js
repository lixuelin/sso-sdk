class SSO {
  constructor(options) {
    this.params = options;
  }

  login() {
    console.log("login in");
  }

  loginOut() {
    console.log("login out");
  }
}

module.exports = SSO;
