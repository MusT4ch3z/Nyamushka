import { useState, useEffect } from "react";
import "./card.css";
import cat from "../../images/Cat.png";

const Card = ({ card, taste, quantity, weight }) => {
  const [cardState, setCardState] = useState(card);
  const [selectedDescription, setSelectedDescription] = useState(
    "Default Selected Description"
  );
  const [cardSubtilte, setCardSubtilte] = useState(
    "Сказочное заморское явство"
  );
  const [isCardDisabled, setIsCardDisabled] = useState(false);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [isCardHover, setIsCardHover] = useState(false);

  const mouseEnterHandler = () => {
    if (cardState === "selected") {
      setCardSubtilte("Котэ не одобряет?");
      setIsCardHover(true);
    }
  };

  const mouseLeaveHandler = () => {
    setCardSubtilte("Сказочное заморское явство");
    setIsCardHover(false);
  };

  useEffect(() => {
    switch (taste) {
      case "фуа-гра":
        setSelectedDescription("Печень утки разварная с артишоками.");
        break;
      case "рыбой":
        setSelectedDescription(
          "Головы щучьи с чесноком да свежайшая сёмгушка."
        );
        break;
      case "курой":
        setSelectedDescription("Филе из цыплят с трюфелями в бульоне.");
        break;
      default:
        setSelectedDescription("Default Selected Description Exit");
        break;
    }
    switch (cardState) {
      case "default":
        setIsCardSelected(false);
        setIsCardDisabled(false);
        break;
      case "selected":
        setIsCardSelected(true);
        setIsCardDisabled(false);
        break;
      case "disabled":
        setIsCardSelected(false);
        setIsCardDisabled(true);
        break;
      default:
        setIsCardSelected(false);
        setIsCardDisabled(false);
        break;
    }
  }, [cardState, taste]);

  const description = {
    default: "Чего сидишь? Порадуй котэ,\xa0",
    selected: selectedDescription,
    disabled: `Печалька, с ${taste} закончился.`,
  };

  const handleSelect = () => {
    switch (cardState) {
      case "default":
        setIsCardSelected(!isCardSelected);
        setCardState("selected");
        break;
      case "selected":
        setIsCardSelected(!isCardSelected);
        setCardState("default");
        setCardSubtilte("Сказочное заморское явство");
        setIsCardHover(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="card-list__card">
      <svg
        className="card__border"
        width="320"
        height="480"
        viewBox="0 0 320 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => mouseEnterHandler()}
        onMouseLeave={() => mouseLeaveHandler()}
        onClick={() => handleSelect()}
      >
        <mask id="path-1-inside-1_89_117" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 -1H42.6762L0 41.6762Z"
          />
        </mask>
        <path
          d="M0 42.6762L-2.82843 39.8478L-4 41.0193V42.6762H0ZM42.6762 0V-4H41.0193L39.8478 -2.82843L42.6762 0ZM4 468V42.6762H-4V468H4ZM12 476C7.58173 476 4 472.418 4 468H-4C-4 476.837 3.16345 484 12 484V476ZM308 476H12V484H308V476ZM316 468C316 472.418 312.418 476 308 476V484C316.837 484 324 476.837 324 468H316ZM316 12V468H324V12H316ZM308 4C312.418 4 316 7.58172 316 12H324C324 3.16344 316.837 -4 308 -4V4ZM42.6762 4H308V-4H42.6762V4ZM39.8478 -2.82843L-2.82843 39.8478L2.82843 45.5046L45.5046 2.82843L39.8478 -2.82843Z"
          fill={[
            !isCardSelected && !isCardDisabled && "#1698D9",
            isCardSelected && "#d91667",
            isCardDisabled && "#b3b3b3",
          ]
            .join(" ")
            .replace(/false/g, "")
            .trim()}
          mask="url(#path-1-inside-1_89_117)"
        />
      </svg>
      <div
        className={[
          "card-list__card card",
          isCardSelected && "card_selected",
          isCardDisabled && "card_disabled",
        ]
          .join(" ")
          .replace("false", "")
          .trim()}
      >
        <h4
          className={["card__text", isCardHover && "card__text_warning"]
            .join(" ")
            .replace("false", "")
            .trim()}
        >
          {cardSubtilte}
        </h4>
        <h1 className="card__title">Нямушка</h1>
        <h2 className="card__subtitle">c {taste}</h2>
        <div className="card__text text__quantity">
          {quantity[0]} порций
          <br />
          {quantity[1] === 1 && "мышь в подарок"}
          {quantity[1] === 2 && "2 мыши в подарок"}
          {quantity[1] === 5 && "5 мышей в подарок"}
          <br />
          {quantity[1] === 5 && "заказчик доволен"}
        </div>
        <img
          className={[
            "card__image image",
            isCardDisabled && "image_disabled",
          ].join(" ")}
          src={cat}
          alt="PurrBoy:3"
        />
        <div
          className={[
            "card__circle circle",
            isCardSelected && "circle_selected",
            isCardDisabled && "circle_disabled",
          ]
            .join(" ")
            .replace("false", "")}
        >
          <div className="circle__weight">{weight}</div>
          <div className="circle__kg">кг</div>
        </div>
      </div>
      <div
        className={[
          "card__description description",
          isCardDisabled && "description_disabled",
        ]
          .join(" ")
          .replace("false", "")
          .trim()}
      >
        {description[cardState]}
        {cardState === "default" && (
          <>
            <div className="description__buy" onClick={() => handleSelect()}>
              купи
            </div>
            <div style={{ color: "#22A7E9" }}>.</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
