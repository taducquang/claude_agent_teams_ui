const noop = () => {};
const noopClass = class {};
const handler = { get: () => noop };
const proxyObj = new Proxy({}, handler);

export const app = proxyObj;
export const BrowserWindow = noopClass;
export const ipcMain = { handle: noop, on: noop, removeHandler: noop };
export const shell = { openPath: noop, openExternal: noop };
export const dialog = { showOpenDialog: async () => ({ canceled: true, filePaths: [] }) };
export const Notification = class { show() {} };
export const safeStorage = { isEncryptionAvailable: () => false, encryptString: noop, decryptString: () => '' };
export const screen = proxyObj;
export default proxyObj;
