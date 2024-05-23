import { useSelector, useDispatch } from "react-redux";

import { increment, incrementAsync, selectCount } from "./slice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <div></div>
    </>
  );
};
export default Counter;
