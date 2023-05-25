import React from "react";
import BannerCountdownContainerInterface from "../../../../types/BannerCountdownContainerInterface";
import styles from "./styles.css";

const BannerCountdownContainer = ({ timer, link, title }: BannerCountdownContainerInterface) => {
    return (
        <div className={styles["banner_countdown__container"]}>
            <div className={styles["banner_countdown__body"]}>
                {
                    (title !== "") &&
                    <div className={styles["banner_countdown__text"]}>
                        <p>{title}</p>
                    </div>
                }
                <div className={styles["banner_countdown__dates"]}>
                    <div className={styles["banner_countdown__date"]}><p>{String(timer.day).padStart(2, "0")}</p></div>
                    <span className={styles["banner_countdown__dots"]}>:</span>
                    <div className={styles["banner_countdown__date"]}><p>{String(timer.hrs).padStart(2, "0")}</p></div>
                    <span className={styles["banner_countdown__dots"]}>:</span>
                    <div className={styles["banner_countdown__date"]}><p>{String(timer.min).padStart(2, "0")}</p></div>
                    <span className={styles["banner_countdown__dots"]}>:</span>
                    <div className={styles["banner_countdown__date"]}><p>{String(timer.seg).padStart(2, "0")}</p></div>
                </div>
                {
                    (link !== "") &&
                    <a href={link} className={styles["banner_countdown__btn"]}>Comprar</a>
                }
            </div>
        </div>
    );
}

export default BannerCountdownContainer;