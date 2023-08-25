import React from "react";
import styles from "../styles/popup.module.css";

export default function Popup(Data) {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.closeBtn}>
					<button>
						<i class="fa-solid fa-xmark"></i>
					</button>
				</div>
				<p>
					<span>country</span>
					Republica Dominicana
				</p>
				<p>
					<span>id</span>1
				</p>
			</div>
		</div>
	);
}
