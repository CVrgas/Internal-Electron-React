import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import styles from "../styles/AddData.module.css";

const coin = {
	Id: "",
	Date: "",
	Mintmark: "",
	Country: "",
	Grade: "",
	denotation: "",
};

export default function AddData() {
	const [type, setType] = useState("");

	function handleChange(e) {
		setType(e.target.value);
	}

	return (
		<div className={styles.center}>
			<h1> Enter Coin/bill data</h1>
			<form
				action=""
				className={styles.UploadForm}
			>
				<div className={styles.photoInput}>
					<img
						src="https://fakeimg.pl/350x200/?text=World&font=lobster"
						alt="coin's photo"
					/>
					<div className={styles.UploadBtn}>
						<button>upload</button>
						<button>remove</button>
					</div>
				</div>
				<div className={styles.type}>
					<label htmlFor="type-select">Choose type:</label>
					<select
						name=""
						id="type-select"
						onChange={(e) => handleChange(e)}
					>
						<option value=""></option>
						<option value="bill">bill</option>
						<option value="coin">coin</option>
					</select>
				</div>
				<div className={styles.coinDetails}>
					<h2>Coin's Details</h2>
					{Object.keys(coin).map((value, i) => {
						return (
							<div
								key={`CD${i}`}
								className={styles.inputData}
							>
								<input
									type="text"
									required
								/>
								<div className={styles.underline}></div>
								<label htmlFor={`labelFor${value}`}>{value}</label>
							</div>
						);
					})}
				</div>
				<div className={styles.saleDetails}>
					<h2>Sale Details</h2>
					{Object.keys(coin).map((value, i) => {
						return (
							<div
								key={`SD${i}`}
								className={styles.inputData}
							>
								<input
									type="text"
									required
								/>
								<div className={styles.underline}></div>
								<label htmlFor={`labelFor${value}`}>{value}</label>
							</div>
						);
					})}
				</div>
				<div className={styles.submitArea}>
					<button>Guardar</button>
				</div>
			</form>
		</div>
	);
}
