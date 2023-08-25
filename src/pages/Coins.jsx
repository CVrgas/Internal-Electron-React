import React, { useEffect, useState } from "react";
import styles from "../styles/Coins.module.css";
import ListView from "../components/ListView";
import CardView from "../components/CardView";
import Popup from "../components/popup";

export default function Coins() {
	const [view, setView] = useState(false);
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);

	const toggleView = () => {
		setView((prevView) => !prevView);
	};
	const load = async () => {
		const response = await window.api.getAllCoins({});
		setData([...response]);
	};

	const handleSearchChange = (e) => {
		if (e.target.value === "") {
			load();
			return;
		}
		setSearch(e.target.value);
	};
	const applySearch = async (e) => {
		if (e.code !== "Enter") return;
		try {
			const response = await window.api.getAllCoins({ option: search });
			setData([...response]);
		} catch (e) {
			console.log("error Filtering coins", e.message);
		}
	};

	useEffect(() => {
		load();
	}, []);

	return (
		<div className="center">
			<Popup />
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
				<h1>Mis Monedas</h1>
				{view ? <ListView data={data} /> : <CardView data={data} />}
			</div>
		</div>
	);
}
