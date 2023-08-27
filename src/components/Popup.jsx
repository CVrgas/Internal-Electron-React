import React from "react";
import styles from "../styles/popup.module.css";

export default function Popup({ selected, deselect }) {
	if (selected === undefined) return;
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.closeBtn}>
					<button onClick={() => deselect(undefined)}>
						<i class="fa-solid fa-xmark"></i>
					</button>
				</div>
				{
					<>
						<p>
							<span>{selected.country}</span>
							{selected.country}
						</p>
						<p>
							<span>id</span>
							{selected.id}
						</p>
					</>
				}
			</div>
		</div>
	);
}
