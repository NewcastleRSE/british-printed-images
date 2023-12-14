
jest.useRealTimers();

const { app, server, closeConnection } = require("../app");
const request = require("supertest");


describe("Test case for bpi1700 database", () => {
  it("test case for getting all bpi cat numbers", async () => {
    const response = (await request(app).get("/api/bpi_cat"));
    expect(response.status).toBe(200);
  }); 
}); 


const bpi_cat500 = [
  {
      "BPI_catKey": 500,
      "bm_prn": "PPA97507",
      "bm_calc_reg_no_expr": "1870,0514.2896",
      "collection": "British Museum",
      "mus_acquisition_note": "",
      "mus_comments": "Hind lists the various books in which impressions of this plate appear. For the second state, see 1863,0808.62.",
      "bpi_comment": "",
      "biblio_comment": ""
  }
];

describe("Test case for bpi1700 database", () => {
  it("test case for getting data from bpi cat number", async () => {
    const response = await request(app).get("/api/bpi_cat/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(bpi_cat500);
  }); 
});


afterAll(async () => {
  await server.close();
  await closeConnection.end();
});


