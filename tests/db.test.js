
jest.useRealTimers();

const { app, server } = require("../app");
const request = require("supertest");

const image_details500 = {"output": {}, "recordset": [{"CatKey": "500", "Comments": "Hind lists the various books in which impressions of this plate appear. For the second state, see  British Museum 1863,0808.62.", "Description": "The hearse of Henry Frederick, Prince of Wales, with his embalmed body lying in state beneath a funeral canopy. The second state uses an additional plate which extends the royal arms and Prince's feathers at the top of the catafalque, and adds another inscription.  1612 Engraving", "Label": "Hole: hearse of Henry Frederick, Prince of Wales. 1612", "Name": "114098.jpg", "OtherLabel": "Hole: hearse of Henry Frederick, Prince of Wales. 1612", "Title": null}], "recordsets": [[{"CatKey": "500", "Comments": "Hind lists the various books in which impressions of this plate appear. For the second state, see  British Museum 1863,0808.62.", "Description": "The hearse of Henry Frederick, Prince of Wales, with his embalmed body lying in state beneath a funeral canopy. The second state uses an additional plate which extends the royal arms and Prince's feathers at the top of the catafalque, and adds another inscription.  1612 Engraving", "Label": "Hole: hearse of Henry Frederick, Prince of Wales. 1612", "Name": "114098.jpg", "OtherLabel": "Hole: hearse of Henry Frederick, Prince of Wales. 1612", "Title": null}]], "returnValue": 0, "rowsAffected": []};

const image_inscription500 = {"output": {}, "recordset": [{"mus_inscription_content": "With two columns of four verses, one in Latin by Hugo Holland, the other in English by George Chapman, and mottoes in the funeral canopy.The second state has an additional title at top 'The Herse and Representacion of our late Highe and Mighty Henry Prince of Wales &c' and names below 'Guli Holus sculp' and 'Lond print for Jo Budge'."}], "recordsets": [[{"mus_inscription_content": "With two columns of four verses, one in Latin by Hugo Holland, the other in English by George Chapman, and mottoes in the funeral canopy.The second state has an additional title at top 'The Herse and Representacion of our late Highe and Mighty Henry Prince of Wales &c' and names below 'Guli Holus sculp' and 'Lond print for Jo Budge'."}]], "returnValue": 0, "rowsAffected": []};

const image_dimensions500 = {"output": {}, "recordset": [{"mus_dimension": "H", "mus_dimension_measurement_unit": "mm", "mus_dimension_value": "320.00"}, {"mus_dimension": "W", "mus_dimension_measurement_unit": "mm", "mus_dimension_value": "228.00"}], "recordsets": [[{"mus_dimension": "H", "mus_dimension_measurement_unit": "mm", "mus_dimension_value": "320.00"}, {"mus_dimension": "W", "mus_dimension_measurement_unit": "mm", "mus_dimension_value": "228.00"}]], "returnValue": 0, "rowsAffected": []};

const image_producers500 = {"output": {}, "recordset": [{"al_production_person_assDesc": "Print made by", "mus_object_production_person": "Hole, William (1607 fl-1624 died)"}], "recordsets": [[{"al_production_person_assDesc": "Print made by", "mus_object_production_person": "Hole, William (1607 fl-1624 died)"}]], "returnValue": 0, "rowsAffected": []};

const image_schools500 = {"output": {}, "recordset": [{"bm_school": "British"}], "recordsets": [[{"bm_school": "British"}]], "returnValue": 0, "rowsAffected": []};

const image_subjects900 =  { "output":  {},"recordset":  [{ "heading": "Cloaks"},{ "heading": "Ermine",},{ "heading": "Wigs",},{ "heading": "Brooches", },{"heading": "Spaniards",}, {"heading": "Medals",},{ "heading": "Armour",},{"heading": "Royal portraits",}, ],"recordsets":  [ [ {"heading": "Cloaks", }, { "heading": "Ermine", }, {  "heading": "Wigs", },{  "heading": "Brooches",}, { "heading": "Spaniards",},  { "heading": "Medals",}, { "heading": "Armour", }, { "heading": "Royal portraits", }, ], ], "returnValue": 0, "rowsAffected":[],};

const image_prod_place600 = {"output": {}, "recordset": [{"mus_auth_place_mus_auth_thes_ancestry": "Europe, United Kingdom, England, Greater London,  London"}, {"mus_auth_place_mus_auth_thes_ancestry": "Europe, United Kingdom, England, Greater London,  London"}], "recordsets": [[{"mus_auth_place_mus_auth_thes_ancestry": "Europe, United Kingdom, England, Greater London,  London"}, {"mus_auth_place_mus_auth_thes_ancestry": "Europe, United Kingdom, England, Greater London,  London"}]], "returnValue": 0, "rowsAffected": []};

