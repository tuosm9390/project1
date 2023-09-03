//secondPageArr와 historyPageArr 내용은 같지만 혹시몰라 따로만듦

export const firstPageArr=[    //charge/First 페이지에 들어갈 오른쪽 사이드바의 데이터 
    {
        id:1,
        title:'입금 신청', 
        content:['1. 비밀번호 입력 후 전용계좌 확인','2. 충전 금액 입력','3. 충전 신청 버튼 클릭']
    },
    {
        id:2,
        title:'입금 진행', 
        content:['1. 신청한 금액을 전용계좌로 입금','2. 10분 이내 입금 요망(필수)']
    },
    {
        id:3,
        title:'입금 확인 중',
        content:['1. 담당자 입금내역과 충전 신청 내역 대조','2. 담당자 확인 후 승인']
    },
    {
        id:4,
        title:'입금 완료', 
        content:['1. 보유머니 확인']

    },
    
]

export const secondPageArr=[   //charge/Second 페이지에 들어갈 오른쪽 사이드바의 데이터 
    {
        id:1,
        title:'환전 신청', 
        content:['1. 환전금액 입력','2. 환전신청 버튼 클릭']
    },
    {
        id:2,
        title:'환전 처리중',
        content:['1. 담당 부서에서 환전신청 접수','2. 검수 후 순차적으로 처리진행','3. 신청한 계좌로 송금진행']
    },
    {
        id:3,
        title:'환전 완료', 
        content:['1. 완료 처리상태로 변경','2. 등록된 계좌 잔액확인']
    }
]

export const historyPageArr=[   //charge/history 페이지에 들어갈 오른쪽 사이드바의 데이터 
    {
        id:1,
        title:'환전 신청', 
        content:['1. 환전금액 입력','2. 환전신청 버튼 클릭']
    },
    {
        id:2,
        title:'환전 처리중',
        content:['1. 담당 부서에서 환전신청 접수','2. 검수 후 순차적으로 처리진행','3. 신청한 계좌로 송금진행']
    },
    {
        id:3,
        title:'환전 완료', 
        content:['1. 완료 처리상태로 변경','2. 등록된 계좌 잔액확인']
    }
]