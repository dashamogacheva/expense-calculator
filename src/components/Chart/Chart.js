import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import {useSelector} from "react-redux";

export default function Chart() {

    const transportSum = useSelector((state) => state.transportSum);
    const communalSum = useSelector((state) => state.communalSum);
    const supermarketSum = useSelector((state) => state.supermarketSum);
    const restaurantSum = useSelector((state) => state.restaurantSum);
    const otherExpensesSum = useSelector((state) => state.otherExpensesSum);

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
            name: "May",
            data: [transportSum, communalSum, supermarketSum, restaurantSum, otherExpensesSum]
        }]
    }

    return (
       <HighchartsReact
           highcharts={Highcharts}
           options={options}
       />
    );
}