const image_comments600 = {"output": {}, "recordset": [{"mus_comments": "Evidently made at the time of the Revolution or soon after, as Faithorne senior died in 1691."}], "recordsets": [[{"mus_comments": "Evidently made at the time of the Revolution or soon after, as Faithorne senior died in 1691."}]], "returnValue": 0, "rowsAffected": []};

const image_biblio_ref560 = {"output": {}, "recordset": [{"bm_bib_xref": "IFF", "description": null}, {"bm_bib_xref": "Montaiglon", "description": null}], "recordsets": [[{"bm_bib_xref": "IFF", "description": null}, {"bm_bib_xref": "Montaiglon", "description": null}]], "returnValue": 0, "rowsAffected": []};

const image_assoc_names600 = {"output": {}, "recordset": [{"al_as_name_assDesc": "Portrait of", "bm_as_name": "Mary (1631-1660)"}, {"al_as_name_assDesc": "Portrait of", "bm_as_name": "Mary (1631-1660)"}], "recordsets": [[{"al_as_name_assDesc": "Portrait of", "bm_as_name": "Mary (1631-1660)"}, {"al_as_name_assDesc": "Portrait of", "bm_as_name": "Mary (1631-1660)"}]], "returnValue": 0, "rowsAffected": []};

const image_assoc_titles513 = {"output": {}, "recordset": [{"bm_alias_as_title": "Fables with his Life"}], "recordsets": [[{"bm_alias_as_title": "Fables with his Life"}]], "returnValue": 0, "rowsAffected": []};

const all_image_details500 =  {"output": {}, "recordset": [{"AssocName": "Henry Frederick (1594-1612)", "AssocNamePrefix": "Representation of", "CatKey": "500", "Description": "The hearse of Henry Frederick, Prince of Wales, with his embalmed body lying in state beneath a funeral canopy. The second state uses an additional plate which extends the royal arms and Prince's feathers at the top of the catafalque, and adds another inscription.  1612 Engraving", "Inscription": "With two columns of four verses, one in Latin by Hugo Holland, the other in English by George Chapman, and mottoes in the funeral canopy.The second state has an additional title at top 'The Herse and Representacion of our late Highe and Mighty Henry Prince of Wales &c' and names below 'Guli Holus sculp' and 'Lond print for Jo Budge'.", "Label": "Hole: hearse of Henry Frederick, Prince of Wales. 1612", "Name": "114098.jpg", "OtherLabel": "Hole: hearse of Henry Frederick, Prince of Wales. 1612", "Producer": "Hole, William (1607 fl-1624 died)", "ProductionPlace": null, "Title": null}], "recordsets": [[{"AssocName": "Henry Frederick (1594-1612)", "AssocNamePrefix": "Representation of", "CatKey": "500", "Description": "The hearse of Henry Frederick, Prince of Wales, with his embalmed body lying in state beneath a funeral canopy. The second state uses an additional plate which extends the royal arms and Prince's feathers at the top of the catafalque, and adds another inscription.  1612 Engraving", "Inscription": "With two columns of four verses, one in Latin by Hugo Holland, the other in English by George Chapman, and mottoes in the funeral canopy.The second state has an additional title at top 'The Herse and Representacion of our late Highe and Mighty Henry Prince of Wales &c' and names below 'Guli Holus sculp' and 'Lond print for Jo Budge'.", "Label": "Hole: hearse of Henry Frederick, Prince of Wales. 1612", "Name": "114098.jpg", "OtherLabel": "Hole: hearse of Henry Frederick, Prince of Wales. 1612", "Producer": "Hole, William (1607 fl-1624 died)", "ProductionPlace": null, "Title": null}]], "returnValue": 0, "rowsAffected": []}

const image_subject_search = {"output": {}, "recordset": [{"BPI_catKey": 1, }, {"BPI_catKey": 16, }, {"BPI_catKey": 635, }, {"BPI_catKey": 995, }, {"BPI_catKey": 8324, }], "recordsets": [[{"BPI_catKey": 1, }, {"BPI_catKey": 16, }, {"BPI_catKey": 635, }, {"BPI_catKey": 995, }, {"BPI_catKey": 8324, }]], "returnValue": 0, "rowsAffected": []};

