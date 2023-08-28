import React, { useEffect, useState } from "react";
import db from "../assets/localDb.json";

export default function Home() {
	const [CoinCount, setCoinCount] = useState(0);
	const [BillCount, setBillCount] = useState(0);
	useEffect(() => {
		let database = JSON.parse(localStorage.getItem("database"));
		setCoinCount(database.coins.length);
		setBillCount(database.bills.length);
	}, []);

	return (
		<div className="center">
			<div className="notImplemented">
				<div className="counter">
					{BillCount >= 1 ? (
						<h1 style={{ textAlign: "center" }}>
							{BillCount} <span>Bills</span>
						</h1>
					) : (
						"not bills"
					)}
				</div>
				<div className="counter">
					{CoinCount >= 1 ? (
						<h1 style={{ textAlign: "center" }}>
							{CoinCount} <span>Coins</span>
						</h1>
					) : (
						"not bills"
					)}
				</div>
				<h1>working</h1>
			</div>
		</div>
	);
}
