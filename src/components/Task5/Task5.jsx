import css from "./Task5.module.scss";
import { dataArray } from "../Task2/data";

function Task5() {
  function GetUrl({ props }) {
    return (
      <div className={css.searchResult}>
        <div className={css.topPart}>
          <a className={css.groupLink} href={props.url} target="_blank">
            <img className={css.img} src={props.favicon} alt="favicon" />
            <div className={css.topGroup}>
              <span className={css.tagline}>{props.tagline}</span>
              <span className={css.domain}>{props.domain}</span>
            </div>
          </a>
          <a
            href={`https://translate.google.com/translate?hl=uk&sl=auto&tl=uk&u=${props.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={css.translate}
          >
            Перекласти цю сторінку{" "}
          </a>
        </div>
        <a href={props.url} target="_blank">
          <h3 className={css.title}> {props.title}</h3>
        </a>
        <h3 className={css.description}>{props.description}</h3>
      </div>
    );
  }

  return (
    <div className={css.container}>
      {dataArray.map((el) => (
        <GetUrl key={el.id} props={el} />
      ))}
    </div>
  );
}

export default Task5;
