import React from "react";
// payments
import visa from '../images/payments/visa.png';
import visaelectron from '../images/payments/visaelectron.png';
import mastercard from '../images/payments/mastercard.png';
import house from '../images/payments/house.png';
import easypay from '../images/payments/easypay.png';
import epay from '../images/payments/epay.png';
import cashterminal from '../images/payments/cashterminal.png';
import skrill from '../images/payments/skrill.png';
import { useHttpsStoreFooter } from './Helpers';
import Loader from 'react-loader-spinner';

const FooterPartners = () => {

const[isLoading, fetchedData] = useHttpsStoreFooter(
  "/api/partners-logo",
  "",
  "footer",
  "footerDate"
);

const images = fetchedData

? fetchedData.map((data, index) =>
    <li key={index}>
      <img src={"/uploads/images/partners_logo/" + data.img_name} alt='winbet partner'/>
    </li>
  ) : [];

  if (isLoading) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C"/>
      </div>
    );
  }
  return (
    <footer className="footer">
      <div className="container">
        <ul className="payment-list">
          <li><img src={visa} alt="winbet visa"/></li>
          <li><img src={visaelectron} alt="winbet visaelectron"/></li>
          <li><img src={mastercard} alt="winbet mastercard"/></li>
          <li><img src={house} alt="winbet house"/></li>
          <li><img src={easypay} alt="winbet easypay"/></li>
          <li><img src={epay} alt="winbet epay"/></li>
          <li><img src={cashterminal} alt="winbet cashterminal"/></li>
          <li><img src={skrill} alt="winbet skrill"/></li>
        </ul>
        <h4 className="list-title">Официални партньори:</h4>
        <ul className="partner-list">
          {images}
        </ul>
        <div className="copy-right">
            <p>
            Winbet online е регистрирана търговска марка на „Уин Бет Онлайн“ ЕООД (ЕИК: 203294705),
             чиято дейност като организатор на хазартни игри онлайн подлежи на регулация от Държавната 
             комисия по хазарта и е лицензирана съгласно Закона за хазарта със следните лицензи: Удостоверение 
             № 000030-14103 от 13.11.2018 г., отразяващо актуалното състояние на лиценз за организиране на игри в игрално казино, 
             издаден с Решение № 000030-6257 от 29.06.2015 г. на ДКХ; Удостоверение № 000030-823 от 24.01.2018 г., отразяващо актуалното 
             състояние на лиценз за организиране на залагания върху резултати от спортни състезания и надбягвания с коне и кучета, издаден с 
             Решение № 00030-8099 от 22.07.2016 г. на ДКХ и Удостоверение № 000030-822 от 24.01.2018 г., отразяващо актуалното състояние на 
             лиценз за организиране на залагания върху случайни събития и залагания, свързани с познаване на факти, издаден с Решение
              № 000030-11140 от 29.09.2017 г. на ДКХ.
            </p>
            <p>
              Адрес: България, гр. София п.к. 1799, ж.к. „Младост 2“, ул. „Свети Киприян“, блок 292
            </p>
            <p>
              @2019 Winbet  Всички права запазени. 
            </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterPartners;