const image_subject_search_by_index = {"output": {}, "recordset": [{"BPI_catKey": 300}, {"BPI_catKey": 301}, {"BPI_catKey": 302}, {"BPI_catKey": 303}, {"BPI_catKey": 317}, {"BPI_catKey": 499}, {"BPI_catKey": 611}, {"BPI_catKey": 631}, {"BPI_catKey": 824}, {"BPI_catKey": 894}, {"BPI_catKey": 1285}, {"BPI_catKey": 1303}, ], "recordsets": [[{"BPI_catKey": 300}, {"BPI_catKey": 301}, {"BPI_catKey": 302}, {"BPI_catKey": 303}, {"BPI_catKey": 317}, {"BPI_catKey": 499}, {"BPI_catKey": 611}, {"BPI_catKey": 631}, {"BPI_catKey": 824}, {"BPI_catKey": 894}, {"BPI_catKey": 1285}, {"BPI_catKey": 1303}, ]], "returnValue": 0, "rowsAffected": []};

const image_event_search = {"output": {}, "recordset": [{"BPI_catKey": 4268}, {"BPI_catKey": 4290}, {"BPI_catKey": 4765 }, {"BPI_catKey": 5705 }, {"BPI_catKey": 5808 }], "recordsets": [[{"BPI_catKey": 4268}, {"BPI_catKey": 4290 }, {"BPI_catKey": 4765 }, {"BPI_catKey": 5705 }, {"BPI_catKey": 5808 }]], "returnValue": 0, "rowsAffected": []};

const image_person_search = {"output": {}, "recordset" : [{"BPI_catKey": 7755},{
 "BPI_catKey": 8511 }, {"BPI_catKey": 9973} ], "recordsets": [[{ "BPI_catKey": 7755 }, {"BPI_catKey": 8511 }, {  "BPI_catKey": 9973 }, ], ], "returnValue": 0, "rowsAffected": [],"rowsAffected": []};

const image_producer_search = {"output": {}, "recordset": [{"BPI_catKey": 8603}, {"BPI_catKey": 8762}], "recordsets": [[{"BPI_catKey": 8603}, {"BPI_catKey": 8762}]], "returnValue": 0, "rowsAffected": []};

const image_technique_search = {"output": {}, "recordset": [{"BPI_catKey": 7743 }, {"BPI_catKey": 7744 }, {"BPI_catKey": 7787 }, {"BPI_catKey": 8330 }, {"BPI_catKey": 8362 }, {"BPI_catKey": 9810 }], "recordsets": [[{"BPI_catKey": 7743 }, {"BPI_catKey": 7744 }, {"BPI_catKey": 7787 }, {"BPI_catKey": 8330 }, {"BPI_catKey": 8362 }, {"BPI_catKey": 9810 }]], "returnValue": 0, "rowsAffected": []};

const image_technique_search_2 = {"output": {}, "recordset": [{"BPI_catKey": 7743 }, {"BPI_catKey": 7744 }, {"BPI_catKey": 7787 }, {"BPI_catKey": 8330 }, {"BPI_catKey": 8362 }, {"BPI_catKey": 9810 }], "recordsets": [[{"BPI_catKey": 7743 }, {"BPI_catKey": 7744 }, {"BPI_catKey": 7787 }, {"BPI_catKey": 8330 }, {"BPI_catKey": 8362 }, {"BPI_catKey": 9810 }]], "returnValue": 0, "rowsAffected": []};



// import connection objects
const { sql, sqlConfig } = require('../connect');

// close and reopen the server connection before each test
beforeAll(async () => {
  await server.close();
  await sql.connect(sqlConfig);
});

// tests

//  api/image_dimensions
describe("Test case for bpi1700 database", () => {
  it("test case for image dimensions from bpi cat number", async () => {
    const response = await request(app).get("/api/image_dimensions/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_dimensions500);
  }
  ); 
});

// api/image_details
describe("Test case for bpi1700 database", () => {
  it("test case for image details from bpi cat number", async () => {
    const response = await request(app).get("/api/image_details/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_details500);
  }
  ); 
});

// api/image_assoc_titles
describe("Test case for bpi1700 database", () => {
  it("test case for image associated titles from bpi cat number", async () => {
    const response = await request(app).get("/api/image_assoc_titles/513");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_assoc_titles513);
  }
  ); 
});

// api/image_subject_search
describe("Test case for bpi1700 database", () => {
  it("test case for image subject search from search item", async () => {
    const response = await request(app).get("/api/image_subject_search/black");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_subject_search);
  }
  ); 
});

// api/image_subject_search_by_index/
describe("Test case for bpi1700 database", () => {
  it("test case for image subject search by index", async () => {
    const response = await request(app).get("/api/image_subject_search_by_index/unicorn");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_subject_search_by_index);
  }
  ); 
});

