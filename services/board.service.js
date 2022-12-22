const board = require("../repository/board.repository");

exports.getList = async () => {
  const result = await board.findAll();
  return result;
};

exports.getView = async (index) => {
  const result = await board.findOne(index);
  return result;
};

exports.storeData = async (data) => {
  const index = await board.saveData(data);
  return index;
};

exports.modifyData = async (data) => {
  const index = await board.changeData(data);
  return index;
};

exports.deleteData = async (index) => {
  await board.removeData(index);
};

if (require.main === module) {
  (async () => {
    const result = await board.findAll();
    console.log(result);
  })();
}
