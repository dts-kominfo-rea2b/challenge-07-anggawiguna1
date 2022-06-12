const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let dataIXX = await promiseTheaterIXX();
    let dataVGC = await promiseTheaterVGC();
    let dataTotal = dataIXX.concat(dataVGC);
    return dataTotal.filter((element) => element.hasil === emosi).length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
