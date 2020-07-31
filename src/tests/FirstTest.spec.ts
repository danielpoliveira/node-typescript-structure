import { User } from '@models/User'
// import { User } from '../models/User'
test('It should be ok', () => {
  const user = new User()

  user.name = 'Daniel'

  expect(user.name).toEqual('Daniel')
})
