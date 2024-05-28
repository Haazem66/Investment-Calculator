import { calculateInvestmentResults , formatter } from "../util/investment";


function Results({input}) {
    const results = calculateInvestmentResults(input);
    const initialIvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    console.log(results);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>
                        Year
                    </th>
                    <th>
                        Ivestment Value
                    </th>
                    <th>
                        Interest (Year)
                    </th>
                    <th>
                        Total interest
                    </th>
                    <th>
                        invested capital
                    </th>
                </tr>
            </thead>
            <tbody>
                {results.map((yearDate) => {
                    const totalInterest = yearDate.valueEndOfYear - yearDate.annualInvestment * yearDate.year - initialIvestment;
                    const totalAmountInvested = yearDate.valueEndOfYear - totalInterest;
                    return <tr key={yearDate.year}>
                        <td>{yearDate.year}</td>
                        <td>{formatter.format(yearDate.valueEndOfYear)}</td>
                        <td>{formatter.format(yearDate.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Results;