import kkkk from "./data.js";

("use client");

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartList />
      <CartList />
      <CartList />
      <CartList />
    </div>
  );
}

//컴포넌트
function CartList() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

//서버 컨포넌트와 클라이언트 컴포넌트
//서버 컨퍼넌트는 자바 스크립트 기능을 사용하지 못한다
//클라이언트 컴포넌트는 자바 스크립트 기능을 사용가능하나 너무 무겁다 느림
//즉 큰 페이지는 서버 컨포넌트로
//작지만 기능이 필요한 페이지는 클라이언트 컴포넌트로!
