const countries = require("../LocalDb.cjs");

class CoinRepository {
	static async getAll({ country, option }) {
		if (option && option !== "") {
			return countries.filter(
				(data) =>
					data.id === parseInt(option) ||
					data.name.toLocaleLowerCase().includes(option.toLocaleLowerCase())
			);
		}
		return countries;
	}
	static async getById({ id }) {
		return countries.find((country) => country.id === parseInt(id.id));
	}
	static async create({ input }) {
		const newCountry = {
			id: countries.length + 2,
			...input,
		};
		countries.push(newCountry);
		return newCountry;
	}
	static async delete({ id }) {
		const index = countries.findIndex((country) => country.id === parseInt(id));
		if (index === -1) {
			return false;
		}
		countries.splice(index, 1);
		return true;
	}
	static async update({ id, input }) {
		const index = countries.findIndex((country) => country.id === parseInt(id));
		if (index === -1) return false;
		countries[index] = {
			...countries[index],
			...input,
		};
		return countries[index];
	}
}

module.exports = CoinRepository;
