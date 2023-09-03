import React from 'react'
import styles from '../styles/First.module.css'
import RightSidebar from './rightSidebar'
function First() {
    return (
        // sidebar 레이아웃
        <>
            <div className={styles.chargeContainer}>
                <div className={styles.chargeInnerWrapper}>
                    <div className={styles.chargeInner}>
                        {/* 첫번째줄 */}
                        <div className={styles.firstRowContainer}>
                            <div className={styles.inputContainer}>
                                <input className={styles.firstRowInput} placeholder='비밀번호 입력 후 전용 계좌 확인 버튼을 클릭해주세요.'></input>
                            </div>
                            <button className={styles.btnContainer}>
                                <div className={styles.firstRowBtn}>전용계좌확인</div>
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
                            <button className={styles.boxItem}>
                                <div>1만</div>
                            </button>
                            <button className={styles.boxItem}>
                                <div>5만</div>
                            </button>
                            <button className={styles.boxItem}>
                                <div>10만</div>
                            </button>
                            <button className={styles.boxItem}>
                                <div>50만</div>
                            </button>
                            <button className={styles.boxItem}>
                                <div>100만</div>
                            </button>
                            <button className={styles.boxItem} style={{ background: '#B22222', }}>
                                <div>정정</div>
                            </button>
                        </div>
                        {/* 네번째줄 */}
                        <div className={styles.fourthRowContainer}>
                            <div className={styles.userAccInfoTextWrapper}>
                                <div className={styles.usrAccInfoText}>회원 계좌 정보</div>
                            </div>
                            <div className={styles.userAccInfoBox}>
                                <div>00은행/예금주000/351-0000-000000</div>
                            </div>
                        </div>
                        {/* 다섯번째 */}
                        <div className={styles.fifthRowContainer}>
                            <div className={styles.selectBoxContainer}>
                                <div className={styles.selectBoxInner}>충전 보너스 선택</div>
                            </div>
                            <div className={styles.pointBoxContainer}>
                                <div className={styles.pointBoxInner}>0P</div>
                            </div>
                            <div className={styles.firstBoxContainer}>
                                <div className={styles.firstBoxInner}>롤링조건</div>
                            </div>
                            <div className={styles.secondBoxContainer}>
                                <div className={styles.secondBoxInner}>베팅금액 100%</div>
                            </div>
                        </div>
                        {/* 여섯번째 */}
                        <div className={styles.sixthRowContainer}>
                            <div className={styles.bigBoxWrapper}>
                                <div className={styles.bigBoxInner}>
                                롤링이란?<br />
                                입금액 대비 배팅 금액을 뜻합니다. <br />
                                 ex) <br />
                                 10만원 충전 후 10만원 베팅 (롤링 100%)  <br />
                                 10만원 충전 후 40만원 베팅 (롤링 400%)  <br />
                                 10만원 충전 후 200만원 베팅 (롤링 2000%) <br />
                                </div>
                            </div>
                        </div>
                        {/* 일곱번째 */}
                        <div className={styles.seventhRowContainer}>
                            <div className={styles.seventhRowWrapper}>
                                <div className={styles.seventhRowTitleWrapper}>
                                    <div className={styles.seventhRowTitle}>회원 계좌 정보</div>
                                </div>
                                <div className={styles.seventhRowRadioWrapper}>
                                    <div><input type="radio" name="fruit" value={true} /> 동의하며 보너스를 받겠습니다.</div>
                                    <div><input type="radio" name="fruit" value={false} /> 아니요 기본 이상 하겠습니다.</div>
                                </div>
                                <div className={styles.seventhRowTextWrapper}>
                                    <div className={styles.seventhRowText}>등록된 계좌에서 10분 이내 입금해주셔야합니다.</div>
                                </div>
                            </div>
                        </div>
                        {/* 여덟번째 */}
                        <div className={styles.eighthRowContainer}>
                            <button className={styles.startBtn}>
                                <div>충전신청</div>
                            </button>
                        </div>
                        {/* 아홉 */}
                        <div className={styles.ninethRowContainer}>
                            <div className={styles.ninethRowWrapper}>
                            주의사항 <br/>
                            1. 전용계좌 확인용 비밀번호는 로그인시 비밀번호와 동일합니다. <br/>
                            2. 입금 전 전용계좌확인은 필수사항으로 전 계좌로 입금시 회사는 책임지지 않습니다. <br/>
                            3. 타명의 입금시 충전 승인 불가합니다. 반드시 본인 명의 계좌로 입금하시기 바랍니다. <br/>
                            4. 충전 승인이 거절될 경우 쪽지가 발송되오니 확인 후 안내절차에 따라 진행바랍니다.<br/>

                            </div>
                        </div>
                    </div>
                </div>
                {/* rightside */}
                <RightSidebar />
            </div>
        </>
    )
}

export default First

