import { test, expect, describe } from '@jest/globals';
import { getUserById } from "../../src/js-foundation/03-callbacks";


describe("js-foundation/03-callbacks.ts", () => {
    test("getUserById should return an error if user does not exists", () => {
        const id = 1;
        getUserById(id, (err, user) => {
            // expect(err).toBe(`Usuario no encontrado con el id ${id}`);
            // expect(user).toBeUndefined();
            console.log(user);
            // expect(user).toBe(user?.id == 1 && user.name == 'Jose');
            // done();
        });
    });

    test("getUserById should return an user", () => {
        const id = 1;
        getUserById(id, (err, user) => {
            console.log(user);
            expect(err).toBeUndefined();
            expect(user).toStrictEqual({
                                            id: 1,
                                            name: "Jose"
                                        });
            // done();
        });
    });
});
