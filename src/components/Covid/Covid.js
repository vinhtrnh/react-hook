import './Covid.scss';
import useFetch from '../../custom/fetch';


const Covid = () => {
    const { data: dataCovid, isLoading, isError }
        = useFetch('https://api.covid19api.com/country/viet-nam?from=2021-11-01T00:00:00Z&to=2021-12-01T00:00:00Z')
    return (
        <>
            <h3>Covid-19 Tracking in VietNam</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map((item) => {
                        return (
                            <tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Active}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>

                            </tr>
                        )
                    })}

                    {isLoading === true && <tr>
                        <td colSpan="5" style={{ textAlign: 'center' }}>Loading...</td>
                    </tr>}

                    {isError === true && <tr>
                        <td colSpan="5" style={{ textAlign: 'center' }}>Something went wrong...</td>
                    </tr>}


                </tbody>
            </table>
        </>
    )
}

export default Covid