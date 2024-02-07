import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import {useSelector} from "react-redux";

export default function ChartExpenses() {

    const transportSum = useSelector((state) => state.transportSum);
    const communalSum = useSelector((state) => state.communalSum);
    const supermarketSum = useSelector((state) => state.supermarketSum);
    const restaurantSum = useSelector((state) => state.restaurantSum);
    const otherExpensesSum = useSelector((state) => state.otherExpensesSum);

    const transportLimit = useSelector((state) => state.transportLimit);
    const communalLimit = useSelector((state) => state.communalLimit);
    const supermarketLimit = useSelector((state) => state.supermarketLimit);
    const restaurantLimit = useSelector((state) => state.restaurantLimit);
    const otherExpensesLimit = useSelector((state) => state.otherExpensesLimit);

    const options = {
        chart: {
            type: "column"
        },
        title: {
            text: "График расходов "
        },
        xAxis: {
            categories: ["Транспорт", 'ЖКХ, связь, интернет', 'Супермаркеты', 'Рестораны', 'Прочие расходы']
        },
        yAxis: {
            title: {
                text: "Сумма затрат"
            }
        },
        series: [{
            name: "Потрачено",
            data: [transportSum, communalSum, supermarketSum, restaurantSum, otherExpensesSum]
        }, {
            name: "Лимит",
            data: [transportLimit, communalLimit, supermarketLimit, restaurantLimit, otherExpensesLimit]
        }]
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
}


