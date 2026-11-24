import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';


describe("saveFile", () => {
    const saveFile = new SaveFile();
    const customOptions = {
            fileContent: "custom content",
            destination: "custom-outputs/file-destination",
            fileName: "custom-table-name"
        }
        const path = `${customOptions.destination}/${customOptions.fileName}.txt`;
    // beforeEach(() => {
    //     jest.clearAllMocks();
    // });

    afterEach(() => {
        const exists = fs.existsSync("outputs");
        if(exists){
            fs.rmSync("outputs", { recursive: true});
        } 
        
        const existsCustom = fs.existsSync("custom-outputs");
        if(existsCustom){
            fs.rmSync("custom-outputs", { recursive: true});
        }
    });

    test("should save file with default values", () => {
        const path = "outputs/table.txt";
        const options = {
            fileContent: "test content"
        };
        const res = saveFile.execute(options);

        expect(res).toBeTruthy();
        const checkFile = fs.existsSync(path);
        const fileContent = fs.readFileSync(path, {encoding : "utf-8"});
        expect(checkFile).toBeTruthy();
        expect(fileContent).toBe(options.fileContent);
    });

    test("should save file with custom values", () => {        
        
        const res = saveFile.execute(customOptions);
        console.log(res);
        expect(res).toBe(true);

        const checkFile = fs.existsSync(path);
        const fileContent = fs.readFileSync(path, {encoding : "utf-8"});
        expect(checkFile).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);
    });

    test("should return false if directory is  not be created", () => {
        const mkdirMock = jest.spyOn(fs,"mkdirSync").mockImplementation(() => { throw new Error("Mocked error"); });
        const res = saveFile.execute(customOptions);
        expect(res).toBe(false);
        mkdirMock.mockRestore();
    });
    
    test("should return false if file could not be created", () => {
        const writeFileMock = jest.spyOn(fs,"writeFileSync").mockImplementation(() => { throw new Error("error write message"); });
        const res = saveFile.execute({fileContent: "hola"});
        expect(res).toBe(false);
        writeFileMock.mockRestore();
    });
});