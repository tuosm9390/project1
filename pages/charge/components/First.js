import React from 'react'
import styles from '../styles/First.module.css'
import rightSidebar from '../../../components/common/sidebar/rightSidebar'
function First() {
  return (
    // sidebar 레이아웃
    <>
        <div className={styles.chargeContainer}>
          <div className={styles.chargeInner}>
            {/* 첫번째줄 */}
            <div className={styles.firstRowContainer}>
              <div className={styles.inputContainer}>
                <input className={styles.firstRowInput}></input>
              </div>
              <button className={styles.btnContainer}>
                <div className={styles.firstRowBtn}>버튼</div>
              </button>
            </div>
            {/* 두번째줄 */}
            <div className={styles.secondRowContainer}>
                <div className={styles.firstDivWrapper}>
                    <div className={styles.firstDivTitle}>보유머니</div>
                    <div className={styles.firstDivContent}>0W</div>
                </div>
                <div className={styles.secondDivWrapper}>
                    <div className={styles.secondDivContent}>0원</div>
                </div>
            </div>
            {/* 세번째줄 */}
            <div className={styles.thirdRowContainer}>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem} style={{background:'#B22222',}}></div>
            </div>
            {/* 네번째줄 */}
            <div className={styles.fourthRowContainer}>
                <div className={styles.userAccInfoTextWrapper}>
                    <div className={styles.usrAccInfoText}>회원 계좌 정보</div>
                </div>
                <div className={styles.userAccInfoBox}></div>
            </div>
            {/* 다섯번째 */}
            <div className={styles.fifthRowContainer}>
                <div className={styles.selectBoxContainer}>
                    <div className={styles.selectBoxInner}>강강</div>
                </div>
                <div className={styles.pointBoxContainer}>
                    <div className={styles.pointBoxInner}>0P</div>
                </div>
                <div className={styles.firstBoxContainer}>
                    <div className={styles.firstBoxInner}>강강강강</div>
                </div>
                <div className={styles.secondBoxContainer}>
                    <div className={styles.secondBoxInner}>강강강강강강</div>
                </div>
            </div>
            {/* 여섯번째 */}
            <div className={styles.sixthRowContainer}>
                <div className={styles.bigBoxWrapper}>
                    <div className={styles.bigBoxInner}>
                        글글글글글글글<br></br>
                        글글글글글글글<br></br>
                        글글글글글글글<br></br>
                        글글글글글글글<br></br>
                        글글글글글글글
                    </div>
                </div>
            </div>
            {/* 일곱번째 */}
            <div className={styles.seventhRowContainer}>
                <div className={styles.seventhRowWrapper}>
                    <div className={styles.seventhRowTitleWrapper}>
                        <div className={styles.seventhRowTitle}>강강강강강강</div>
                    </div>
                    <div className={styles.seventhRowRadioWrapper}>
                        <div><input type="radio" name="fruit" value={true}/> 네</div>
                        <div><input type="radio" name="fruit" value={false}/> 아니요</div>
                    </div>
                    <div className={styles.seventhRowTextWrapper}>
                        <div className={styles.seventhRowText}>강강강강강강강강읽읽읽읽달달달알알알알알</div>
                    </div>
                </div>
            </div>
            {/* 여덟번째 */}
            <div className={styles.eighthRowContainer}>
                    <button className={styles.startBtn}>강강강강</button>
            </div>
            {/* 아홉 */}
            <div className={styles.ninethRowContainer}>
                <div className={styles.ninethRowWrapper}>
                글글글글글글글<br></br>
                글글글글글글글<br></br>
                글글글글글글글<br></br>
                글글글글글글글<br></br>
                글글글글글글글

                </div>
            </div>
          </div>
        </div>
        </>
  )
}

export default First

