import test from 'japa';
import User from 'App/Models/User';

test.group('DB tests', () => {
  test('Checking password hashing', async (assert) => {
    const user = new User();
    user.email = '123@mail.ru';
    user.password = 'pass';
    await user.save();

    assert.notEqual(user.password, 'pass');
  });
})
