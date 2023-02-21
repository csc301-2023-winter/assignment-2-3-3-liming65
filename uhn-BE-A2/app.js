const express = require("express");
const pg = require("pg");
const cors = require("cors");


const config = {
  host: 'virtualrehabilitationcs-server.postgres.database.azure.com',
  port: 5432,
  database: 'virtualrehabilitationcs-database',
  user: 'mooyhjmirm',
  password: 'Z1TQ2B8I5NGMZQI0$',
  ssl: true
}

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());


const client = new pg.Client(config);



async function initTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS user_progress(
       PrescriptionID text,
       Name text,
       DoctorName text,
       ExerciseName text,
       NumberOfCompletedSets INTEGER,
       FinishStatus text
    )`;
  return client.query(query)
    .then(() => {
      console.log('Table created successfully!');
     // client.end(console.log('Closed client connection'));
    })
    .catch(err => console.log(err))
}

app.get('', async (req, res) => {
  try {
    const query = `SELECT * FROM user_progress`;
    const queryRes = await client.query(query);
    res.status(200).json([...queryRes.rows]);
  } catch (err) {
    res.status(500).send(err.message);
  }
})

app.get('/clear', async (req, res) => {
  try {
    const query = `DROP table user_progress`;
    await client.query(query);
    res.status(200).send('Clear successfully!');
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    initTable();
  }
})

app.post('/save', async (req, res) => {
  try {
    const {
      PrescriptionID,
      Name,
      DoctorName,
      ExerciseName,
      NumberOfCompletedSets,
      FinishStatus
    } = req.body;

    const query = `
      INSERT INTO user_progress(
        PrescriptionID,
        Name,
        DoctorName,
        ExerciseName,
        NumberOfCompletedSets,
        FinishStatus
      ) VALUES($1, $2, $3, $4, $5, $6)
    `;
    await client.query(
      query,
      [PrescriptionID, Name, DoctorName, ExerciseName, NumberOfCompletedSets, FinishStatus]
    );
    res.status(201).send();

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
})

client.connect(err => {
  if (err) throw err;
  else {
    initTable()
      .then(() => {
        app.listen(PORT, () => {
          console.log("The server set up at port " + PORT);
        })
      })

  }
});
