const Coin = require("./Models/coin.cjs");

const fs = require("fs");
const { app } = require("electron");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const knex = require("knex")({
	client: "sqlite3",
	connection: {
		filename: path.join(app.getAppPath(), "public/database/main.db"),
	},
	useNullAsDefault: true,
});

//test Local Db
// const LocalModel = require("./LocalModel.cjs");

//end

function checkIfDatabaseExists() {}
async function createDatabase() {}

async function getAllCoins({ country }) {
	// const Data = LocalModel.getAll({ country });
	// return Data;
}
async function getCoinsBy({ id }) {
	// const result = await LocalModel.getById({ id });
	// return result;
}
async function saveCoin(coin) {
	const result = await LocalModel.create({ coin });
	return result;
}

async function init() {}

// function checkIfDatabaseExists() {
// 	return fs.existsSync(path.join(app.getAppPath(), "public/database/main.db"));
// }
// async function createDatabase() {
// 	try {
// 		const tableExists = await knex.schema.hasTable("Coins");
// 		if (!tableExists) {
// 			await knex.schema.createTable("Coins", function (table) {
// 				table.increments("id").primary();
// 				table.string("country");
// 				table.integer("year");
// 				table.string("mintMark");
// 				table.float("denomination");
// 				table.string("composition");
// 				table.float("weight");
// 				table.float("size");
// 				table.string("grading");
// 				table.dateTime("purchaseDate");
// 				table.float("purchasePrice");
// 				table.string("seller");
// 				table.string("buyLocation");
// 				table.string("storageLocation");
// 				table.string("image");
// 			});
// 			console.log("Database and table created successfully.");
// 		} else {
// 			console.log("Table already exists.");
// 		}
// 	} catch (error) {
// 		console.error("Error creating database:", error.message);
// 	}
// }

// async function getAllCoins() {
// 	try {
// 		const coins = await knex.select().from("Coins");
// 		return coins.map((coin) => {
// 			const newCoin = new Coin(
// 				coin.country,
// 				coin.year,
// 				coin.mintMark,
// 				coin.denomination,
// 				coin.composition,
// 				coin.weight,
// 				coin.size,
// 				coin.grading,
// 				{
// 					date: new Date(coin.purchaseDate),
// 					price: coin.purchasePrice,
// 					seller: coin.seller,
// 					location: coin.buyLocation,
// 				},
// 				coin.image,
// 				coin.storageLocation
// 			);
// 			newCoin._id = coin.id;
// 			return newCoin;
// 		});
// 	} catch (error) {
// 		console.error("Error fetching coins:", error.message);
// 		return [];
// 	}
// }
// async function getCoinsBy(arg) {
// 	try {
// 		const coins = await knex.select().from("Coins");
// 		const filteredCoins = coins.filter((coin) => {
// 			return coin.country.toLowerCase() === arg.toLowerCase();
// 		});
// 		return filteredCoins.map((coin) => {
// 			const newCoin = new Coin(
// 				coin.country,
// 				coin.year,
// 				coin.mintMark,
// 				coin.denomination,
// 				coin.composition,
// 				coin.weight,
// 				coin.size,
// 				coin.grading,
// 				{
// 					date: new Date(coin.purchaseDate),
// 					price: coin.purchasePrice,
// 					seller: coin.seller,
// 					location: coin.buyLocation,
// 				},
// 				coin.image,
// 				coin.storageLocation
// 			);
// 			newCoin._id = coin.id;
// 			return newCoin;
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 		return [];
// 	}
// }
// async function saveCoin(coin) {
// 	console.log(coin);
// 	try {
// 		const [id] = await knex("Coins").insert({
// 			country: coin._coinDetails.country,
// 			year: coin._coinDetails.year,
// 			mintMark: coin._coinDetails.mintMark,
// 			denomination: coin._coinDetails.denomination,
// 			composition: coin._coinDetails.composition,
// 			weight: coin._coinDetails.weight,
// 			size: coin._coinDetails.size,
// 			grading: coin.grading,
// 			purchaseDate: coin._purchaseDetails.date,
// 			purchasePrice: coin._purchaseDetails.price,
// 			seller: coin._purchaseDetails.seller,
// 			buyLocation: coin._purchaseDetails.location,
// 			storageLocation: coin.location,
// 			image: coin.image,
// 		});
// 		console.log("Coin saved successfully with id:", id);
// 		return id;
// 	} catch (error) {
// 		console.error("Error saving coin:", error.message);
// 		return null;
// 	}
// }
// function log() {
// 	console.log("logging");
// }
// async function init() {
// 	const dbExists = checkIfDatabaseExists();
// 	console.log("Database exists:", dbExists);

// 	if (!dbExists) {
// 		console.log("Creating database...");
// 		await createDatabase();
// 	}

// 	// Other initialization code
// }

module.exports = {
	checkIfDatabaseExists,
	createDatabase,
	getCoinsBy,
	saveCoin,
	getAllCoins,
	init,
};
