import { useState, useEffect } from 'react'

const Countdown = () => {
    const [countDown, setCountDown] = useState(10)
    useEffect(() => {
        if (countDown === 0) {
            return
        }
        let timer = setInterval(() => setCountDown(countDown - 1), 1000)

        return () => {
            clearInterval(timer)
        }
    }, [countDown])
    return (
        <div>{countDown} </div>
    )
}

export default Countdown