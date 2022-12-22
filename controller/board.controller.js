const service = require("../services/board.service");

exports.list = async (req, res) => {
  const list = await service.getList();
  res.render("board/list.html", { list });
};

exports.view = async (req, res) => {
  const { index } = req.query;
  const [obj] = await service.getView(index);
  res.render("board/view.html", { obj });
};

exports.getWrite = (req, res) => {
  res.render("board/write.html");
};

exports.postWrite = async (req, res) => {
  const data = req.body;
  const index = await service.storeData(data);
  res.redirect(`/board/view?index=${index}`);
};

exports.getModify = async (req, res) => {
  const { index } = req.query;
  const [obj] = await service.getView(index);
  res.render("board/modify.html", { obj });
};

exports.postModify = async (req, res) => {
  const data = req.body;
  const index = await service.modifyData(data);
  res.redirect(`/board/view?index=${index}`);
};

exports.delete = async (req, res) => {
  const { index } = req.body;
  await service.delete(index);
  res.render("/board/list");
};
