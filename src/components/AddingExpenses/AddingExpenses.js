import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {
    changeCommunalSum,
    changeOtherExpensesSum,
    changeRestaurantSum,
    changeSupermarketSum,
    changeTransportSum
} from '../../utils/actions'

export default function AddingExpenses() {

    const transportSum = useSelector((state) => state.transportSum);
    const communalSum = useSelector((state) => state.communalSum);
    const supermarketSum = useSelector((state) => state.supermarketSum);
    const restaurantSum = useSelector((state) => state.restaurantSum);
    const otherExpensesSum = useSelector((state) => state.otherExpensesSum);

    const dispatch = useDispatch();

    const [typeAction, setTypeAction] = useState('');

    const [sum, setSum] = useState(0);

    const handleChangeType = (event) => {
        setTypeAction(event.target.value);
    };

    const handleChangeSum = () => {
        switch (typeAction) {
            case transportSum: {
                dispatch(changeTransportSum(transportSum + sum));
                break;
            }
            case communalSum: {
                dispatch(changeCommunalSum(communalSum + sum));
                break;
            }
            case supermarketSum: {
                dispatch(changeSupermarketSum(supermarketSum + sum));
                break;
            }
            case restaurantSum: {
                dispatch(changeRestaurantSum(restaurantSum + sum));
                break;
            }
            case otherExpensesSum: {
                dispatch(changeOtherExpensesSum(otherExpensesSum + sum));
                break;
            }
            default: {
                return;
            }
        }
    };

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl sx={{width: 220}}>
                <InputLabel id="demo-simple-select-label">Тип расходов</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeAction}
                    label="Тип расходов"
                    onChange={handleChangeType}
                >
                    <MenuItem value={communalSum}>ЖКХ, связь, интернет</MenuItem>
                    <MenuItem value={transportSum}>Транспорт</MenuItem>
                    <MenuItem value={supermarketSum}>Супермаркеты</MenuItem>
                    <MenuItem value={restaurantSum}>Рестораны</MenuItem>
                    <MenuItem value={otherExpensesSum}>Прочие расходы</MenuItem>
                </Select>
            </FormControl>
            <TextField sx={{width: 130}}
                       id="outlined-basic"
                       label="Сумма"
                       variant="outlined"
                       type="number"
                       onChange={(event) => setSum(+event.target.value)}
            />
            <Button sx={{height: 55}}
                variant="contained"
                onClick={handleChangeSum}
            >
                Добавить
            </Button>
        </Box>

    );


}