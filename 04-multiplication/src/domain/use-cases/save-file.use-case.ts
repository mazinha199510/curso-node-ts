import fs from "fs";

export interface options{
    fileContent: string;
    destination?: string;
    fileName?: string;
}

export interface SaveFileUseCase{
    execute: (options: options) => boolean;
}

export class SaveFile implements SaveFileUseCase{
    constructor(
        /* repository: StorageRepository */
    ){ }

    execute({fileContent, destination = "outputs", fileName = "table"}: options): boolean {
        try{
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            // fs.appendFileSync(`${destination}/${fileName}.txt`, mensajeSalida);
            return true;
        } catch (error) {
            // console.error("Error saving file:", error);
            return false;
        }
    }
}