import style from "./SignUpInfo.module.css";
import {React, useState} from "react";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";

function SignUpInfo(props) {

  // let [name, setName] = useState("");
  // let [gender, setGender] = useState("");
  // let [birthday, setBirthday] = useState("");
  // let [email, setEmail] = useState("");
  // let [mobile, setMobile] = useState("");
  // let [city, setCity] = useState("");
  // let [interestProduct, setInterestProduct] = useState("");
  // let [interestCollection, setInterestCollection] = useState("");
  // let [interestArticle, setInterestArticle] = useState("");

  
  return (
    <div>
      {/* 登入navbar */}
      <UnloginNav />
      {/* 主框線 */}
      <div className={style.zindex}>

      
      <main className={style.auto}>
        <h1 className={style.h1}>基本資料</h1>
        {/* 基本資料表單 */}
        <form className={style.form}>
          <label>姓名</label>
          <input type="text" placeholder="請輸入真實姓名" required/>
          {/* 性別 */}
          <label>性別</label>
          <section>
            <input id="Male" type="radio" name="myGender" value="male" />
            <label for="Male">
              <img
                src={require("../../images/Avatar3.png")}
                className="gender"
                alt="male"
              />
              男性
            </label>
            <input id="Female" type="radio" name="myGender" value="Female" />
            <label for="Female">
              <img
                src={require("../../images/Avatar2.png")}
                className="gender"
                alt="female"
              />
              女性
            </label>
            <input id="Other" type="radio" name="myGender" value="Other" />
            <label for="Other">
              <img
                src={require("../../images/Avatar1.png")}
                className="gender"
                alt="other"
              />
              其他
            </label>
          </section>
          {/* 生日及其他 */}
          <label>生日</label>
          <input type="date" />
          <label>E-mail</label>
          <input type="email" required/>
          <label>連絡電話</label>
          <input type="text" required/>
          <label for="location">所在地區</label>
          <select id="location" name="location">
            <option></option>
            <option>高雄</option>
            <option>台北</option>
            <option>台中</option>
          </select>
          {/* 興趣選單 */}
          <label>我感興趣的商品：</label>
          <section>
            <input
              id="brandPromotion_P"
              type="radio"
              name="myProduct"
              value="brandPromotion_P"
            />
            <label for="brandPromotion_P">品牌宣傳</label>

            <input
              id="webDesign_P"
              type="radio"
              name="myProduct"
              value="webDesign_P"
            />
            <label for="webDesign_P">網頁設計</label>

            <input
              id="photography_P"
              type="radio"
              name="myProduct"
              value="photography_P"
            />
            <label for="photography_P">攝影取像</label>
          </section>
          <section>
            <input id="UIUX_P" type="radio" name="myProduct" value="UIUX_P" />
            <label for="UIUX_P"> UI / UX </label>

            <input
              id="graphicDesign_P"
              type="radio"
              name="myProduct"
              value="graphicDesign_P"
            />
            <label for="graphicDesign_P">平面設計</label>
          </section>

          <label>我感興趣的作品集：</label>
          <section>
            <input
              id="brandPromotion_C"
              type="radio"
              name="myCollection"
              value="brandPromotion_C"
            />
            <label for="brandPromotion_C">品牌宣傳</label>
            <input
              id="webDesign_C"
              type="radio"
              name="myCollection"
              value="webDesign_C"
            />
            <label for="webDesign_C">網頁設計</label>
            <input
              id="photography_C"
              type="radio"
              name="myCollection"
              value="photography_C"
            />
            <label for="photography_C">攝影取像</label>
          </section>
          <section>
            <input
              id="UIUX_C"
              type="radio"
              name="myCollection"
              value="UIUX_C"
            />
            <label for="UIUX_C"> UI / UX </label>
            <input
              id="graphicDesign_C"
              type="radio"
              name="myCollection"
              value="graphicDesign_C"
            />
            <label for="graphicDesign_C">平面設計</label>
            <input
              id="industrialDesign"
              type="radio"
              name="myCollection"
              value="industrialDesign"
            />
            <label for="industrialDesign">工業設計</label>
          </section>
          <section>
            <input
              id="architecturalDesign"
              type="radio"
              name="myCollection"
              value="architecturalDesign"
            />
            <label for="architecturalDesign">建築設計</label>
          </section>

          <label>我感興趣的文章：</label>
          <section>
            <input id="news" type="radio" name="myArticle" value="news" />
            <label for="news">最新消息</label>
            <input
              id="aboutDesign"
              type="radio"
              name="myArticle"
              value="aboutDesign"
            />
            <label for="aboutDesign">設計大小事</label>
            <input
              id="designInterview"
              type="radio"
              name="myArticle"
              value="designInterview"
            />
            <label for="designInterview">設計師專訪</label>
          </section>
          <section>
            <input
              id="technologyNews"
              type="radio"
              name="myArticle"
              value="technologyNews"
            />
            <label for="technologyNews">科技動態</label>
            <input
              id="designExhibition"
              type="radio"
              name="myArticle"
              value="designExhibition"
            />
            <label for="designExhibition">設計展覽 </label>
            <input
              id="domesticNews"
              type="radio"
              name="myArticle"
              value="domesticNews"
            />
            <label for="domesticNews">國內資訊</label>
          </section>
          <section>
            <input
              id="overseasNews"
              type="radio"
              name="myArticle"
              value="overseasNews"
            />
            <label for="overseasNews">海外知識</label>
          </section>
          <div>

          <button>完成</button>
          </div>
        </form>
      </main>
    </div>
    </div>
    

  );
}

export default SignUpInfo;
