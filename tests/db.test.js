
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

const image_inscription500 = [
  [
      {
          "mus_inscription_content": "With two columns of four verses, one in Latin by Hugo Holland, the other in English by George Chapman, and mottoes in the funeral canopy.The second state has an additional title at top 'The Herse and Representacion of our late Highe and Mighty Henry Prince of Wales &c' and names below 'Guli Holus sculp' and 'Lond print for Jo Budge'."
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

const image_dimensions500 = [
  [
      {
          "mus_dimension_measurement_unit": "mm",
          "mus_dimension": "H",
          "mus_dimension_value": "320.00"
      },
      {
          "mus_dimension_measurement_unit": "mm",
          "mus_dimension": "W",
          "mus_dimension_value": "228.00"
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
const image_producers500 = [
  [
      {
          "mus_object_production_person": "Hole, William (1607 fl-1624 died)",
          "al_production_person_assDesc": "Print made by"
      }
  ],
  {
      "fieldCount": 0,
      "affectedRows": 0,
      "insertId": 0,
      "info": "",
      "serverStatus": 2,
      "warningStatus": 0,
      "changedRows": 0
  }
]

const image_schools500 = [
  [
      {
          "bm_alias_schoolKey": 531,
          "bm_school": "British",
          "bm_school_th_h": "11.7",
          "bm_school_th_i": "x17177",
          "bm_school_com": "",
          "BPI_catKey": 500,
          "al_schoolKey": 2
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


describe("Test case for bpi1700 database", () => {
  it("test case for image inscription from bpi cat number", async () => {
    const response = await request(app).get("/api/image_inscription/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_inscription500);
  }
  ); 
});


describe("Test case for bpi1700 database", () => {
  it("test case for image dimensions from bpi cat number", async () => {
    const response = await request(app).get("/api/image_dimensions/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_dimensions500);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image producers from bpi cat number", async () => {
    const response = await request(app).get("/api/image_producers/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_producers500);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image schools from bpi cat number", async () => {
    const response = await request(app).get("/api/image_schools/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_schools500);
  }
  ); 
});

// close things off after the tests have finished
afterAll(async () => {
  await server.close();
  await closeConnection.end();
});