// api/image_event_search
describe("Test case for bpi1700 database", () => {
  it("test case for image search by event", async () => {
    const response = await request(app).get("/api/image_event_search/regicides");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_event_search);
  }
  ); 
});

// api/image_producer_search
describe("Test case for bpi1700 database", () => {
  it("test case for image search by producer ", async () => {
    const response = await request(app).get("/api/image_producer_search/Simmons");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_producer_search);
  }
  ); 
});

// api/image_assoc_names
describe("Test case for bpi1700 database", () => {
  it("test case for image associated names from bpi cat number", async () => {
    const response = await request(app).get("/api/image_assoc_names/600");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_assoc_names600);
  }
  ); 
});

// api/image_comments
describe("Test case for bpi1700 database", () => {
  it("test case for image comments from bpi cat number", async () => {
    const response = await request(app).get("/api/image_comments/600");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_comments600);
  }
  ); 
});

// api/all_image_details
describe("Test case for bpi1700 database", () => {
  it("test case for all image details from bpi cat number", async () => {
    const response = await request(app).get("/api/all_image_details/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(all_image_details500);
  }
  ); 
});

// api/biblio_ref
describe("Test case for bpi1700 database", () => {
  it("test case for image biblio refs from bpi cat number", async () => {
    const response = await request(app).get("/api/biblio_ref/560");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_biblio_ref560);
  }
  ); 
});

// api/image_production_place
describe("Test case for bpi1700 database", () => {
  it("test case for image production place from bpi cat number", async () => {
    const response = await request(app).get("/api/image_production_place/600");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_prod_place600);
  }
  ); 
});

// api/image_subjects
describe("Test case for bpi1700 database", () => {
  it("test case for image subjects from bpi cat number", async () => {
    const response = await request(app).get("/api/image_subjects/900");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_subjects900);
  }
  ); 
});

// api/image_inscription
describe("Test case for bpi1700 database", () => {
  it("test case for image inscription from bpi cat number", async () => {
    const response = await request(app).get("/api/image_inscription/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_inscription500);
  }
  ); 
});

// api/image_producers
describe("Test case for bpi1700 database", () => {
  it("test case for image producers from bpi cat number", async () => {
    const response = await request(app).get("/api/image_producers/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_producers500);
  }
  ); 
});

// api/image_schools
describe("Test case for bpi1700 database", () => {
  it("test case for image schools from bpi cat number", async () => {
    const response = await request(app).get("/api/image_schools/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_schools500);
  }
  ); 
});

// api/image_person_search
describe("Test case for bpi1700 database", () => {
  it("test case for image search by person", async () => {
    const response = await request(app).get("/api/image_person_search/jack");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_person_search);
  }
  ); 
});

// api/image_person_search
describe("Test case for bpi1700 database", () => {
  it("test case for image search by technique", async () => {
    const response = await request(app).get("/api/image_technique_search/stipple");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_technique_search);
  }
  ); 
});


// validation tests

describe("Test case for bpi_number validation", () => {
  it("test case for bpi number that's too high", async () => {
    const response = await request(app).get("/api/image_details/1000000");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"status": "ERROR"});
  }
  ); 
});

// zero is invalid
describe("Test case for bpi_number validation", () => {
  it("test case for bpi number that's too low", async () => {
    const response = await request(app).get("/api/image_details/0");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"status": "ERROR"});
  }
  ); 
});

// a string is invalid
describe("Test case for bpi_number validation", () => {
  it("test case for bpi number that's not a number", async () => {
    const response = await request(app).get("/api/image_details/string");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"status": "ERROR"});
  }
  ); 
});



// 2 chars is invalid
describe("Test case for item validation", () => {
  it("test case for item that's too short", async () => {
    const response = await request(app).get("/api/image_subject_search/ab");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"status": "Invalid text"});
  }
  ); 
});

// over 50 chars is invalid
describe("Test case for item validation", () => {
  it("test case for bpi item that's too long", async () => {
    const response = await request(app).get("/api/image_subject_search/osjfosfodkfdokgdgkdqegyeywgewygeywywrfdkxbfishfiushfushfushfushfussudsfnsofoshfkdoudrhiufidrfiuerhr");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"status": "Invalid text"});
  }
  ); 
});

// no alpha only is invalid
describe("Test case for item validation", () => {
  it("test case for bpi item that's not alpha only", async () => {
    const response = await request(app).get("/api/image_subject_search/485utrjt046");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"status": "Invalid text"});
  }
  ); 
});




// close things off after the tests have finished
afterAll(async () => {
  server.close();
});


