import Script from 'next/script'
import styles from '@/styles/donation.module.css'

function Donation() {
  return (
    <a href='https://ko-fi.com/J3J4JAD3Q' target='_blank'>
      <img
        height='36'
        style={{ border: '0px', height: '36px' }}
        src='https://storage.ko-fi.com/cdn/kofi2.png?v=3'
        alt='Buy Me a Coffee at ko-fi.com'
      />
    </a>
  )
}

export default Donation
