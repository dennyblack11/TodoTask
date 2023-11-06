import styled from "styled-components";
import moment from "moment";
import { useMemo, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { getTodos } from "../api/API";

const Card3 = () => {

    const [state, setState]: Array<any> = useState<Array<{}>>([]);

  
    useMemo(() => {
      getTodos().then((res: any) => {
        setState(res);
      });
    }, [state]);
  return (
    <div>
        <CardHolder>
          <Info>DONE</Info>
          <Hr/>

          {state &&
            state
              ?.filter((el: any) => el.done === "finished")
              .map((el: any) => (
                <Card key={el._id}>
                  <FcCheckmark />
                  <Task>{el.task}</Task>

                  <Time>
                    <Txt>
                      Created at:{" "}
                      {moment(Date.parse(el.createdAt)).format("LLLL")}
                    </Txt>
                    <Txt>Ended at: {el.deadline}</Txt>
                    <div style={{ display: "flex", gap: "10px" }}></div>
                  </Time>
                </Card>
              ))}
        </CardHolder>
    </div>
  )
}

export default Card3;

const Hr = styled.div`
width: 90%;
height: 0.1px;
background-color: silver;
margin-top: -40px;
`

const Txt = styled.div`
  font-size: 14px;
  margin: 6px 0 0 0;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;

const Task = styled.div`
  width: 100%;
`;

const Card = styled.div`
  width: 80%;
  border: 1px solid silver;
  padding: 15px 3%;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  font-size: 30px;
`;

const CardHolder = styled.div`
  width: 300px;
  border: 1px solid silver;
  height: 80vh;
  overflow: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-bottom: 30px;

  &::-webkit-scrollbar{
    display: none;
  }
`;