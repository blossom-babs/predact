import supertest from "supertest";
import app from "../../server";

fdescribe('Test Admin Routes', () => {  
  let originalTimeout:number;
  const req = supertest(app)

  beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('save admin data to db', async () =>{
    const res = await req.get('/api/v1/admin-to-db').set('Accept', 'application/json')
    console.log(res.body)
    expect(res.status).toBe(200)
  })
})