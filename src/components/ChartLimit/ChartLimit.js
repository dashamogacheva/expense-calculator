import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import {useSelector} from "react-redux";
import styles from './ChartLimit.module.css'

export default function ChartLimit() {

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
            type: "pie"
        },

        title: {
            text: "Диаграмма расходов"
        },
        series: [ {
            name: "Расходы",
            colorByPoint: true,
            data: [
                {
                    name: "Транспорт",
                    y: transportSum
                },
                {
                    name: "ЖКХ, связь, интернет",
                    y: communalSum
                },
                {
                    name: "Супермаркеты",
                    y: supermarketSum
                },
                {
                    name: "Рестораны",
                    y: restaurantSum
                },
                {
                    name: "Прочие расходы",
                    y: otherExpensesSum
                }
            ]
        }]
    };

    const optionsLimit = {
        chart: {
            type: "pie"
        },
        title: {
            text: "Диаграмма лимитов"
        },
        series: [ {
            name: "Расходы",
            colorByPoint: true,
            data: [
                {
                    name: "Транспорт",
                    y: transportLimit
                },
                {
                    name: "ЖКХ, связь, интернет",
                    y: communalLimit
                },
                {
                    name: "Супермаркеты",
                    y: supermarketLimit
                },
                {
                    name: "Рестораны",
                    y: restaurantLimit
                },
                {
                    name: "Прочие расходы",
                    y: otherExpensesLimit
                }
            ]
        }]
    };

    return (
        <div className={styles.pieCharts}>
            <HighchartsReact
                highcharts={Highcharts}
                options={optionsLimit}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}


