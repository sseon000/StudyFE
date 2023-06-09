function changePhone1() {
    // 1. DOM 선택
    const phone1 = document.getElementById("phone1").value;
   
    // 2. 길이가 3일때 phone2로 포커스 이동
    if(phone1.length === 3) {
        document.getElementById("phone2").focus();
    }
}

function changePhone2() {
    // 1. DOM 선택
    const phone2 = document.getElementById("phone2").value;
   
    // 2. 길이가 4일때 phone3으로 포커스 이동
    if(phone2.length === 4) {
        document.getElementById("phone3").focus();
    }
}

function changePhone3() {
     // 1. DOM 선택
     const phone1 = document.getElementById("phone1").value;
     const phone2 = document.getElementById("phone2").value;
     const phone3 = document.getElementById("phone3").value;
   
     // 2. 길이가 4일때 token__button 버튼 활성화
     if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
         document.getElementById("token__button").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
         document.getElementById("token__button").removeAttribute("disabled")
     }
}

let isTimerStarted = false;

//function getToken() {
function getToken() {

    if(!isTimerStarted) {
        const btnTimerConfirm = document.getElementById("token__timer__confirm__button");
        //btnTimerConfirm.removeAttribute("disabled");

        isTimerStarted = true; // 타이머 시작
        btnTimerConfirm.disabled = false; // 인증완료 버튼 활성화

        // 1. 인증번호 표시
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
        const tokenTarget = document.getElementById("token");
        const timerTarget = document.getElementById("token__timer");
        tokenTarget.innerText = token;

        // 2. 3분 타이머 시작
        let time = 6;
        let timer; 

        timer = setInterval(function() {

            if(time >= 0) { // 시간이 0초까지 반복
                const min = Math.floor(time / 60);
                const sec = String(time % 60).padStart(2,"0");
                //console.log(min + ":" + sec)
                timerTarget.innerText = `${min}:${sec}`;
                time -= 1;
            } else {
                isTimerStarted = false; // 타이머 시작
                btnTimerConfirm.disabled = true; // 인증완료 버튼 비활성화
                tokenTarget.innerText = '000000';
                timerTarget.innerText = '3:00';
                clearInterval(timer);
            }

        }, 1000)
    } else {

    }
}

function getTokenTimerConfirm() {
    const timerTarget = document.getElementById("token__timer");
    const btnTimerConfirm = document.getElementById("token__timer__confirm__button");
    const btnSignup = document.getElementById("signup__button");
    console.log(timerTarget.innerText);   

    // 0:00 전에 인증 완료 버튼 누를시 인증 완료 알림창
    if(timerTarget.innerText !== '0:00') {
        alert('인증이 완료되었습니다.');
        btnTimerConfirm.value = '인증완료';
        btnTimerConfirm.disabled = true;
        btnSignup.disabled = false;
        btnSignup.style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
    } else {

    }

}

function signup() {
    const email = document.getElementById("email").value
    const writer = document.getElementById("writer").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value
    const location = document.getElementById("location").value
    const genderWoman = document.getElementById("gender__woman").checked
    const genderMan = document.getElementById("gender__man").checked

    let isValid = true
    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__email").innerText = ""
    }

    if(writer === "") {
        document.getElementById("error__writer").innerText = "이름이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__writer").innerText = ""
    }

    if(password1 === ""){
        document.getElementById("error__password1").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__password1").innerText = ""
    }

    if(password2 === ""){
        document.getElementById("error__password2").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__password2").innerText = ""
    }

    if(password1 !== password2) {
        document.getElementById("error__password1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__password2").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false
    }

    if(location !== "서울" && location !== "경기" && location !== "인천"){
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__location").innerText = ""
    }

    if(genderWoman === false && genderMan === false){
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__gender").innerText = ""
    }

    if(isValid === true){
        alert("코드캠프 가입을 축하합니다.")
    }
}