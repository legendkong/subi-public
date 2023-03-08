import styles from '../styles/example.module.css'

function Example() {
  return (
    <>
      <div className={styles.writer}>
        <div className={styles.container}>
          <div className={styles.column1}>
            <div className={styles.key}>Singapore phone number</div>
          </div>
          <div className={styles.column2}>
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.column3}>
            <div className={styles.key2}>/^\+65\d&#123;8&#125;$/</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Example
