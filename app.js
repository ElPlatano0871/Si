// Importar las librerías necesarias
const express = require('express');
const app = express();
const path = require('path');

// Establecer el directorio de vistas y el motor de vistas
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public'), { 
    setHeaders: function(res, path, stat) {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
    }
  }));
  //Establece el tipo MIME application/Javascript
  app.use(express.static(__dirname + '/public', { type: 'application/javascript' }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/public/js/scripts-index.js', function(req, res) {
  res.type('text/javascript');
  res.sendFile(path.join(__dirname, 'public', 'js', 'scripts-index.js'));
});


app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
