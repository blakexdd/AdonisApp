import test from 'japa';
import supertest from 'supertest';

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`;

test.group('User access', () => {
  test('Checking if unathorized user can access private page', async () => {
      await supertest(BASE_URL)
        .get('/currencies')
        .expect(401);
  });
});
