import * as React from "react";
import AddressInputForm from "./AddressInputForm";
import { DelveriyInfo, INITIAL_DELEVERIYINFO } from "./Types";

const Payment = () => {
  const [addressSel, setAddressSel] = React.useState<String>("old");
  const [userAddress, setUserAddress] = React.useState(null);
  const [deliveryInfo, setDeliveryInfo] = React.useState<DelveriyInfo>(INITIAL_DELEVERIYINFO);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePay = () => {};

  React.useEffect(() => {
    // 사용자의 주소를 조회해봤을때 있다면 addressSel = old : addressSel = new
    if (userAddress) (document.getElementById("oldAddressRadio") as HTMLInputElement).checked = true;
    else {
      (document.getElementById("newAddressRadio") as HTMLInputElement).checked = true;
      setAddressSel("new");
    }
  }, []);
  console.log(deliveryInfo);
  return (
    <>
      <div>
        <div>물건목록</div>
        <hr />
        <div>
          배송지 정보
          <div>
            배송지 선택
            <label>
              <input
                type="radio"
                name="addressSelect"
                id="oldAddressRadio"
                // checked
                onChange={(e) => {
                  console.log("old");
                  setAddressSel("old");
                }}
              />
              기존 주소지
            </label>
            <label>
              <input
                type="radio"
                name="addressSelect"
                id="newAddressRadio"
                onChange={(e) => {
                  console.log("new");
                  setAddressSel("new");
                }}
              />
              새 주소지
            </label>
          </div>
          <hr />
          {addressSel === "old" ? (
            <div>
              배송지 상세
              <p>이름(집)</p>
              <p>전화번호</p>
              <p>상세 주소</p>
              <p>요청사항</p>
              <input name="deliveryMemo" />
            </div>
          ) : (
            <AddressInputForm handleChange={handleChange} />
          )}
        </div>
        <hr />
        <div>결제수단</div>
        <hr />
        <div>
          <button onClick={handlePay}>결제하기</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
