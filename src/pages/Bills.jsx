import React, { useEffect, useState } from "react";
import styles from "../styles/Coins.module.css";
import ListView from "../components/ListView";
import CardView from "../components/CardView";

export default function Bills() {
	const [view, setView] = useState(false);
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);

	const toggleView = () => {
		setView((prevView) => !prevView);
	};

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await window.api.getAllCoins({});
				// const responseData = await response.json();
				setData([...response]);
			} catch (error) {
				console.log("Error fetching data:", error);
			}
		};

		fetchData();
	}, []); // Empty dependency array to run the effect only once on component mount

	return (
		<div className="center">
			<div className={styles.topbar}>
				<div className={styles.searchbar}>
					<input
						type="text"
						placeholder="Search..."
						id="search"
						onChange={handleSearchChange}
					/>
					<label htmlFor="search">
						<i className="fa-solid fa-magnifying-glass"></i>
					</label>
				</div>
				<div className={styles.view}>
					<input
						type="checkbox"
						onClick={toggleView}
					/>
					{view ? (
						<i className="fa-solid fa-table-cells-large"></i>
					) : (
						<i className="fa-solid fa-list"></i>
					)}
				</div>
			</div>
			<div className={styles.mainWindow}>
				<h1>Mis Billetes</h1>
				{view ? <ListView data={data} /> : <CardView data={data} />}
			</div>
		</div>
	);
}
