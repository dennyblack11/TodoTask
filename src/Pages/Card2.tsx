import styled from "styled-components";
import moment from "moment";
import { useMemo, useState } from "react";
import { BsPinAngle } from "react-icons/bs";
import { deleteTask, getTodos, updateTask } from "../api/API";

const Card2 = () => {

    const [state, setState]: Array<any> = useState<Array<{}>>([]);

  
    useMemo(() => {
      getTodos().then((res: any) => {
        setState(res);
      });
    }, [state]);
  return (
    <div>
        <CardHolder>
          <Info>ONGOING</Info>
          <Hr/>

          {state &&
            state
              ?.filter((el: any) => el.done === "ongoing")
              .map((el: any) => (
                <Card key={el._id}>
                  <Icon />

                  <Task>{el.task}</Task>

                  <Time>
                    <Txt>
                      Created at:{" "}
                      {moment(Date.parse(el.createdAt)).format("LLLL")}
                    </Txt>
                    <Txt>Ends at: {el.deadline}</Txt>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <Button
                        onClick={() => {
                          updateTask(el._id);
                        }}
                      >
                        Finish task
                      </Button>
                      <Button
                        onClick={() => {
                          deleteTask(el._id);
                        }}
                      >
                        Delete task
                      </Button>
                    </div>
                  </Time>
                </Card>
              ))}
        </CardHolder>

    </div>
  )
}

export default Card2;

const Hr = styled.div`
width: 90%;
height: 0.1px;
background-color: silver;
margin-top: -40px;
`

const Icon = styled(BsPinAngle)`
cursor: pointer;
:hover{
    background-color: gray;
}
`;

const Txt = styled.div`
  font-size: 14px;
  margin: 6px 0 0 0;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;

const Button = styled.div`
  width: 33%;
  background-color: black;
  color: white;
  padding: 10px 10px;
  margin: 20px 0 0 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  font-size: 13px;
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