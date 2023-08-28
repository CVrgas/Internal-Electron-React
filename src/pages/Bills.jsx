import React, { useEffect, useState } from "react";
import styles from "../styles/Coins.module.css";
import ListView from "../components/ListView";
import CardView from "../components/CardView";

export default function Bills({ selectData }) {
	const [view, setView] = useState(false);
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);

	const toggleView = () => {
		setView((prevView) => !prevView);
	};
	const load = async () => {};

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
		} catch (e) {
			console.log("error Filtering coins", e.message);
		}
	};

	useEffect(() => {
		let database = JSON.parse(localStorage.getItem("database"));
		setData(database.bills);
	}, []);

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
				<h1>My Bill</h1>
				{view ? <ListView data={data} /> : <CardView data={data} />}
			</div>
		</div>
	);
}
