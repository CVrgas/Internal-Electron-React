import React, { useEffect, useState } from "react";
import styles from "../styles/Coins.module.css";
import ListView from "../components/ListView";
import CardView from "../components/CardView";
import Popup from "../components/popup";

export default function Coins() {
	const [view, setView] = useState(false);
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);
	const [selected, setSelected] = useState();
	const db = JSON.parse(localStorage.getItem("database")).coins;

	const toggleView = () => {
		setView((prevView) => !prevView);
	};
	const handleSearchChange = (e) => {
		if (e.target.value === "") {
			setData(db);
			return;
		}
		setSearch(e.target.value);
	};

	const applySearch = async (e) => {
		if (e.code !== "Enter") return;
		const result = db.filter(
			(coin) =>
				coin.country.toLowerCase() === search.toLowerCase() ||
				coin.year === parseInt(search)
		);
		setData(result);
	};

	function selectData(id) {
		const selected = data.find((coin) => coin.id === id);
		if (selected) {
			setSelected(data.find((coin) => coin.id === id));
		}
	}

	useEffect(() => {
		setData(db);
	}, []);

	return (
		<div className="center">
			<Popup
				selected={selected}
				deselect={setSelected}
			/>
			<div className={styles.topbar}>
				<div className={styles.searchbar}>
					<input
						type="text"
						placeholder="Search..."
						id="search"
						onKeyDown={applySearch}
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
				<h1>My Coins</h1>
				{view ? (
					<ListView
						data={data}
						selectData={selectData}
					/>
				) : (
					<CardView
						data={data}
						selectData={selectData}
					/>
				)}
			</div>
		</div>
	);
}
