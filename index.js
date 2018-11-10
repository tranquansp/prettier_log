const Console = require('console').Console;
const consoleWrapper = new Console(process.stdout, process.stderr);
class ConsoleClass {
    static log(...args) {
        if(!args) return;

        args = args.map(item =>  (typeof item === 'object') ? JSON.stringify(item) : item);
        if(args[0]) args[0] = `[${new Date()}] ${args[0]}`;
        return consoleWrapper.log(...args);
    }
    static info(...args) {
        if(!args) return;

        args = args.map(item =>  (typeof item === 'object') ? JSON.stringify(item) : item);
        if(args[0]) args[0] = `[${new Date()}] ${args[0]}`;
        return consoleWrapper.info(...args);
    }
    static warn(...args) {
        if(!args) return;

        args = args.map(item =>  (typeof item === 'object') ? JSON.stringify(item) : item);
        if(args[0]) args[0] = `[${new Date()}] ${args[0]}`;
        return consoleWrapper.warn(...args);
    }
    static error(...args) {
        if(!args) return;

        args = args.map(item =>  (typeof item === 'object') ? JSON.stringify(item) : item);
        if(args[0]) args[0] = `[${new Date()}] ${args[0]}`;
        return consoleWrapper.error(...args);
    }
    static debug(...args) {
        if(!args) return;

        args = args.map(item =>  (typeof item === 'object') ? JSON.stringify(item) : item);
        if(args[0]) args[0] = `[${new Date()}] ${args[0]}`;
        return consoleWrapper.debug(...args);
    }
}
module.exports = ConsoleClass;