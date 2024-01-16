
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
const image_subjects500 = [
  [
      {
        "heading" : "Collars",
      },
      {
        "heading" : "Robes",
      },
      {
          "heading" : "Ermine",
      },
      {
        "heading" : "Embalming",
      },
      {
        "heading" : "Columns",
      },
      {
        "heading" : "Corpses",
      },
      {
        "heading" : "Regal dress",
      },  
      {
        "heading" : "Fleur-de-lis",
      },  
      {
        "heading" : "Crown and feathers",
      },
      {
        "heading" : "Crowns",
      }, 
      {
        "heading" : "Monarchy",
      },  
      {
        "heading" : "Heraldry",
      },
      {
        "heading" : "Signs and symbols",
      },
      {
        "heading" : "Field crops",
      },         
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

const image_prod_place600 = [
  [
      {
          "mus_auth_place_mus_auth_thes_ancestry": "Europe, United Kingdom, England, Greater London,  London",     
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

const image_comments600 = [
  [
      {
          "mus_comments": "Evidently made at the time of the Revolution or soon after, as Faithorne senior died in 1691.",     
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

const image_biblio_ref560 = [
  [
      {
          "bm_bib_xref": "IFF", 
          "description": null,
      },
      {
        "bm_bib_xref": "Montaiglon", 
        "description": null,
    },
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

const image_assoc_names600 = [
  [
      {
          "bm_as_name": "Mary (1631-1660)", 
          "al_as_name_assDesc": "Portrait of",    
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

const image_assoc_titles513 = [
  [
      {
          "bm_alias_as_title": "Fables with his Life",  
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

const all_image_details500 = [
  [
      {
          "Inscription": "With two columns of four verses, one in Latin by Hugo Holland, the other in English by George Chapman, and mottoes in the funeral canopy.The second state has an additional title at top 'The Herse and Representacion of our late Highe and Mighty Henry Prince of Wales &c' and names below 'Guli Holus sculp' and 'Lond print for Jo Budge'.",
          "Producer": "Hole, William (1607 fl-1624 died)",
          "ProductionPlace": null,
          "AssocName": "Henry Frederick (1594-1612)",
          "AssocNamePrefix": "Representation of",
          "CatKey": "500",
          "Description": "The hearse of Henry Frederick, Prince of Wales, with his embalmed body lying in state beneath a funeral canopy. The second state uses an additional plate which extends the royal arms and Prince's feathers at the top of the catafalque, and adds another inscription.  1612 Engraving",
          "Label": "Hole: hearse of Henry Frederick, Prince of Wales. 1612",
          "Name": "114098.jpg"
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

const image_subject_search = [
  [
      {
        "bm_alias_subject": "black",
        "BPI_catKey": 1,
        "al_subjectKey": 2, 
      },
      {
        "bm_alias_subject": "black",
        "BPI_catKey": 16,
        "al_subjectKey": 2, 
      },
      {
        "bm_alias_subject": "black",
        "BPI_catKey": 635,
          "al_subjectKey": 2, 
      },
      {
        "bm_alias_subject": "black",
        "BPI_catKey": 995,
        "al_subjectKey": 2, 
      },
      {
        "bm_alias_subject": "black",
        "BPI_catKey": 8324,
        "al_subjectKey": 2, 
      },
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

const image_subject_search_by_index = [
  [
    {
      "BPI_catKey": 300,
    },
    {
      "BPI_catKey": 301,
    },
    {
      "BPI_catKey": 302,
    },
    {
      "BPI_catKey": 303,
    },
    {
      "BPI_catKey": 317,
    },
    {
      "BPI_catKey": 499,
    },
    {
      "BPI_catKey": 611,
    },
    {
      "BPI_catKey": 631,
    },
    {
      "BPI_catKey": 824,
    },
    {
      "BPI_catKey": 894,
    },
    {
      "BPI_catKey": 1285,
    },
    {
      "BPI_catKey": 1303,
    },
    {
      "BPI_catKey": null,
    },          
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

const image_event_search = [
  [
    {
      "bm_alias_as_event": "Execution of Regicides",
      "BPI_catKey": 4268,
    },
    {
      "bm_alias_as_event": "Execution of the regicides",
      "BPI_catKey": 4290,
    },
    {
      "bm_alias_as_event": "Execution of the Regicides",
      "BPI_catKey": 4765,
    },
    {
      "bm_alias_as_event": "Execution of the regicides",
      "BPI_catKey": 5705,
    },
    {
      "bm_alias_as_event": "Execution of the regicides",
      "BPI_catKey": 5808,
    },
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

const image_person_search = [
  [
    {
      "bm_as_name": "Fitzjames, James (1670-1734)",
      "BPI_catKey": 8534,
    },
    {
      "bm_as_name": "Fitzjames, Henry (1673-1702)",
      "BPI_catKey": 8534,
    },
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

const image_producer_search = [
  [
    {
      "mus_object_production_person": "Simmons, Matthew (1608-1654)",
      "BPI_catKey": 8603,
    },
    {
      "mus_object_production_person": "Simmons, Mary (fl.1656-fl.1667)",
      "BPI_catKey": 8762,
    },
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

// tests

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

describe("Test case for bpi1700 database", () => {
  it("test case for image subjects from bpi cat number", async () => {
    const response = await request(app).get("/api/image_subjects/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_subjects500);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image production place from bpi cat number", async () => {
    const response = await request(app).get("/api/image_production_place/600");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_prod_place600);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image biblio refs from bpi cat number", async () => {
    const response = await request(app).get("/api/biblio_ref/560");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_biblio_ref560);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image comments from bpi cat number", async () => {
    const response = await request(app).get("/api/image_comments/600");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_comments600);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image associated names from bpi cat number", async () => {
    const response = await request(app).get("/api/image_assoc_names/600");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_assoc_names600);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image associated titles from bpi cat number", async () => {
    const response = await request(app).get("/api/image_assoc_titles/513");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_assoc_titles513);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for all image details from bpi cat number", async () => {
    const response = await request(app).get("/api/all_image_details/500");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(all_image_details500);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image subject search from search item", async () => {
    const response = await request(app).get("/api/image_subject_search/black");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_subject_search);
  }
  ); 
});


describe("Test case for bpi1700 database", () => {
  it("test case for image subject search by index", async () => {
    const response = await request(app).get("/api/image_subject_search_by_index/unicorn");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_subject_search_by_index);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image search by event", async () => {
    const response = await request(app).get("/api/image_event_search/regicides");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_event_search);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image search by person", async () => {
    const response = await request(app).get("/api/image_person_search/james");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_person_search);
  }
  ); 
});

describe("Test case for bpi1700 database", () => {
  it("test case for image search by producer ", async () => {
    const response = await request(app).get("/api/image_producer_search/Simmons");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(image_producer_search);
  }
  ); 
});


// close things off after the tests have finished
afterAll(async () => {
  await server.close();
  await closeConnection.end();
});


