import React from "react";
import styles from "../styles/popup.module.css";

export default function Popup({ selected, deselect }) {
	if (selected === undefined) return;
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.closeBtn}>
					<button onClick={() => deselect(undefined)}>
						<i className="fa-solid fa-xmark"></i>
					</button>
				</div>
				{
					<>
						<p>
							<span>country</span>
							{selected.country}
						</p>
						<p className={styles.value}>${selected.denomination}</p>
						<p>
							<span>year</span> {selected.year}
						</p>
						<p>
							<span>composition</span> {selected.composition}
						</p>
						<p>
							<span>weight</span> {selected.weight}
						</p>
						<p>
							<span>diameter</span> {selected.diameter}
						</p>
						<p>
							<span>condition</span> {selected.condition}
						</p>
						<p>
							<span>mintage</span> {selected.mintage}
						</p>
						<p>
							<span>condition</span> {selected.condition}
						</p>

						{selected.certification.graded === true ? (
							<p>
								{" "}
								<span>grade</span> {selected.certification.grade}
							</p>
						) : null}
						<p>
							<span>description</span> {selected.description}
						</p>
					</>
				}
			</div>
		</div>
	);
}

// "id": 1,
// "country": "Dominican Republic",
// "denomination": "50",
// "year": 1954,
// "composition": "Silver",
// "weight": "20 grams",
// "diameter": "35mm",
// "condition": "Uncirculated",
// "mintage": 10000,
// "description": "Commemorative coin featuring national hero Juan Pablo Duarte.",
// "images": [
// 	"https://example.com/coin_front.jpg",
// 	"https://example.com/coin_back.jpg"
// ],
// "certification": {
// 	"graded": true,
// 	"grading_company": "NGC",
// 	"grade": "MS 65"
// },
// "price": 150.0
