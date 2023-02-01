import React from "react";
function Timecomponent() {
  const [time, aftertime] = React.useState(0);
  // 변수 맘대로 적음([시작요소, 더해질 요소])
  console.log("컴포넌트 업데이트");
  React.useEffect(function () {
    aftertime(time + 1);
  }, []);
  return (
    <div>
      <h3>{time}번</h3>
      <button>1씩올려주세요</button>
    </div>
  );
}

export default Timecomponent;
