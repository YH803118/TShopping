import styled from "styled-components";

const StyledBody = styled.div`
  background-color: rgb(255, 255, 255);
  width: 1000px;
  img {
    width: 500px;
    height: 300px;
    position: relative;
    transition: all 1s;
  }
  #btn1 {
    left: 460px;
    top: 298px;
    height: 30px;
    color: white;
    background-color: black;
    position: absolute;
  }
  #btn2 {
    left: 484px;
    top: 298px;
    height: 30px;
    color: white;
    background-color: black;
    position: absolute;
  }
  background-color: rgb(100, 100, 100);
  height: 1300px;
`;

export default StyledBody;
