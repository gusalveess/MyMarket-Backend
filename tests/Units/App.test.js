import request from "supertest";
import app from "../../src/app.js";

describe("App", () => {

    let server;

    beforeAll((done) => {
      server = app.listen(done);
    });
  
    afterAll((done) => {
      server.close(done);
    });
  

  it("should start the server and return status code 200", async () => {
    const response = await request(app).get("/search");
    expect(response.status).toBe(200);
  });

  it("should return status code 404 and error message for unknown routes", async () => {
    const response = await request(app).get("/404");
    expect(response.status).toBe(404);
    expect(response.body).toEqual(expect.objectContaining({}));
  });
});
