import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import mocker from 'mocker-data-generator'

export default {
  getUsers() {
    const user = {
      name: {
        faker: 'name.findName'
      },
      color: {
        values: ['RED', 'GREEN', 'BLUE']
      },
      speed: {
        faker: 'random.number({"min": 20, "max": 250})'
      },
      time: {
        faker: 'random.number'
      }
    }
    let data = mocker()
      .schema('users', user, 50)
      .buildSync()
    let mock = new MockAdapter(axios);
    mock.onGet("/users").reply(200, {
      users: data.users,
    });
    return axios.get('/users');
  },
}
