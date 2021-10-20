import styles from '../styles/Header.module.css'
import Image from 'next/image'
import logo from '../public/logo.png'
import { top } from '../lng/fr.js'

export default function header() {
    return (
        <div className={styles.dataContainer}>
            <Image className={styles.logo} src={logo} alt="logo"/><br />
            <div className={styles.txt}>{ top.txt }</div>
        </div>
    )
 }