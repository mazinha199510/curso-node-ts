import { describe, expect, test } from '@jest/globals';
import { CreateTable } from '../../../src/domain/use-cases/create-table.use-case';

describe('CreateTableUseCase', () => {
    const createTable = new CreateTable();
    test("should create table with default values", () => {        
        const table = createTable.execute({ base:3 });
        const rows = table.split('\n').length;
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('3 x 1 = 3');
        expect(rows).toBe(10);
    });

    test("should create table with custom values", () => {
        const options = {
            base: 3,
            limit: 20
        };

        const res = createTable.execute(options);
        const rows = res.split('\n').length;
        expect(rows).toBe(options.limit);

    });
});
