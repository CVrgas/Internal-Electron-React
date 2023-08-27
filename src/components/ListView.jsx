import React, { useState } from "react";
import styles from "../styles/ListView.module.css";

export default function ListView({ data }) {
	const maxItemPerPage = 15;
	

	const totalPages = Math.ceil(data.length / maxItemPerPage);
	const [currentPage, setCurrentPage] = useState(1);
	const itemToShow = data.slice(
		(currentPage - 1) * maxItemPerPage,
		currentPage * maxItemPerPage
	);
	return (
		<>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Numero</th>
						<th>Country</th>
						<th>valor</th>
						<th>ano</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{itemToShow.map(({ id, country, denomination, year }, i) => {
						return (
							<tr key={i}>
								<td>{id}</td>
								<td>{country}</td>
								<td>${denomination}</td>
								<td>{year}</td>
								<td>
									<button>View</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
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
