import styles from '../styles/Second.module.css'
import RightSidebar from '../../First/components/rightSidebar'

export default function Second(){
    return (
        <div className={styles.chargeContainer}>
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
            {/* 첫번째줄 */}
            <div className={styles.firstRowContainer}>
                <div className={styles.firstDivWrapper}>
                    <div className={styles.firstDivTitle}>보유머니</div>
                    <div className={styles.firstDivContent}>0W</div>
                </div>
                <div className={styles.secondDivWrapper}>
                    <div className={styles.secondDivContent}>0원</div>
                </div>
            </div>
            {/* 두번째줄 */}
            <div className={styles.secondRowContainer}>
                <button className={styles.firstDivWrapper}>
                    <div>0% 적용회원</div>
                </button>
                <button className={styles.secondDivWrapper}>
                    <div>입금 전용 롤링 100% 완료</div>
                </button>
                <button className={styles.thirdDivWrapper}>
                    <div>나의 롤링 확인</div>
                </button>
                <button className={styles.fourthDivWrapper} style={{background:'#4169E1'}}>
                    <div>환전신청</div>
                </button>
            </div>
            {/* 세번째줄 */}
            <div className={styles.thirdRowContainer}>
                <button className={styles.boxItem}>1만</button>
                <button className={styles.boxItem}>5만</button>
                <button className={styles.boxItem}>10만</button>
                <button className={styles.boxItem}>50만</button>
                <button className={styles.boxItem}>100만</button>
                <button className={styles.boxItem} style={{background:'#B22222',}}>정정</button>
            </div>
            {/* 네번째줄 */}
            <div className={styles.fourthRowContainer}>
                <div className={styles.userAccInfoTextWrapper}>
                    <div className={styles.userAccInfoText}>회원 계좌 정보</div>
                </div>
                <div className={styles.userAccInfoBox}>
                    <div>00은행/예금주000/351-0000-000000</div>
                </div>
            </div>
            {/* 다섯번째 */}
            <div className={styles.fifthRowContainer}>
                <div className={styles.bigBoxWrapper}>
                    <div className={styles.bigBoxInner}>
                    주의사항 <br/>
                    1. 의도적인 부정 환전 신청이 중복될 경우 즉시 회원 자격이 상실됩니다.<br/>
                    2. 은행의 평일 점검, 서버 점검, 전산 장애가 있을 경우 환전이 지연되오니 양해바랍니다. <br/>
                    3. 본인명의 계좌시 환전가능하며, 타인명의 출금시 환전 불가합니다. <br/>
                    4. 롤링규정을 충족하지 않을 경우, 환전 불가합니다. <br/>
                    5. 최소 환전금액은 1만원 이상 가능합니다.
                    </div>
                </div>
            </div>
            </div>
            </div>
            <RightSidebar />
        </div>    
    )
}

