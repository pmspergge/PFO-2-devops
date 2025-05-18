const express = require("express");
const mysql = require("mysql2/promise");
const app = express();

app.get("/", async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: "mysql-db",
      user: "root",
      password: "1234",
      database: "actividad_docker",
    });

    const [rows] = await connection.query("SELECT * FROM productos");
    await connection.end();

    let html = "<h1>Listado de Productos</h1><ul>";
    rows.forEach((row) => {
      html += `<li>${row.id}: ${row.nombre} — $${row.precio}</li>`;
    });
    html += "</ul>";
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al conectar a la base de datos");
  }
});

app.listen(3000, () => {
  console.log("App corriendo en http://localhost:3000");
});
