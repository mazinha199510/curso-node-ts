import { describe, expect, jest, test } from '@jest/globals';
import { ServerApp } from '../../src/presentation/server-app';

describe("test serverApp", () => {
    test("should create serverApp instance", () => {
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });

    test("should run serverApp with options", () => {
        const logSpy = jest.spyOn(console, 'log')
        const options = {
            base: 5,
            limit: 20,
            showTable: true,
            name: 'multiplication-table',
            destination: 'custom-outputs'
        };

        ServerApp.run(options);
        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith('Server is running...');
        expect(logSpy).toHaveBeenLastCalledWith("File created successfully.")
    });
});