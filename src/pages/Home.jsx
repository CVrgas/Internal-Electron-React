import React, { useEffect, useState } from "react";
import db from "../assets/localDb.json";

export default function Home() {
	const [CoinCount, setCoinCount] = useState(0);
	const [BillCount, setBillCount] = useState(0);
	useEffect(() => {
		setCoinCount(db.coins.length);
		setBillCount(db.bills.length);
	}, []);

	return (
		<div className="center">
			<div className="notImplemented">
				<div className="counter">
					{BillCount >= 1 ? (
						<h1>
							{BillCount} <span>billetes</span>
						</h1>
					) : (
						"not bills"
					)}
				</div>
				<div className="counter">
					{CoinCount >= 1 ? (
						<h1>
							{CoinCount} <span>monedas</span>
						</h1>
					) : (
						"not bills"
					)}
				</div>
			</div>
		</div>
	);
}
