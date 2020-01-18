const axios = require("axios")
const httpSetup = require("../config/http-setup");

describe("Interaccion con la API", () => {

    beforeAll(async () => {
        listener = await httpSetup();
    });

    afterAll(async () => {
        await listener.connection.close();
    });

    //************************* COMUNAS ********************************/

    it("It should respond to the GET comunas status code 200", async () => {
        const result = await axios.get("/farmacias/obtenerComunas/");
        expect(result.status).toBe(200);
    }, 5000);

    it("It should respond to the GET comunas data to be grather than 0", async () => {
        const result = await axios.get("/farmacias/obtenerComunas/");
        expect(result.data.comunas.length).toBeGreaterThan(0);
    }, 5000);

    //******************************************************************/

    //************************ FARMACIAS *******************************/

    it("It should respond to the POST to get farmacias status code 200", async () => {
        const result = await axios.post("/farmacias/obtenerFarmacias/");
        expect(result.status).toBe(200);
    }, 5000);

    it("It should respond to the POST to get farmacias greather than 0", async () => {
        const result = await axios.post("/farmacias/obtenerFarmacias/");
        expect(result.data.length).toBeGreaterThan(0);
    }, 5000);

    it("It should respond to the POST filter to get data and it should be less than total", async () => {
        const allData = await axios.post("/farmacias/obtenerFarmacias/");
        const body = {
            "comuna": "RECOLETA",
            "nombre_de_local": "AHUMADA"
        }
        const result = await axios.post("/farmacias/obtenerFarmacias/", body)
        expect(result.data.length).toBeGreaterThan(0);
        expect(result.data.length).toBeLessThan(allData.data.length);
    }, 5000);

    //******************************************************************/
})