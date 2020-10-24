import test from 'japa';
import supertest from 'supertest';

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`;

interface IPagesData {
  name: string,
  path: string,
  data?: Object
}

test.group('Pages availability', () => {
  const testingData: IPagesData[] = [
    {
      name: "Home page",
      path: '/',
    },
    {
      name: "Register page",
      path: '/register',
    },
    {
      name: "Login page",
      path: '/login',
    }
  ];

  for (const data of testingData){
    test(data.name, async () => {
      await supertest(BASE_URL)
        .get(data.path)
        .expect(200);
    });
  }
});
