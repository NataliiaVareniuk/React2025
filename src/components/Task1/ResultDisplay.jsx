import { memo } from "react";

function ResultDisplay({result}) {
  return (
    <div> {result} </div>
  )
}

export default memo(ResultDisplay);
