import styles from './AddingLimits.modules.css';
import TypeOfLimits from "../TypeOfLimits/TypeOfLimits";
import {limitsArray} from "../../utils/limitsData";

export default function AddingLimits() {
    return (
        <div className={styles.container} style={{marginTop: 25}}>
            <h2 className={styles.title} style={{marginBottom: 35}}>Лимиты расходов:</h2>
            {limitsArray.map((limit) => (<TypeOfLimits limit={limit} key={limit.key}/>))}
        </div>
    );
}