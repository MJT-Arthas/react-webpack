import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Input,
  DatePicker,
  Space,
  Button,
  Table,
  Tag,
  Descriptions,
  Badge,
  Typography,
} from "antd";
const Testdata = [
  {
    Month: "2",
    Day: "20日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: null,
    Today: false,
    IsInAttendancePeriod: false,
  },
];
interface item {
  Month: string;
  Day: string;
  CreditCardData: string;
  OvertimeData: string;
  AttendanceData: string;
  LeaveTheData: string;
  TravelTheData: string;
  AttendancelType: string;
  AttendancelTypeCode: number;
  WorkingSystemText: null;
  AccountingWork: null;
  Today: boolean;
  IsInAttendancePeriod: boolean;
}
[];
const { Title } = Typography;
const { Column, ColumnGroup } = Table;
const { TextArea } = Input;
import "./index.scss";
import Item from "antd/lib/list/Item";

export default function Detail() {
  let dateStr = "";
  let inTimeStr = "";
  const [text, setText] = useState("");
  const [inHour, setInHour] = useState("");
  const [inMin, setInMin] = useState("");
  // let inHour: any;
  // let inMin: any;
  let mouth = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let day = new Date().getDate();

  const [ReturnValue, setReturnValue] = useState([]);
  const [average, setAverage] = useState(0);
  const [averageMin, setAverageMin] = useState(0);
  const [rtotalDay, setTotalDay] = useState(0);

  const [leaveTime, setLeaveTime] = useState("00:00");

  const [nowMonth, setNowMonth] = useState(mouth.toString().padStart(2, "0"));
  const [nowDay, setNowDay] = useState(day);
  const [nowYear, setNowYear] = useState(year);

  let totalDay = 0;
  let totalMin = 0;

  const [data, setData] = useState<item[]>([]);

  function onChange(date: any, dateString: string) {
    dateStr = dateString;
  }
  function jump() {
    let heaf = `http://tcoa.17usoft.com/platform/EmployeeBase/GetAttendanceByDate?selectDate=${dateStr}`;
    window.open(heaf);
  }
  function trans(str: string) {
    let hh = Number(str.split("：")[1].split("小时")[0]);
    let mm = Number(str.split("：")[1].split("小时")[1].split("分钟")[0]);
    return mm + hh * 60;
  }
  function del(index: number) {
    let temp = JSON.parse(JSON.stringify(data));
    temp.splice(index, 1);

    setData(temp);
    totalDay = 0;
    totalMin = 0;
    temp.forEach((item: any) => {
      if (item.AccountingWork && item.Month == Number(nowMonth)) {
        totalDay++;
        totalMin += trans(item.AccountingWork);
      }
    });
    // console.log(totalDay);
    // console.log(totalMin / 60 / totalDay);
    setAverage(totalMin / 60 / totalDay);
    setTotalDay(totalDay);
    setAverageMin(totalMin / 60);
    // inHour = inTimeStr.split(":")[0];
    // inMin = inTimeStr.split(":")[1];

    let tempMin = Number((totalMin / 60 - totalDay * 10.6).toFixed(2)) * 60;
    tempMin = 10.6 * 60 - tempMin;

    let resultHour =
      Number(inHour) + Number((tempMin / 60).toString().split(".")[0]);

    let resultMin: number | string = Number(inMin) + (tempMin % 60);
    if (resultMin >= 60) {
      resultMin = resultMin % 60;
      resultHour++;
    }
    if (resultMin < 10) {
      resultMin = "0" + resultMin;
    }
    setLeaveTime(`${resultHour}:${resultMin}`);
  }
  function computed() {
    const finalReturnValue: any[] = JSON.parse(text).ReturnValue.map(
      (item: any) => {
        return item;
      }
    );
    console.log("ReturnValue", finalReturnValue);

    setData(
      finalReturnValue.filter(
        (item) => item.AccountingWork && item.Month == Number(nowMonth)
      )
    );

    finalReturnValue.forEach((item: any) => {
      if (item.AccountingWork && item.Month == Number(nowMonth)) {
        totalDay++;
        totalMin += trans(item.AccountingWork);
      }

      if (item.Today) {
        inTimeStr = item.CreditCardData.split("-")[0];
        console.log(
          Number(inTimeStr.split(":")[0]),
          Number(inTimeStr.split(":")[1])
        );
        // setInHour(Number(inTimeStr.split(":")[0]));
        // setInMin(Number(inTimeStr.split(":")[1]));
      }
    });
    console.log("totalMin", totalMin);
    console.log(totalMin / 60 / totalDay);
    setTotalDay(totalDay);
    setAverage(totalMin / 60 / totalDay);
    setAverageMin(totalMin / 60);
    let inhour = inTimeStr.split(":")[0];
    let inmin = inTimeStr.split(":")[1];

    setInHour(inhour);
    setInMin(inmin);

    let tempMin = Number((totalMin / 60 - totalDay * 10.6).toFixed(2)) * 60;
    tempMin = 10.6 * 60 - tempMin;

    let resultHour =
      Number(inhour) + Number((tempMin / 60).toString().split(".")[0]);
    let resultMin: number | string = Number(inmin) + (tempMin % 60);
    if (resultMin >= 60) {
      resultMin = resultMin % 60;
      resultHour++;
    }
    if (resultMin < 10) {
      resultMin = "0" + resultMin;
    }
    debugger;
    setLeaveTime(`${resultHour}:${resultMin}`);
  }

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Space>
          <Button type="primary" onClick={jump}>
            Click here to open a new page Copy the data and paste it into the
            text box below
          </Button>
          <DatePicker
            style={{ width: "350px" }}
            placeholder="Don't forget to click here to select a date"
            onChange={onChange}
          />
        </Space>
        <TextArea
          onChange={(event) => {
            event.persist();
            console.log(event.target.value);

            setText(event.target.value);
          }}
          rows={6}
        />

        <Button type="primary" onClick={computed}>
          calculate
        </Button>
        <Title level={3}>Time Info</Title>
        <Descriptions bordered>
          <Descriptions.Item label="Total days">
            {rtotalDay}day
          </Descriptions.Item>
          <Descriptions.Item label="Average">
            {average.toFixed(2)}
          </Descriptions.Item>
          <Descriptions.Item label="Is enough">
            {averageMin - rtotalDay > 0 ? "YES" : "No"}
          </Descriptions.Item>
          <Descriptions.Item label="Departure time ">
            {leaveTime}
          </Descriptions.Item>
          <Descriptions.Item label="Time difference" span={2}>
            {Math.abs(averageMin - rtotalDay * 10.6).toFixed(2)}
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item>
          {/* <Descriptions.Item label="Negotiated Amount">
            $80.00
          </Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official Receipts">
            $60.00
          </Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item> */}
        </Descriptions>
        <Title level={3}>Attendance Details</Title>
        <Table
          dataSource={data}
          pagination={false}
          rowKey={(columns) => columns.Month + columns.Day}
        >
          <ColumnGroup title="Date">
            <Column title="Month" dataIndex="Month" />
            <Column title="Day" dataIndex="Day" />
          </ColumnGroup>
          <Column title="CreditCardData" dataIndex="CreditCardData" />

          <Column
            title="AccountingWork"
            render={(text, record: any) => (
              <Space size="middle">
                {text.AccountingWork && text.AccountingWork.split("：")[1]}
              </Space>
            )}
          />

          <Column
            title="Action"
            render={(text, record: any, index) => {
              console.log(text, record);
              return (
                <Space size="middle">
                  <Button
                    onClick={() => {
                      del(index);
                    }}
                  >
                    Delete
                  </Button>
                </Space>
              );
            }}
          />
        </Table>
      </Space>
    </>
  );
}
