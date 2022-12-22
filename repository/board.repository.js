const pool = require("./db");

exports.findAll = async () => {
  const [result] = await pool.query(`SELECT * FROM board ORDER BY idx DESC;`);
  return result;
};

exports.findOne = async (index) => {
  const sql = `SELECT * FROM board WHERE idx=${index};`;
  const [result] = await pool.query(sql);
  return result;
};

exports.saveData = async (data) => {
  const { subject, writer, content } = data;
  const sql = `INSERT INTO board(subject, content, writer) VALUES('${subject}', '${content}', '${writer}');`;
  const [result] = await pool.query(sql);
  return result.insertId;
};

exports.changeData = async (data) => {
  const { index, subject, writer, content } = data;
  const sql = `UPDATE board SET subject='${subject}', writer='${writer}', content='${content}' WHERE idx=${index};`;
  await pool.query(sql);

  return index;
};

exports.removeData = async (index) => {
  const sql = `DELETE FROM board WHERE idx=${index}`;
  await pool.query(sql);
};

if (require.main === module) {
  (async () => {
    const [result] = await pool.query(`SELECT * FROM board`);
    console.log(result);
  })();
}
