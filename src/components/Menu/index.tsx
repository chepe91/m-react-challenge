import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 10px 20px;
`;

const Menu = () => {
  return (
    <StyleMenu>
      <Link to="/favorites">View my list</Link>
    </StyleMenu>
  );
};

export default Menu;
