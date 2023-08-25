export default class Coin {
	constructor(
		country,
		year,
		mintMark,
		denomination,
		composition,
		weight,
		size,
		grading,
		purchaseDetails,
		image,
		location
	) {
		this._id = 0;
		this._coinDetails = {
			country: country || "",
			year: year || 1000,
			mintMark: mintMark || "",
			denomination: denomination || 0,
			composition: composition || "",
			weight: weight || 0,
			size: size || 0,
		};
		this.grading = grading || "";
		this._purchaseDetails = {
			date: purchaseDetails?.date || new Date(),
			price: purchaseDetails?.price || 0,
			seller: purchaseDetails?.seller || "",
			location: purchaseDetails?.location || "",
		};
		this.image = image || "";
		this.location = location || "";
	}
}
