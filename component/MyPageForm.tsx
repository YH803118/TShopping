import * as React from "react";
import StyledMyPage from "./styles/StyledMyPage";
import { Route, Routes, useLocation } from "react-router-dom";
import MyInfo from "./myPage/MyInfo";
import MyOrderRecord from "./myPage/MyOrderRecord";
import MyReview from "./myPage/MyReview";
import MySize from "./myPage/MySize";
import ModForm from "./myPage/ModForm";
import ViewedGoods from "./myPage/ViewedGoods";
import { loginCheck_process } from "./api";
const MyPageForm = ({ userInfo }: any) => {
  const session = window.sessionStorage;
  const location = useLocation();
  // const [userInfo, setUserInfo] = React.useState<any>();
  const [menu, setMenu] = React.useState<string>(location.pathname.split("/")[2]);
  React.useEffect(() => {
    if (menu) {
      (document.querySelector(`#${menu}`) as HTMLAnchorElement).style.fontSize = "25px";
      (document.querySelector(`#${menu}`) as HTMLAnchorElement).style.color = "rgb(20,20,20)";
    } else {
      (document.querySelector("#myPage") as HTMLAnchorElement).style.fontSize = "25px";
      (document.querySelector(`#myPage`) as HTMLAnchorElement).style.color = "rgb(20,20,20)";
    }
  }, [menu]);

  const myPageLoad = async () => {
    console.log("mypageLoad");
    // setUserInfo(await loginCheck_process());
    // if (session.getItem("userInfo") && !userInfo) {
    // setUserInfo(loginCheck_process());
    console.log(await loginCheck_process());
    // console.log
    // }
  };
  React.useEffect(() => {
    // myPageLoad();
  }, []);

  return (
    <StyledMyPage>
      <div id="myPageMenuDiv">
        <ul>
          <li>
            <a id="myPage" href="/myPage">
              내 정보
            </a>
          </li>
          <li>
            <a id="viewed-goods" href="/myPage/viewed-goods">
              최근 본 상품
            </a>
          </li>
          <li>
            <a id="myorder" href="/myPage/myorder">
              주문 내역 조회
            </a>
          </li>
          <li>
            <a id="myreview" href="/myPage/myreview">
              후기
            </a>
          </li>
          <li>
            <a id="mysize" href="/myPage/mysize">
              내 사이즈
            </a>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/myorder" element={<MyOrderRecord />} />
        <Route path="/myorder?order_state=state" element={<MyOrderRecord />} />
        <Route path="/myreview" element={<MyReview />} />
        <Route path="/myreview/:state" element={<MyReview />} />
        <Route path="/mysize" element={<MySize />} />
        <Route path="/viewed-goods" element={<ViewedGoods />} />
        <Route path="/modForm" element={<ModForm userInfo={userInfo} />} />
        <Route path="/" element={<MyInfo userInfo={userInfo} />} />
      </Routes>
    </StyledMyPage>
  );
};

export default MyPageForm;
