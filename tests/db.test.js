
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

const image_details500 = [
  [
      {
          "BPI_catKey": 500,
          "mus_physical_description": "The hearse of Henry Frederick, Prince of Wales, with his embalmed body lying in state beneath a funeral canopy. The second state uses an additional plate which extends the royal arms and Prince's feathers at the top of the catafalque, and adds another inscription.  1612 Engraving",
          "mus_comments": "Hind lists the various books in which impressions of this plate appear. For the second state, see 1863,0808.62.",
          "bm_codex_object_Label": "Hole: hearse of Henry Frederick, Prince of Wales. 1612",
          "bm_codex_object_WebImgFName": "114098.jpg"
      }
  ],
  {
      "fieldCount": 0,
      "affectedRows": 0,
      "insertId": 0,
      "info": "",
      "serverStatus": 34,
      "warningStatus": 0,
      "changedRows": 0
  }
]


describe("Test case for bpi1700 database", () => {
  it("test case for getting data from bpi cat number", async () => {
    const response = await request(app).get("/api/bpi_cat/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(bpi_cat500);
  }); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image data from bpi cat number", async () => {
    const response = await request(app).get("/api/image_details/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_details500);
  }
  ); 
});


// close things off after the tests have finished
afterAll(async () => {
  await server.close();
  await closeConnection.end();
});


