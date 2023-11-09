
const db = require("../connect");
const app = require("../app");
const request = require("supertest");

jest.useRealTimers();

describe("Test case for bpi1700 database", () => {
  it("test case for getting all bpi cat numbers", async () => {
    const response = await request(app).get("/bpi_cat");
    expect(response.status).toBe(200);
    db.close();
    done();
  }); 
});

/*

const user = {
  id: 5,
  name: "userNew5",
}; 

  const id = 5;
  const updateUserInfo = { id: 5, name: "user5" };

  describe("test case for postgresql crud app", () => {
  it("test case for getting all users", async () => {
   // const response = await request(db.getUsers);
    const response = await request(app).get("/Users");
    expect(response.status).toBe(200);
  }); 

  it("test case for creating a user", async () => {
    const createUser = await request(app).post("/createUser").send(user);
    console.log("response after creating user", createUser);
    expect(createUser.status).toBe(200);
    expect(createUser.body.isDeleted).toBeFalsy();
  });

  it("test case to update the user", async () => {
    const updateUser = await request(app).put("/updateUser").send(updateUserInfo);
    expect(updateUser.status).toBe(200);
    expect(updateUser.body.name).toBe(updateUser.name);
  });

  it("test case for deleting the user", async () => {
    const deleteUser = await request(app).delete("/deleteUser").send({ id });
    expect(deleteUser.status).toBe(204);
  }); 


beforeEach(() => {
  initializeDatabase();
});

afterEach(() => {
  clearDatabase();
});

*/ 

