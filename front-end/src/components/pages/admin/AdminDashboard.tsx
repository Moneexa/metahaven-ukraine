import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button } from "@mantine/core";
// const rowsPerPage = 10;

export const AdminDashboard = () => {
  const [listOfMessages, setListOfMessages] = useState([
    { name: "", amount: "", message: "", _id: "", show: false },
  ]);

  const approveMessage = (id: string) => {
    async function func() {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_PORT_PROD}/api/messages/${id}`,
          {
            headers: {
              authorization: `${localStorage.getItem("jwtToken")}`,
            },
          }
        );
        if (response) {
          let arr = listOfMessages;
          arr = arr.filter((value, index) => {
            if (index != response.data._id) {
              return value;
            }
          });

          setListOfMessages(arr);
        }
      } catch (error) {
        console.log(error);
      }
    }
    func();
  };
  useEffect(() => {
    async function func() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_PORT_PROD}/api/messages/`,
          {
            headers: {
              authorization: `${localStorage.getItem("jwtToken")}`,
            },
          }
        );
        if (response) {
          const arr: {
            name: string;
            amount: string;
            message: string;
            _id: string;
            show: boolean;
          }[] = [];
          response.data.map(
            (value: {
              name: string;
              amount: string;
              message: string;
              _id: string;
              show: boolean;
            }) => {
              arr.push(value);
            }
          );
          setListOfMessages(arr);
        }
      } catch (err) {
        console.log(err);
      }
    }
    func();
  }, [listOfMessages]);
  return (
    <Box
      m={64}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ justifyContent: "space-evenly" }}>
            <td style={{ flexGrow: 1 }}>Name</td>
            <td style={{ flexGrow: 1 }}>Amount</td>
            <td style={{ flexGrow: 1 }}>Message</td>
            <td style={{ flexGrow: 1 }}></td>
          </tr>
          {listOfMessages.map((row, index) => {
            return (
              !row.show && (
                <tr key={index} style={{ justifyContent: "space-evenly" }}>
                  <td style={{ flexGrow: 1 }}>{row.name}</td>
                  <td style={{ flexGrow: 1 }}>{row.amount}</td>
                  <td style={{ flexGrow: 1 }}>{row.message}</td>
                  <td style={{ flexGrow: 1 }}>
                    <Button
                      size="sm"
                      style={{ cursor: "pointer" }}
                      onClick={() => approveMessage(row._id)}
                    >
                      Approve
                    </Button>
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};
