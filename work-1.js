class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname === "string") {
      this._name = newname;
    } else {
      throw new Error(newname + "은 글자가 아닙니다.");
    }
  }

  get age() {
    return this._age;
  }

  set age(newage) {
    if (typeof newage === "number") {
      this._age = newage;
    } else {
      throw new Error(newage + "는 숫자가 아닙니다.");
    }
  }

  get job() {
    return this._job;
  }

  set job(newjob) {
    if (typeof newjob === "string") {
      this._job = newjob;
    } else {
      throw new Error(newjob + "은 문자가 아닙니다.");
    }
  }
}

const component = () => {
  let obj = new BasicData("공욱재", 26, "미남");

  const decision = () => {
    if (obj instanceof BasicData) {
      return `
      <html>
      <head>
      </head>
      <body>
      <h1>${obj.name}</h1>
      <h2>${obj.age}</h2>
      <p>${obj.job}<p>
      </body>
      </html>
      `;
    } else {
      console.error("규격 미달");
    }
  };
  return decision();
};

console.log(component());

// 네임 잡은 스트링으로만 에이지는 넘버만 들어가게 세터 검사가 끝난경우 문자열 html형식으로 리턴을 해줘
// 생성자 함수 setter로 규격만들기
// 생성자 함수로 객체 생성하기
// 생성자 함수 출처를 검사하기 -> instanceof
// true -> 문자열html 리턴
// flase -> throw new error()
