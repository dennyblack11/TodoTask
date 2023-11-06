import { useState } from "react";
import styled from "styled-components";
import { BsPlus } from "react-icons/bs";
import { CreateTodo } from "./Pages/createTodo";
import Card1 from "./Pages/Card1";
import Card3 from "./Pages/Card3";
import Card2 from "./Pages/Card2";
function App() {
  // const [state, setState]: Array<any> = useState<Array<{}>>([]);
  const [show, setShow] = useState(false);

  // useMemo(() => {
  //   getTodos().then((res: any) => {
  //     setState(res);
  //   });
  // }, [state]);

  return (
    <>
      <Container>
        <Card1/>
        <Card2/>
        <Card3/>


        {show ? (
          <Add
            onClick={() => {
              setShow(!show);
            }}
          >
            {/* <BsX size={33} /> */}
          </Add>
        ) : (
          <Add
            onClick={() => {
              setShow(!show);
            }}
          >
            <BsPlus size={33} />
          </Add>
        )}
      </Container>
      {show ? <CreateTodo setShow={setShow} /> : ""}
    </>
  );
}
export default App;

const Add = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  color: white;
  font-weight: 600;
  background-color: black;
  transition: all 350ms;

  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 5;

  &:hover {
    background-color: darkgrey;
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 40px 0;
`;