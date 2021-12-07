import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1st step
        async function fetchData() {
            try {
                // You can await here
                let res = await axios.get(url, { cancelToken: ourRequest.token })
                let data = res && res.data ? res.data : []
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD-MM-YYYY')
                        return item
                    })
                    data = data.reverse()
                }
                setData(data)
                setIsLoading(false)
                setIsError(false)
                // ...

            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request cancelled', err.message)
                } else {

                    setIsError(true)
                    setIsLoading(false)
                }
            }
        }

        fetchData();
        return () => {
            ourRequest.cancel('Operation cancel by the user') // <-- 3rd step
        }

    }, [url])
    return {

        data, isLoading, isError
    }

}

export default useFetch