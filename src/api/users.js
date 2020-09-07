import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import mocker from 'mocker-data-generator'

export default {
  getUsers(filterName = '') {
    let fakerFindName = 'name.findName'
    fakerFindName = filterName ? fakerFindName.concat(`(${filterName})`) : fakerFindName;
    const user = {
      name: {
        faker: fakerFindName
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
