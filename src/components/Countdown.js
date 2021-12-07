import { useState, useEffect } from 'react'

const Countdown = (props) => {
    const [countDown, setCountDown] = useState(30)
    useEffect(() => {
        if (countDown === 0) {
            props.onTimesUp()
            return
        }
        let timer = setInterval(() => setCountDown(countDown - 1), 1000)

        return () => {
            clearInterval(timer)
        }
    }, [countDown])
    return (
        <>
            <h2>TIMER OTP please wait </h2>
            <div style={{ marginTop: '20px' }}>{countDown} </div>
        </>
    )
}

export default Countdown