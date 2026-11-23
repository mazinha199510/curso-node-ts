import { test, expect, describe, jest } from '@jest/globals';
import { buildLogger, logger } from "../../src/plugins/logger.plugin";

describe("plugins/logger.plugin.ts", () => {
    test("should return a function logger", () => {
        const logger = buildLogger('test');
        expect(typeof logger.log).toBe("function");
        expect(typeof logger.error).toBe("function");
    });

    test("should log a message", () => {
        const winstonLoggerMock = jest.spyOn(logger, 'log');
        const message = 'testMessage';
        const service = 'test service';
        const loggerW = buildLogger(service);
        loggerW.log(message); 
        expect(winstonLoggerMock).toHaveBeenCalledWith('info',expect.objectContaining({level:"info", message,service}));
    });
});