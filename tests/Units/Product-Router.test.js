import request from "supertest";
import app from "../../src/app.js";

describe("Product Router", () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("GET /search", () => {
    it("should call searchController and return status code 200", async () => {
      const response = await request(server).get("/search");
      expect(response.status).toBe(200);
    });
  });
});
