const { Helper } = codeceptjs;

class MyApiHelper extends Helper {

  async sendTestRequest() {
    return await this.helpers['REST'].sendGetRequest('/any-query');
  }

}

module.exports = MyApiHelper;
