const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};

const container = () => {
  const date = new Date();

  const day = date.getDate();

  const formteg = (main, discript) => {
    return `
    ${tagComponent("header", "헤더부분")}
    ${tagComponent(main, discript)}
    ${tagComponent("footer", "푸터부분")}
    `;
  };

  let innerFunc = () => {
    if (day === 12) {
      return formteg("main", "당신은 오늘을 살고 있습니다.");
    } else {
      return formteg("div", `오늘은 ${day}일 입니다.`);
    }
  };
  return innerFunc();
};

console.log(container());
