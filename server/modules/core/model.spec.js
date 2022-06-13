import { expect, describe, jest } from '@jest/globals';
import model from "./model.js";

describe ("ingreso de data", () => {
    it("usuarios", async () => {
         const MongooseModel = {
            find: jest.fn().mockReturnThis(),
            skip: jest.fn().mockReturnThis(),
            limit: jest.fn().mockReturnThis(),
            exec: jest.fn(() => {
                return [
                    { username: "pepe" }
                ];
            })
        }
        const result = await model(MongooseModel).find({ limit: 10 });

        console.log(MongooseModel.find.mock.calls);
        console.log(MongooseModel.skip.mock.calls);
        console.log(MongooseModel.limit.mock.calls);
        console.log(MongooseModel.exec.mock.calls);
        expect(MongooseModel.exec.mock.calls).toEqual([[]]);
        console.log(result)
     });
});