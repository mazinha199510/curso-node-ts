import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { ServerApp } from '../../src/presentation/server-app';
import { CreateTable } from '../../src/domain/use-cases/create-table.use-case';
import { SaveFile } from '../../src/domain/use-cases/save-file.use-case';

describe("test serverApp", () => {
    const serverApp = new ServerApp();
    const options = {
        base: 5,
        limit: 20,
        showTable: false,
        name: 'multiplication-table',
        destination: 'custom-outputs'
    };

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("should create serverApp instance", () => {
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });

    test("should run serverApp with options", () => {
        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');
        

        ServerApp.run(options);
        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith('Server is running...');
        expect(logSpy).toHaveBeenCalledWith("File created successfully.");

        expect(createTableSpy).toHaveBeenCalledTimes(1);
        expect(createTableSpy).toHaveBeenCalledWith({base: options.base, limit: options.limit});

        expect(saveFileSpy).toHaveBeenCalledTimes(1);
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            destination: options.destination,
            fileName: options.name

        })
    });

    test("should run with custom values mocked", () => {
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn();
        const logMock = jest.fn();
        const logErrorMock = jest.fn();


        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server is running...');
        expect(createMock).toHaveBeenCalledWith({"base": options.base, "limit": options.limit});
        expect(saveFileMock).toHaveBeenCalledWith({ fileContent: '1 x 2 = 2', destination : options.destination, fileName: options.name });
        // expect(logMock).toHaveBeenCalledWith("File created successfully.");
        expect(logErrorMock).not.toHaveBeenCalledWith();
    });
});