import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function Productpage() {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://f0871db4-d376-4a56-b92e-6aa7c9267f1a.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setproduct(result.data);
      })
      .catch(function (error) {
        console.log("에러:", error);
      });
  }, []);

  if (product === null) {
    return <h1>상품정보를 받고 있습니다.</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imgurl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seleer}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdtime">2023년 2월 2일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}
export default Productpage;
