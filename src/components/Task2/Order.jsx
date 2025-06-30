import css from "./Task2.module.scss";

function Order( {
    select, 
    onChange, 
    text, 
    array} ) 
    {
  return (
    <>
      <select
        name={select}
        defaultValue="0"
        onChange={onChange}
        className={css.selector}
        style={{ marginTop: "10px" }}
      >
        <option disabled style={{ color: "lightgray" }} value="0">
          {text}
        </option>

        {Array.isArray(array) &&
          array.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
      </select>
    </>
  );
}

export default Order;
