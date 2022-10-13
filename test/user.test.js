import  supertest from "supertest"
import  { expect } from "chai"
import  productGenerate from "./generateProduct.js"

let request;
let response
let id
describe("Test sobre Productos", () => {
    before(() => {
        request = supertest("http://localhost:3000");
    });

    
    describe("POST Product", () => {
        
        const productToCreate = productGenerate.productGenerate();
    
    it("It creates a product (POST => /api/productos)", async () => {
        response = await request
                    .post("/api/productos")
                    .send(productToCreate);
        id = response.body._id
        
        expect(response.status).to.eql(200);
        expect(response.body.data).to.eql(productToCreate.title);
        expect(response.body.thumbnail).to.eql(productToCreate.thumbnail);
        expect(response.body.description).to.eql(productToCreate.description);
        expect(response.body.price).to.eql(Number(productToCreate.price));
        expect(response.body.stock).to.eql(Number(productToCreate.stock));
        expect(response.body.code).to.eql(Number(productToCreate.code));
    });
})
    
   
    it("Return all products - GET => /api/productos", async () => {
    response = await request
        .get("/api/productos")

    expect(response.status).to.eql(200);
    });
   
    it("Return status 404 - GET => Unkown Page", async () => {
    const response = await request.get("/asdasds");

    expect(response.status).to.eql(404);
    });


});