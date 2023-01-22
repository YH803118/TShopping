import * as React from "react";
import { useState, useMemo, FunctionComponent, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import StyledProductForm from "./styles/StyledProductForm";
import moomin1 from "../upload/product1.jpeg";
import moomin2 from "../upload/product2.jpeg";
import moomin3 from "../upload/product3.png";
import moomin4 from "../upload/moomin1.jpeg";
import moomin5 from "../upload/moomin2.jpeg";
import StyledProductList from "./styles/StyledProductList";

type product = {
  [index: string]: string | number | any;
  id: number;
  name: string;
  kind: string;
  size: string;
  color: string;
  src: string | any;
  price: number;
  sale: number;
  count: number;
};

type tableType = {
  [index: string]: string;
  블랙: string;
  화이트: string;
  네이비: string;
  그린: string;
  블루: string;
  베이지: string;
  오렌지: string;
  생지: string;
  샐비지: string;
  워싱: string;
};

const colorTable: tableType = {
  블랙: "black",
  화이트: "white",
  네이비: "navy",
  그린: "green",
  블루: "blue",
  베이지: "beige",
  오렌지: "orange",
  생지: "blue",
  샐비지: "navy",
  워싱: "skyblue",
};

const initialProduct: product[] = [
  {
    id: 1,
    name: "무민",
    kind: "남성 맨투맨",
    size: "M",
    color: "블랙,네이비,화이트,베이지",
    src: moomin1,
    price: 20000,
    sale: 0.15,
    count: 1,
  },
  {
    id: 2,
    name: "무민2",
    size: "L",
    kind: "남성 티셔츠",
    color: "베이지,그린,블루",
    src: moomin2,
    price: 130000,
    sale: 0.25,
    count: 1,
  },
  {
    id: 3,
    name: "무민3",
    size: "XL",
    kind: "여성 재킷",
    color: "블랙,화이트",
    src: moomin3,
    price: 10000,
    sale: 0.1,
    count: 1,
  },
  {
    id: 4,
    name: "무민4",
    kind: "여성 청바지",
    size: "M",
    color: "생지,샐비지,워싱",
    src: moomin4,
    price: 50000,
    sale: 0.15,
    count: 1,
  },
  {
    id: 5,
    name: "무민5",
    kind: "남성 패딩",
    size: "M",
    color: "블랙,오렌지,네이비",
    src: moomin5,
    price: 15000,
    sale: 0.2,
    count: 1,
  },
];

const ProductList = () => {
  const [listProduct, setListProduct] = useState<product[]>(
    initialProduct.sort((a, b) => b.id - a.id)
  );
  const colorList = useMemo(() => {
    var colors: string[] = [];
    initialProduct.forEach((value) => {
      value.color.split(",").forEach((value) => {
        if (!colors.includes(value)) colors.push(value);
      });
    });
    return colors;
  }, [initialProduct]);

  const optionFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const iniFilter = initialProduct;
    setListProduct(iniFilter.filter((values) => values[name].includes(value)));
  };
  const changeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value == "1") {
      setListProduct((prevValue) => [...prevValue].sort((a, b) => b.id - a.id));
    } else if (value == "2") {
      setListProduct((prevValue) =>
        [...prevValue].sort((a, b) => a.price - b.price)
      );
    } else if (value == "3") {
      setListProduct((prevValue) =>
        [...prevValue].sort((a, b) => b.price - a.price)
      );
    }
  };
  const check = () => {
    console.log(listProduct);
  };
  return (
    <StyledProductList>
      <div id="productFilter">
        <select name="order" onChange={changeOrder} className="filter">
          <option hidden>정렬 기준</option>
          <option value="1">최신순</option>
          <option value="2">낮은 가격순</option>
          <option value="3">높은 가격순</option>
        </select>
        <select
          name="color"
          onChange={optionFilter}
          value="컬러"
          className="filter"
        >
          <option hidden>컬러</option>
          {colorList.map((colors) => (
            <option key={colors} value={colors}>
              {colors}
            </option>
          ))}
        </select>
      </div>
      <div id="productList">
        {listProduct.map((product: product) => {
          return (
            <div className="listProduct">
              <Link to={`/ProductForm/${product.id}`}>
                <img src={product.src} className="listImage" />
              </Link>
              <div className="productInfo">
                <Link to={`/ProductForm/${product.id}`}>
                  <div>{product.name}</div>
                </Link>
                <div>
                  {" "}
                  {product.sale > 0 ? (
                    <>
                      <del>{"₩" + product.price.toLocaleString("ko-KR")}</del>
                      &nbsp;
                      {"₩" +
                        (product.price * (1 - product.sale)).toLocaleString(
                          "ko-KR"
                        )}
                    </>
                  ) : (
                    product.price.toLocaleString("ko-KR")
                  )}
                </div>
                <ul id="colors">
                  {product.color.split(",").map((colors: string) => {
                    const style = {
                      backgroundColor: colorTable[colors],
                    };
                    return (
                      <li key={colors}>
                        <a className="color" style={style}></a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={check}>확인</button>
    </StyledProductList>
  );
};

export default ProductList;
