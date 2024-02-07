import styles from "../AddingLimits/AddingLimits.modules.css";
import {Button, IconButton, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    changeCommunalLimit,
    changeOtherExpensesLimit,
    changeRestaurantLimit,
    changeSupermarketLimit,
    changeTransportLimit,

} from "../../utils/actions";

export default function TypeOfLimits({limit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedLimit, setEditedLimit] = useState('');
    const dispatch = useDispatch();
    const limitText = useSelector((state) => state[limit.key])
    function handleEditedLimitChange(e) {
        setEditedLimit(e.target.value);
    }

    function handleEditedSumClick() {
        switch (limit.key) {
            case 'transportLimit': {
                dispatch(changeTransportLimit(+editedLimit));
                setIsEditing(false);
                break;
            }
            case 'communalLimit': {
                dispatch(changeCommunalLimit(+editedLimit));
                setIsEditing(false);
                break;
            }
            case 'supermarketLimit': {
                dispatch(changeSupermarketLimit(+editedLimit));
                setIsEditing(false);
                break;
            }
            case 'restaurantLimit': {
                dispatch(changeRestaurantLimit(+editedLimit));
                setIsEditing(false);
                break;
            }
            case 'otherExpensesLimit': {
                dispatch(changeOtherExpensesLimit(+editedLimit));
                setIsEditing(false);
                break;
            }
            default: {
                setIsEditing(false);
                return;
            }
        }
    }

    return (
        <>
            <h3 className={styles.subtitle}>
                {limit.subtitle}
            </h3>

            {
                isEditing ? (
                    <div className={styles.typeOfExpenseContainer}>
                        <TextField sx={{width: 200}}
                                   id="standard-basic"
                                   variant="standard"
                                   type='number'
                                   onChange={handleEditedLimitChange}
                        />
                        <Button sx={{height: 30}}
                                variant="contained"
                                onClick={handleEditedSumClick}
                        >
                            OK
                        </Button>
                    </div>
                ) : (
                    <div className={styles.typeOfExpenseContainer}>
                        <span style={{fontSize: 30, fontWeight: 600, color: "blue"}}
                        >
                            {limitText}
                        </span>
                        <IconButton size="small"
                                    color='primary'
                                    onClick={() => setIsEditing(true)}
                        >
                            <EditIcon/>
                        </IconButton>
                    </div>
                )
            }
        </>
    );
}