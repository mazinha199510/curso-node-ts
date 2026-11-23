import fs from "fs";
import { yarg } from "./config/plugins/args.plugin.ts";

const {b:numero, l:limite, s:mostrar} = yarg; 

const header = `====================\nTABLA DEL ${numero}\n====================\n`;


if(mostrar){
    console.log(header);
    console.log(mensajeSalida);
}

const outputPath = "outputs";


