import React, { Fragment, useState } from "react";
import Collapsible from 'react-collapsible';
import {
  Collapse,
  NavbarToggler
} from 'reactstrap';

const CountryMenu = props => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <Fragment>
      <ul className="events-sidebar-box">
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/101-International-flag.png" alt="winbet flag" />
          <Collapsible trigger="Международни">
            <div onClick={props.handleLeague} className="Шампионска Лига" id="27">Шампионска Лига</div>
            <div onClick={props.handleLeague} className="Лига Европа" id="28">Лига Европа</div>
            <div onClick={props.handleLeague} className="Приятелски" id="29">Приятелски</div>
            <div onClick={props.handleLeague} className="Световно" id="30">Световно</div>
            <div onClick={props.handleLeague} className="Европейско" id="37">Европейско</div>
          </Collapsible>
        </li>
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/14-Bulgaria-flag.png" alt="winbet flag" />
          <Collapsible trigger="България">
            <div onClick={props.handleLeague} className="Първа Лига" id="1">Първа лига</div>
            <div onClick={props.handleLeague} className="Втора Лига" id="2">Втора лига</div>
          </Collapsible>
        </li>
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/15-England-flag.png" alt="winbet flag" />
          <Collapsible trigger="Англия">
            <div onClick={props.handleLeague} className="Премиър лийг" id="3">Премиър лийг</div>
            <div onClick={props.handleLeague} className="Чемпиъншип" id="4">Чемпиъншип</div>
          </Collapsible>
        </li>
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/17-Spain-flag.png" alt="winbet flag" />
          <Collapsible trigger="Испания">
            <div onClick={props.handleLeague} className="Примера дивисион" id="5">Примера дивисион</div>
            <div onClick={props.handleLeague} className="Сегунда дивисион" id="23">Сегунда дивисион</div>
          </Collapsible>
        </li>
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/24-Germany-flag.png" alt="winbet flag" />
          <Collapsible trigger="Германия">
            <div onClick={props.handleLeague} className="Бундеслига" id="6">Бундеслига</div>
            <div onClick={props.handleLeague} className="Втора Бундеслига" id="24">Втора Бундеслига</div>
          </Collapsible>
        </li>
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/30-Italy-flag.png" alt="winbet flag" />
          <Collapsible trigger="Италия">
            <div onClick={props.handleLeague} className="Серия А" id="7">Серия А</div>
            <div onClick={props.handleLeague} className="Серия Б" id="25">Серия Б</div>
          </Collapsible>
        </li>
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/28-France-flag.png" alt="winbet flag" />
          <Collapsible trigger="Франция">
            <div onClick={props.handleLeague} className="Лига 1" id="8">Лига 1</div>
            <div onClick={props.handleLeague} className="Лига 2" id="26">Лига 2</div>
          </Collapsible>
        </li>
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/25-Netherlands-flag.png" alt="winbet flag" />
          <Collapsible trigger="Холандия">
            <div onClick={props.handleLeague} className="Ерадивизии" id="11">Ерадивизии</div>
          </Collapsible>
        </li>
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/31-Portugal-flag.png" alt="winbet flag" />
          <Collapsible trigger="Португалия">
            <div onClick={props.handleLeague} className="Примейра лига" id="13">Примейра лига</div>
            <div onClick={props.handleLeague} className="Сегунда лига" id="111">Сегунда лига</div>
          </Collapsible>
        </li>
        <li className="outer-box">
          <img src="https://football-api.g.sportal365.com/assets/country/flag/38-Russia-flag.png" alt="winbet flag" />
          <Collapsible trigger="Русия">
            <div onClick={props.handleLeague} className="Премиер лига" id="9">Премиер лига</div>
          </Collapsible>
        </li>
        <NavbarToggler onClick={toggle.bind(this)}>
          Още
          <i className="fas fa-angle-down"></i>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/102-Australia-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Австралия" id="57">Австралия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/50-Austria-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Австрия" id="15">Австрия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/55-Argentina-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Арженитина" id="22">Арженитина</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/126-Belarus-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Беларус" id="174">Беларус</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/16-Brazil-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Бразилия" id="21">Бразилия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/189-Vietnam-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Виетнам" id="349">Виетнам</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/78-Greece-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Гърция" id="78">Гърция</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/99-Denmark-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Дания" id="36">Дания</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/68-Estonia-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Естония" id="162">Естония</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/141-Indonesia-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Индонезия" id="296">Индонезия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/7-Ireland-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Ирландия" id="69">Ирландия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/80-Iceland-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Исландия" id="136">Исландия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/128-Kazakhstan-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Казахстан" id="146">Казахстан</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/61-Canada-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Канада" id="324">Канада</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/140-Cyprus-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Кипър" id="78">Кипър</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/10-China-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Китай" id="63">Китай</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/62-Latvia-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Латвия" id="147">Латвия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/72-Lithuania-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Литва" id="148">Литва</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/59-Moldova-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Молдова" id="151">Молдова</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/103-Norway-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Норвегия" id="42">Норвегия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/19-Poland-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Полша" id="119">Полша</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/9-USA-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="САЩ" id="73">САЩ</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/201-Singapore-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Сингапур" id="221">Сингапур</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/26-Slovakia-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Словакия" id="104">Словакия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/153-Thailand-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Тайланд" id="297">Тайланд</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/71-Turkey-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Турция" id="16">Турция</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/110-Finland-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Финландия" id="38">Финландия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/23-Czech-Republic-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Чехия" id="65">Чехия</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/56-Sweden-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Швеция" id="46">Швеция</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/8-South-Korea-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Южна Корея" id="346">Южна Корея</span></li>
          <li><img src="https://football-api.g.sportal365.com/assets/country/flag/49-Japan-flag.png" alt="winbet flag" /><span onClick={props.handleLeague} className="Япония" id="144">Япония</span></li>
        </Collapse>
      </ul>
    </Fragment>
  );
}

export default CountryMenu;
