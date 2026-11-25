import { CreateTable } from "../domain/use-cases/create-table.use-case.ts";
import { SaveFile } from "../domain/use-cases/save-file.use-case.ts";

interface runOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}

export class ServerApp {
    static run({base,limit,showTable,name,destination}: runOptions){
        console.log("Server is running...");
        const table = new CreateTable().execute({base, limit}) ;
        const wasCreated = new SaveFile().execute({fileContent:table, destination: destination, fileName: name});

        if(showTable){ console.log(table); }

        (wasCreated) ? console.log("File created successfully.") : console.log("Error creating file.");
    }
}