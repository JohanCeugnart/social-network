import styles from '../styles/Header.module.css'
import Image from 'next/image'
import logo from '../public/logo.png'

export default function header() {
    return (
        <div className={styles.dataContainer}>
            <Image className={styles.logo} src={logo} alt="logo"/>
        </div>
    )
 }