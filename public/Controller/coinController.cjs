const { Await } = require("react-router-dom");
const CoinRepository = require("../Repository/coinRepository.cjs");

class CoinController {
	static async getAll({ option }) {
		return await CoinRepository.getAll({ option });
	}
	static async getById({ id }) {
		return await CoinRepository.getById({ id });
	}
	static async Create({ input }) {
		return await CoinRepository.create({ input });
	}
	static async Update({ id, input }) {
		return await CoinRepository.update({ id, input });
	}
	static async Delete({ id }) {
		return await CoinRepository.delete({ id });
	}
}
module.exports = CoinController;
