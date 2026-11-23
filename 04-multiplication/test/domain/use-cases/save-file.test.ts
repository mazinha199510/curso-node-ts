import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';
import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';


describe("saveFile", () => {
    beforeEach(() => {
        fs.rmSync("outputs", { recursive: true});
    });

    afterEach(() => {
        fs.rmSync("outputs", { recursive: true});
    });

    test("should save file with default values", () => {
        const saveFile = new SaveFile();
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
});