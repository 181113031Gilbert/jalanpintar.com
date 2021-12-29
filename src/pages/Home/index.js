import React from 'react'
import { HomeBg, LoginBg } from '../../assets'
import { ButtonCreate, Gap, Input, Link } from '../../components'
import './home.scss'

const Home = () => {
    return (
        <div className='body-home'>
            <div className='body-left'>
                <p className='title'>JalanPintar.com</p>
                <p className='text'>Adalah sebuah platfrom kursus online
                    untuk kami para siswa SMA/SMK yang akan
                    melanjutakan studi di tingkat yang lebih
                    tinggi dengan bimbingan dari para Guru yang
                    telah akhli di bidangnya .</p>
            </div>
            <div className='body-right'>
                <img src={HomeBg} alt='register background' />
            </div>
        </div>
    )
}

export default Home
