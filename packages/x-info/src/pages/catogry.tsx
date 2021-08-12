import React from 'react'
import { useParams } from 'react-router-dom'
import useRequest from '../hooks/userequest'
import styles from './catogry.module.css'

const CatogryPage = () => {
  const {catogry, id} = useParams()
  const {data} = useRequest('GET_DETAIL_INFO', {type: catogry, id}, true)
  return (<div className={styles.catogryWrapper}>
    <div className={styles.menuWrapper}>
      <div className={styles.menuPanel}>
        <span className={styles.menuItem}>首页<span className={styles.menuArrow}>&gt;</span></span>
        <span className={styles.menuItem}>{data ? data.catogaryType : ' '}<span className={styles.menuArrow}>&gt;</span></span>
        <span className={[styles.menuItem,styles.menuTitle].join(' ')}>{data ? data.title : ''}</span>
      </div>
    </div>
    <div className='d-flex'>
      <div className={[styles.contentWrapper, 'd-flex-1'].join(' ')}></div>
      <div className={styles.sideWrapper}>
        <div className="mgb-20"></div>
        <div className="mgb-20"></div>
      </div>
    </div>
  </div>)
}

export default CatogryPage