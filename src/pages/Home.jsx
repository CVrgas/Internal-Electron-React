import React, { useEffect, useState } from "react";

export default function Home() {
	const [data, setData] = useState([]);
	const [CoinCount, setCoinCount] = useState(0);

	async function getAll() {
		const ApiResults = await window.api.getAllCoins({});

		setData([...ApiResults]);
	}
	async function getById() {
		const result = await window.api.getCoinsBy({ id: 3 });
		setData([result]);
	}
	useEffect(() => {
		const LoadCoinCount = async () => {
			const response = await window.api.getAllCoins({});
			console.log(response);
			setCoinCount(response.length);
		};
		LoadCoinCount();
	}, []);

	return (
		<div className="center">
			<div className="counter">
				<h1>
					34 <span>billetes</span>
				</h1>
			</div>
			<div className="counter">
				<h1>
					{CoinCount} <span>Monedas</span>
				</h1>
			</div>
			<div className="testResults">
				{data.map((r, i) => {
					return <p key={i}>{r.name}</p>;
				})}
			</div>
			<div className="Dbtest">
				<button onClick={getAll}>Get All</button>
				<button onClick={getById}>Get by id</button>
			</div>
		</div>
	);
}
