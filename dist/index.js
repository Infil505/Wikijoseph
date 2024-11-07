"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const serve_static_1 = __importDefault(require("serve-static"));
const app = (0, express_1.default)();
const port = 3000;
// Servir archivos estáticos desde la carpeta "public"
app.use((0, serve_static_1.default)(path_1.default.join(__dirname, '../public')));
// Ruta de ejemplo
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'index.html'));
});
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
