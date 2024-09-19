import { useEffect, useState } from "react";

export function useCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count < 0) {
            setCount(0)
        }
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return { count, increment, decrement, reset }
}