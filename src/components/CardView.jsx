import React, { useEffect, useState } from "react";
import styles from "../styles/CardView.module.css";

export default function CardView({ data, selectData }) {
	const maxItemPerPage = 12;

	const totalPages = Math.ceil(data.length / maxItemPerPage);
	const [currentPage, setCurrentPage] = useState(1);
	const itemToShow = data.slice(
		(currentPage - 1) * maxItemPerPage,
		currentPage * maxItemPerPage
	);
	useEffect(() => {
		setCurrentPage(1); // Set currentPage to 1 when the component mounts or reloads
	}, [data]);

	return (
		<>
			<div className={styles.cardContainer}>
				{itemToShow.map(({ id, country, year, denomination }, i) => {
					return (
						<div
							key={i}
							className={styles.card}
							onClick={() => selectData(id)}
						>
							<img
								src="https://fakeimg.pl/350x200/?text=World&font=lobster"
								alt="Coin's Photo"
							/>
							<div className={styles.info}>
								<p>
									Country <span>{country}</span>
								</p>
								<p>
									value <span>{denomination}</span>
								</p>
								<p>
									Year <span>{year}</span>
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className={styles.navigation}>
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<div>
					Page {currentPage} of {totalPages}
				</div>
				<button
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</>
	);
}
