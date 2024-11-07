import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(serveStatic(path.join(__dirname, '../public')));

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});