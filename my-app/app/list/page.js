export default function List() {
  let product = ["tomatoes", "pasta", "coconut"];
  let b = [40, 50, 70];
  let 어레이 = [2, 3, 4];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((a, i) => {
        return (
          <div className="food">
            <h4>
              {product[i]} ${b[i]}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
