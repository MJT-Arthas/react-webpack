import React, { useState } from "react";
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
const data = [
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
  {
    Month: "2",
    Day: "21日",
    CreditCardData: "08:52-08:59-18:36-18:41",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时48分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "2",
    Day: "22日",
    CreditCardData: "09:43-09:45-19:06-19:08",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：10小时6分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "2",
    Day: "23日",
    CreditCardData: "08:38-18:05-18:06",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时30分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "2",
    Day: "24日",
    CreditCardData: "10:15-13:28-18:06-19:30",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时18分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "2",
    Day: "25日",
    CreditCardData: "08:47-17:01",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：8小时12分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "2",
    Day: "26日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "2",
    Day: "27日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "2",
    Day: "28日",
    CreditCardData: "08:53-13:44-18:02",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时12分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "1日",
    CreditCardData: "08:46-21:30-21:34",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：12小时48分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "2日",
    CreditCardData: "08:38-19:39",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：11小时",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "3日",
    CreditCardData: "08:30-08:32-18:08",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时36分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "4日",
    CreditCardData: "08:38-08:44-17:36-17:45",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时6分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "5日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "6日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "7日",
    CreditCardData: "09:08-09:13-18:06-18:09",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "8日",
    CreditCardData: "06:15-06:17-19:54-20:09-21:58-22:00",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：15小时48分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "9日",
    CreditCardData: "08:33-08:38-19:04-19:36",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：11小时6分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "10日",
    CreditCardData: "08:46-08:55-18:00-18:08",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时24分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "11日",
    CreditCardData: "08:41-08:49-17:26",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：8小时48分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "12日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "13日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "14日",
    CreditCardData: "08:49-08:57-18:00-18:07",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时18分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "15日",
    CreditCardData: "07:18-07:20-19:36-19:55-20:00-20:17",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：13小时",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "16日",
    CreditCardData: "08:49-08:57-19:39",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：10小时48分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "17日",
    CreditCardData: "07:00-07:03-16:51-16:53",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时54分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "18日",
    CreditCardData: "08:40-08:43-18:10",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时30分钟",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "19日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "20日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: true,
  },
  {
    Month: "3",
    Day: "21日",
    CreditCardData: "08:48-08:53-18:12-18:18",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "出勤工时：9小时30分钟",
    Today: false,
    IsInAttendancePeriod: false,
  },
  {
    Month: "3",
    Day: "22日",
    CreditCardData: "06:25",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: true,
    IsInAttendancePeriod: false,
  },
  {
    Month: "3",
    Day: "23日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: false,
  },
  {
    Month: "3",
    Day: "24日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: false,
  },
  {
    Month: "3",
    Day: "25日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: false,
  },
  {
    Month: "3",
    Day: "26日",
    CreditCardData: "",
    OvertimeData: "",
    AttendanceData: "",
    LeaveTheData: "",
    TravelTheData: "",
    AttendancelType: "",
    AttendancelTypeCode: 0,
    WorkingSystemText: null,
    AccountingWork: "",
    Today: false,
    IsInAttendancePeriod: false,
  },
];

const { Title } = Typography;
const { Column, ColumnGroup } = Table;
const { TextArea } = Input;
import "./index.scss";
import Item from "antd/lib/list/Item";
function onChange(date: any, dateString: string) {
  console.log(date, dateString);
}
export default function Detail() {
  const [text, setText] = useState("");
  data.forEach((item: any, index: Number) => {
    item.id = index;
  });
  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Space>
          <Button type="primary">
            点击此处打开新页面复制数据黏贴至下文本框
          </Button>
          <DatePicker
            style={{ width: "200px" }}
            placeholder="别忘了点这里选择日期"
            onChange={onChange}
          />
        </Space>
        <TextArea
          onChange={(event) => {
            event.persist();
            console.log(event.target.value);

            setText(event.target.value);
          }}
          rows={4}
        />
        <Title level={3}>Info</Title>
        <Descriptions bordered>
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
          <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
          <Descriptions.Item label="Order time">
            2018-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Usage Time" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item>
          <Descriptions.Item label="Negotiated Amount">
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
          </Descriptions.Item>
        </Descriptions>
        <Title level={3}>Table</Title>
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
            render={(text, record: any) => (
              <Space size="middle">
                <a>Delete</a>
              </Space>
            )}
          />
        </Table>
      </Space>
    </>
  );
}
