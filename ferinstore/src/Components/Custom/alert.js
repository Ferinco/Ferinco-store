import styled from "styled-components";
import { useAppContext } from "../../contexts/appContext";

export default function Alert() {
  const { alert, setAlert } = useAppContext();
  return (
    <Div className={alert ? "p-2 hang p-2" : "un-hang p-2"}>
      Item added to cart successfully!
    </Div>
  );
}
const Div = styled.div`
  background-color: #05386b;
  color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: fit-content;
  height: fit-content !important;
  justify-self: center;
  z-index: 999 !important;
  transition: 0.3s;
`;
