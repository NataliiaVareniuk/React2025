import useWindowSize from "./useWindowSize";
import { screensData } from "../../data/screens";

function ShowDesktopType() {
  const windowSize = useWindowSize();

  const device = screensData.find(
    (item) =>
      windowSize.width >= item.minWidth &&
      (item.maxWidth === null || windowSize.width <= item.maxWidth)
  );

  return (
    <div>
      <p>
        розмір екрану: {windowSize.width}px Х {windowSize.height}{" "}
      </p>

      {device && (
        <>
          <p  style={{ padding:"20px" }}>
            Тип екрану:{device.description}
          </p>
          <img
            style={{ width: "200px", height: "200px", objectFit: "cover", padding:"20px"  }}
            src={device.img}
            alt={device.description}
          />
        </>
      )}
    </div>
  );
}

export default ShowDesktopType;
