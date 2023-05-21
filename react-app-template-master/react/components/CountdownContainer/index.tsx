import React from "react";
import CountdownContainerInterface from "../../types/CountdownContainerInterface";
import styles from "./styles.css";

const CountdownContainer = ({ timer }: CountdownContainerInterface) => {
    return (
        <div className={styles["countdown__body"]}>
            <div className={styles["countdown__text"]}>
                <p>Termina em</p>
            </div>
            <div className={styles["countdown__dates"]}>
                <div className={styles["countdown__date"]}>
                    <p>{String(timer.hrs).padStart(2, "0")}</p>
                    <span>h</span>
                </div>
                <span className={styles["countdown__dots"]}>:</span>
                <div className={styles["countdown__date"]}>
                    <p>{String(timer.min).padStart(2, "0")}</p>
                    <span>m</span>
                </div>
                <span className={styles["countdown__dots"]}>:</span>
                <div className={styles["countdown__date"]}>
                    <p>{String(timer.seg).padStart(2, "0")}</p>
                    <span>s</span>
                </div>
            </div>
        </div>
    );
}

export default CountdownContainer;