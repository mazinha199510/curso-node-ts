import { test, expect, describe } from '@jest/globals';
import { caracteres } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring.ts', () => {
    test('caracteres should contain Flash, Superman', () => {
        expect(caracteres).toContain('Flash');
        expect(caracteres).toContain('Superman');
    });

    test("First caracter be Flash, and second Superman", () => {
        const [Flash, Superman] = caracteres;
        expect(Flash).toBe('Flash');
        expect(Superman).toBe('Superman');
    });
})