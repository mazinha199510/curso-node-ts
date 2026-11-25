import { beforeEach, describe, expect, jest, test } from '@jest/globals';

const runCommand = async(args: string[]) => {
    process.argv = [...process.argv, ...args];
    const {yarg} = await import("../../src/config/plugins/args.plugin.ts");
    return yarg;
}

    
describe("test args plugin", () => {
    const originalArgv = process.argv;
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })
    test("should return default values", async () =>{
        const argv = await runCommand(['-b', '5']);
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'table',
            d: './outputs',
        }));
    });

    test("should return configutarion with custom values", async() => {
        const options = ['-b', '5', '-l','20','-s','true','-n','multiplication-table','-d','./custom-outputs'];
        const argv = await runCommand(options);
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 20,
            s: true,
            n: 'multiplication-table',
            d: './custom-outputs',
        }));
    });
})