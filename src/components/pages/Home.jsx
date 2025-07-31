import css from "./Pages.module.scss";

function Home() {
  return (
    <div className={css.container}>
      <h1> Це магазин належить програмісту на фрілансі</h1>
      <h1> Тому</h1>
      <span> *магазин працює коли хоче</span>
      <span> *товари надсилає швидко</span>
      <span> *на запитання відповідає коли виспиться</span>
    </div>
  );
}

export default Home;
