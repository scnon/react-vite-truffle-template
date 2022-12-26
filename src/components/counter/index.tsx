import { useEffect, useState } from "react"
import { Button } from "antd"

import styles from './index.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('count changed', count)
    })

    useEffect(() => {
        console.log('component mounted')
    }, [])

    useEffect(() => {
        console.log('component mounted or count changed', count)
    }, [count])

    console.log("render")

    return (
        <div className={styles.box}>
            Count: {count}
            <Button type="primary" onClick={() => setCount(count + 1)}>+</Button>
            Name: {name}
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Counter