import React from "react";
import CountdownCollectionContainerInterface from "../../../../types/CountdownCollectionContainerInterface";
import styles from "./styles.css";

const CountdownCollectionContainer = ({ timer }: CountdownCollectionContainerInterface) => {
    return (
        <div className={styles["countdown_collection__body"]}>
            <div className={styles["countdown_collection__text"]}>
                <p className={styles["countdown_collection__text_p"]}>Termina em</p>
            </div>
            <div className={styles["countdown_collection__dates"]}>
                <div className={styles["countdown_collection__date"]}>
                    <p className={styles["countdown_collection__text_p"]}>{String(timer.hrs).padStart(2, "0")}</p>
                    <span className={styles["countdown_collection__text_span"]}>h</span>
                </div>
                <span className={styles["countdown_collection__dots"]}>:</span>
                <div className={styles["countdown_collection__date"]}>
                    <p className={styles["countdown_collection__text_p"]}>{String(timer.min).padStart(2, "0")}</p>
                    <span className={styles["countdown_collection__text_span"]}>m</span>
                </div>
                <span className={styles["countdown_collection__dots"]}>:</span>
                <div className={styles["countdown_collection__date"]}>
                    <p className={styles["countdown_collection__text_p"]}>{String(timer.seg).padStart(2, "0")}</p>
                    <span className={styles["countdown_collection__text_span"]}>s</span>
                </div>
            </div>
        </div>
    );
}

export default CountdownCollectionContainer;