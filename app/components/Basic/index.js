import React from "react";
import {
    Divider,
    Color,
    IconExample,
    Example,
} from "../Helper/index";

import {
    Alert,
    Button,
    Input,
    Icon,
    Row,
    Col,
    Form,
    Select,
    Upload,
    Checkbox,
    Collapse,
    InputNumber,
    Breadcrumb,
    Switch,
    Slider,
    Radio,
    Table,
    Tabs,
    Popover,
    Card,
    Notification,
    Tooltip,
    Progress,
    Steps,
    Drawer,
    DatePicker
} from "bitshares-ui-style-guide";

import PropTypes from "prop-types";

import logo from "../../assets/images/bitshares-text-logo.png";

/* * * * * * * UPLOAD * * * * * * */

const props = {
    action         : "//jsonplaceholder.typicode.com/posts/",
    onChange({file, fileList}) {
        if (file.status !== "uploading") {
            console.log(file, fileList);
        }
    },
    defaultFileList: [{
        uid    : 1,
        name   : "xxx.png",
        status : "done",
        reponse: "Server Error 500", // custom error message to show
    }, {
        uid   : 2,
        name  : "yyy.png",
        status: "done",
    }, {
        uid    : 3,
        name   : "zzz.png",
        status : "error",
        reponse: "Server Error 500", // custom error message to show
    }],
};

const props2 = {
    name    : "file",
    multiple: true,
    action  : "//jsonplaceholder.typicode.com/posts/",
    onChange(info) {
        const status = info.file.status;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

/* * * * * * * UPLOAD END * * * * * * */

/* * * * * * * TABLE * * * * * * */

const tableColumns = [{
    title    : "asset",
    dataIndex: "asset",
    key      : "asset",
    sorter: (a, b) => a.asset.length - b.asset.length,
    render   : function someName(text) { return (<div className="helper-table-asset-name">{text}</div>); }
}, {
    title    : "price",
    dataIndex: "price",
    key      : "price",
    render   : (text) => text
}, {
    title    : "change",
    dataIndex: "change",
    key      : "change",
    filters  : [
        {
            text : "> 0",
            value: "1"
        },
        {
            text : "< 0",
            value: "-1"
        }
    ],
    onFilter: (value, record) => value > 0 ? record.change > 0 : record.change < 0,
    render   : (text) => {
        let textNumber = text.replace("%", "");
        if (Number(textNumber) > 0) {
            return (<div className="helper-table-price-high">{text}</div>);
        } else if (Number(textNumber) < 0) {
            return (<div className="helper-table-price-low">{text}</div>);
        } else {
            return (text);
        }
    }
}, {
    title    : "volume",
    dataIndex: "volume",
    key      : "volume",
    render   : (text) => text
}];

const inputAddonSelect = (
    <Select defaultValue="1">
        <Select.Option key="1">@gmail.com</Select.Option>
        <Select.Option key="2">@yahoo.com</Select.Option>
        <Select.Option key="3">@example.com</Select.Option>
    </Select>
);

const tableData = [
    {
        key   : "open.BTC:bitUSD",
        asset : "open.BTC:bitUSD",
        price : "8,734.00",
        change: "9.12%",
        volume: "117.0k"
    }, {
        key   : "open.BTC:bitEUR",
        asset : "open.BTC:bitEUR",
        price : "2345.00",
        change: "-3.12%",
        volume: "50.0k"
    }, {
        key   : "open.BTC:bitCNY",
        asset : "open.BTC:bitCNY",
        price : "0,23",
        change: "10%",
        volume: "120.0k"
    }
];

/* * * * * * * TABLE END * * * * * * */

/* * * * * * * SLIDER * * * * * * */

const sliderMarks = {
    0  : "0",
    50 : "50",
    80 : "80",
    100: "100",
};

/* * * * * * * SLIDER END * * * * * * */


/* * * * * * * POPOVER CONTENT * * * * */

const popoverDemoButtonWidth = 110;

const popoverTitle = <span>Title</span>;

const popoverContent = (
    <div>
        <div>Content</div>
        <div>Content</div>
    </div>
);

/* * * * * * * TOOLTIP CONTENT * * * * */

const tooltipDemoButtonWidth = 110;

const tooltipTitle = <span>Title</span>;

/* * * * * * * POPOVER CONTENT END * * * * */

class Basic extends React.Component {

    static propTypes = {
        colorPalette: PropTypes.object,
        themeName   : PropTypes.string,
        theme       : PropTypes.string,
    };

    state = {
        sliderValue : 1,
        activeTabKey: "tab1",
        isDrawerVisible: false,
    };

    handleDrawerOpen() {
        this.setState({
            isDrawerVisible: true
        });
    }

    handleDrawerClose() {
        this.setState({
            isDrawerVisible: false
        });
    }

    onSliderChange(value) {
        this.setState({
            sliderValue: value
        });
    }

    onTabChange(tab) {

        this.setState({
            activeTabKey: tab,
        });

    }

    handleBackToList() {
        this.props.history.push("/");
    }

    constructor(props) {
        super(props);

        this.onSliderChange = this.onSliderChange.bind(this);
        this.onTabChange = this.onTabChange.bind(this);
        this.handleBackToList = this.handleBackToList.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose= this.handleDrawerClose.bind(this);
    }

    showNotification(type) {

        return () => {

            if(!type) {
                Notification.open({
                    message: "Hello, world!",
                    description: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
                });
                return true;
            }

            Notification[type]({
                message: "Hello, world!",
                description: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
                duration: 600000
            });
        };
    }

    render() {
        return (
            <div className={"container"}>
                <div className="back-to-list" onClick={this.handleBackToList}>
                    <Icon type="left"/>
                </div>
                <div className="header">
                    <div className="header-logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="header-description">
                        style guide: {this.props.themeName} theme
                    </div>
                </div>
                <Divider style={{marginTop: 0}}/>
                {/*
            ****COLOURS PALETTE****
        */}
                <h2 className="helper">colour palette</h2>

                <h3 className="helper">primary colours</h3>

                <Example label="example uses" content="Links, buttons, tabs & navigation components" style={{width: "300px"}}/>

                {this.props.colorPalette.primary.map((color, i) => (
                    <Color {...color} key={i}/>
                ))}

                <h3 className="helper">helper colours</h3>

                <Example label="example uses" content="User feedback & positive / negative % change" style={{width: "300px"}}/>

                {this.props.colorPalette.helper.map((color, i) => (
                    <Color {...color} key={i}/>
                ))}

                <h3 className="helper">accent colours</h3>

                <Example label="example uses" content="Borders, highlights, shadows" style={{width: "300px"}}/>

                {this.props.colorPalette.accent.map((color, i) => (
                    <Color {...color} key={i}/>
                ))}

                <h3 className="helper">calculated colours</h3>
                <span> Using SCSS, it is possible to use calculated colours, for example hover effect that are in keeping with existing branding. <br/>
                    E.g. A hyperlink should be 10% lighter on hover
                </span>
                <div>
                    <code>
                        {"color: lighten(#00A9E0, 10%);"}
                    </code>
                    And, you can also darken colours:
                    <code>
                        {"color: darken(#2C2E37, 15%);"}
                    </code>
                </div>
                {/*
            ****TYPOGRAPHY****
        */}
                <Divider/>
                <h2 className="helper">Typography</h2>
                <Example label="note" content={
                    <div>
                        <p>For edge cases there is an argument to use Noto Sans which offers support for:</p>
                        <p>Tall language scripts requiring extra line height to accommodate larger glyphs, such as
                            Arabic, Hindi, Telugu, Thai and Vietnamese.</p>
                        <p>Dense languge scripts requiring extra line height to accommodate larger glyphs, including
                            Chinese, Japanese and Korean</p>
                    </div>
                } style={{width: "300px"}}/>
                <p>
                    For consistency Roboto will be the default font choice. According to Google Font Analytics, it is
                    popular in the US,
                    Russia, Japan, India and Brazil amongst others. In the year (March 2017 - March 2018) it was viewed
                    over 2 trillion times
                    and is featured on ~20 millions websites.
                </p>
                <p>
                    Roboto covers all Latin, Greek and Cyrillic characters as defined in Unicode 7.0
                </p>
                <h3 className="helper">definitions</h3>
                <p>Roboto Regular // Base Font Size // 14px</p>
                <h6>Roboto Medium // HEADING 6 // 14px</h6>
                <h5>Roboto Medium // HEADING 5 // 16px</h5>
                <h4>Roboto Medium // HEADING 4 // 18px</h4>
                <h3>Roboto Medium // HEADING 3 // 22px</h3>
                <h2>Roboto Medium // HEADING 2 // 24px</h2>
                <h1>Roboto Medium // HEADING 1 // 26px</h1>
                {/*
            ****ICONOGRAPHY****
        */}
                <Divider/>
                <h2 className="helper">ICONOGRAPHY</h2>
                <p>
                    The full list of icons you can find
                    there: <a href="https://ant.design/components/icon/">https://ant.design/components/icon</a>
                </p>
                <div>
                    <IconExample type="step-backward"/>
                    <IconExample type="step-forward"/>
                    <IconExample type="fast-backward"/>
                    <IconExample type="fast-forward"/>
                    <IconExample type="shrink"/>
                    <IconExample type="arrows-alt"/>
                    <IconExample type="down"/>
                    <IconExample type="up"/>
                    <IconExample type="left"/>
                    <IconExample type="right"/>
                    <IconExample type="caret-up"/>
                    <IconExample type="caret-down"/>
                    <IconExample type="caret-left"/>
                    <IconExample type="caret-right"/>
                    <IconExample type="up-circle"/>
                    <IconExample type="down-circle"/>
                    <IconExample type="left-circle"/>
                    <IconExample type="right-circle"/>
                    <IconExample type="up-circle-o"/>
                    <IconExample type="down-circle-o"/>
                    <IconExample type="right-circle-o"/>
                    <IconExample type="left-circle-o"/>
                    <IconExample type="double-right"/>
                    <IconExample type="double-left"/>
                </div>
                <Divider/>
                <h2 className="helper">Buttons</h2>

                <h3 className="helper">Primary</h3>
                <Example label="example uses" content={
                    <div>
                        <p>Combine primary and secondary styles to provide a visual weighting to choices E.g.</p>
                        <Button type="primary">submit</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button>reset</Button>
                    </div>
                } style={{width: "300px"}}/>
                <Button type="primary">Regular</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="primary" disabled={true}>Disabled</Button>

                <h3 className="helper">Default</h3>
                <Button>Default</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button disabled={true}>Disabled</Button>

                <h3 className="helper">Contextual Buttons</h3>
                <p>
                    There may be cases where providing a contextual button will reinforce what the user is about to
                    do.<br/>
                    This approach however should be used both carefully and sparingly.
                </p>
                <Button type="danger">Danger</Button>


                <Divider/>

                <h2 className="helper">form fields</h2>

                <h3 className="helper">text input</h3>

                <Row>
                    <Col span={6}>
                        <Input type="text" placeholder="Placeholder"/>
                        <p>Default (empty)</p>
                    </Col>

                    <Col span={6} offset={1}>
                        <Input type="text" defaultValue="Entered Text"/>
                        <p>Default (Filled)</p>
                    </Col>
                    <Col span={6} offset={1}>
                        <Input type="text" defaultValue="Entered Text" disabled={true}/>
                        <p>Disabled</p>
                    </Col>

                </Row>

                <h3 className="helper">Addon Before & Addon After</h3>

                <Row>
                    <Col span={9}>
                        <Input type="text" placeholder="Email" addonAfter={"@gmail.com"} addonBefore={"Email:"}/>
                        <p>Text AddonAfter</p>
                    </Col>

                    <Col span={9} offset={1}>
                        <Input type="text" placeholder="Email" addonAfter={inputAddonSelect}/>
                        <p>Select AddonAfter</p>
                    </Col>

                </Row>

                <h3 className="helper">text area</h3>

                <Row>
                    <Col span={6}>
                        <Input.TextArea rows={5} type="text" placeholder="Placeholder"/>
                        <p>Textarea</p>
                    </Col>

                    <Col span={6} offset={1}>
                        <Input.TextArea rows={5} type="text" placeholder="Placeholder" disabled={true}/>
                        <p>Textarea Disabled</p>
                    </Col>

                </Row>

                <h3 className="helper">labels, validation & inline buttons</h3>

                <Row>
                    <Col span={6}>

                        <Form.Item label="Input Label">
                            <Input type="text" placeholder="Input"/>
                        </Form.Item>

                    </Col>

                    <Col span={6} offset={1}>

                        <Form.Item label="Input Label" validateStatus="error" help="Validation error text helper">
                            <Input type="text" placeholder="Input"/>
                        </Form.Item>

                    </Col>

                    <Col span={6} offset={1}>

                        <Form.Item label="Input Group">
                            <Input.Group compact>
                                <Input style={{width: "calc(100% - 50px)"}} type="text" placeholder="Placeholder"/>
                                <Button style={{width: "50px"}} type="primary" icon="copy"/>
                            </Input.Group>
                        </Form.Item>

                    </Col>
                </Row>

                <h3 className="helper">Select input</h3>

                <Row>
                    <Col span={6}>
                        <Select placeholder="Select option" style={{width: "100%"}}>
                            <Select.Option value={"Option #1"}>Option #1</Select.Option>
                            <Select.Option value={"Option #2"}>Option #2</Select.Option>
                            <Select.Option disabled value={"Option #3"}>Option #3</Select.Option>
                            <Select.Option value={"Option #4"}>Option #4</Select.Option>
                        </Select>
                    </Col>
                    <Col span={6} offset={1}>
                        <Select defaultValue="Option #1" placeholder="Select currency" style={{width: "100%"}}>
                            <Select.Option value={"Option #1"}>Option #1</Select.Option>
                            <Select.Option value={"Option #2"}>Option #2</Select.Option>
                            <Select.Option disabled value={"Option #3"}>Option #3</Select.Option>
                            <Select.Option value={"Option #4"}>Option #4</Select.Option>
                        </Select>
                    </Col>
                    <Col span={6} offset={1}>
                        <Select disabled={true} defaultValue="Option #1" placeholder="Select currency" style={{width: "100%"}}>
                            <Select.Option value={"Option #1"}>Option #1</Select.Option>
                            <Select.Option value={"Option #2"}>Option #2</Select.Option>
                            <Select.Option disabled value={"Option #3"}>Option #3</Select.Option>
                            <Select.Option value={"Option #4"}>Option #4</Select.Option>
                        </Select>
                    </Col>
                </Row>

                <h3 className="helper">Select & typeahead</h3>

                <Row>
                    <Col span={6}>
                        <Select placeholder={"Select asset"} showSearch optionFilterProp="children" style={{width: "100%"}} filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Select.Option value={"Bitshares"}>Bitshares</Select.Option>
                            <Select.Option value={"Bitcoin"}>Bitcoin</Select.Option>
                            <Select.Option disabled value={"BitGold"}>BitGold</Select.Option>
                            <Select.Option value={"Bitcoin Cash"}>Bitcoin Cash</Select.Option>
                        </Select>
                    </Col>
                    <Col span={6} offset={1}>
                        <Select defaultValue={"Bitshares"} showSearch optionFilterProp="children" style={{width: "100%"}} filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Select.Option value={"Bitshares"}>Bitshares</Select.Option>
                            <Select.Option value={"Bitcoin"}>Bitcoin</Select.Option>
                            <Select.Option disabled value={"BitGold"}>BitGold</Select.Option>
                            <Select.Option value={"Bitcoin Cash"}>Bitcoin Cash</Select.Option>
                        </Select>
                    </Col>
                </Row>

                <Row>
                    <Col span={6}>
                        <h3 className="helper">Upload by click</h3>
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload"/> Upload
                            </Button>
                        </Upload>
                    </Col>
                    <Col span={6} offset={1}>
                        <h3 className="helper">Upload drag & drop</h3>
                        <Upload.Dragger {...props2}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox"/>
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Allowed files include .png, .jpg, .pdf</p>
                        </Upload.Dragger>
                    </Col>
                </Row>

                <h3 className="helper">checkbox & radio buttons</h3>

                <Row>
                    <Col span={11}>
                        <Form.Item label="Which do you invest in?">
                            <Checkbox checked>Bitshares</Checkbox>
                            <Checkbox>Bitcoin</Checkbox>
                            <Checkbox>Bitcoin Cash</Checkbox>
                            <Checkbox disabled={true}>Disabled</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={11} offset={2}>
                        <Form.Item label="Choose your favourite">
                            <Radio.Group defaultValue="bitshares">
                                <Radio value={"bitshares"}>Bitshares</Radio>
                                <Radio value={"bitcoin"}>Bitcoin</Radio>
                                <Radio value={"bitcoin cash"}>Bitcoin Cash</Radio>
                                <Radio value={"bitcoin cash"} disabled={true}>Disabled</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>

                <h3 className="helper">Switches</h3>

                <Row>
                    <Col span={2}>
                        <Form.Item label="Switch On">
                            <Switch defaultChecked/>
                        </Form.Item>
                    </Col>
                    <Col span={2} offset={1}>
                        <Form.Item label="Switch Off">
                            <Switch/>
                        </Form.Item>
                    </Col>
                    <Col span={2} offset={1}>
                        <Form.Item label="Switch On Disabled">
                            <Switch defaultChecked disabled={true}/>
                        </Form.Item>
                    </Col>
                    <Col span={2} offset={1}>
                        <Form.Item label="Switch Off Disabled">
                            <Switch disabled={true}/>
                        </Form.Item>
                    </Col>
                </Row>
    
                <Divider/>
    
                <h2 className="helper">DatePicker & TimePicker</h2>
                
                <Row>
                    <Col span={6}>
                        <h3 className="helper">Date Picker</h3>
    
                        <DatePicker />
                    </Col>
                    <Col span={6}>
                        <h3 className="helper">Month Picker</h3>
    
                        <DatePicker.MonthPicker />
                    </Col>
                    
                    <Col span={6}>
                        <h3 className="helper">Range Picker</h3>
    
                        <DatePicker.RangePicker />
                    </Col>
                    
                </Row>
    
                <Row>
                    <Col span={6}>
                        <h3 className="helper">Week Picker</h3>
            
                        <DatePicker.WeekPicker />
                    </Col>
                    <Col span={6}>
                        <h3 className="helper">Show Time</h3>
            
                        <DatePicker showTime={true} />
                    </Col>
    
                </Row>
                
                <Divider/>

                <h2 className="helper">tables</h2>

                <h3 className="helper">table with pagination</h3>

                <Table columns={tableColumns} dataSource={tableData}/>

                <h3 className="helper">table without pagination</h3>

                <Table columns={tableColumns} dataSource={tableData} pagination={false}/>

                <Divider/>

                <h2 className="helper">Progress</h2>

                <h3 className="helper">Progress Bar</h3>

                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />

                <h3 className="helper">Progress Circle</h3>

                <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
                &nbsp;
                <Progress type="circle" percent={100} format={() => "Done"} />

                <Divider/>

                <h2 className="helper">Tabs</h2>

                <Tabs defaultActiveKey={"tab1"} activeKey={this.state.activeTabKey} onChange={this.onTabChange}>
                    <Tabs.TabPane tab="Tab #1" key="tab1">Content of Tab Pane 1</Tabs.TabPane>
                    <Tabs.TabPane tab="Tab #2" key="tab2">Content of Tab Pane 2</Tabs.TabPane>
                    <Tabs.TabPane tab="Tab #3" key="tab3">Content of Tab Pane 3</Tabs.TabPane>
                </Tabs>

                <br/>
                <br/>
                <br/>

                <Tabs type="card" defaultActiveKey={"tab1"} activeKey={this.state.activeTabKey} onChange={this.onTabChange}>
                    <Tabs.TabPane tab="Tab #1" key="tab1">Content of Tab Pane 1</Tabs.TabPane>
                    <Tabs.TabPane tab="Tab #2" key="tab2">Content of Tab Pane 2</Tabs.TabPane>
                    <Tabs.TabPane tab="Tab #3" key="tab3">Content of Tab Pane 3</Tabs.TabPane>
                </Tabs>

                <Divider/>

                <h2 className="helper">Slider</h2>

                <Row>
                    <Col span={11}>
                        <h3 className="helper">Single Slider</h3>
                        <Slider/>
                    </Col>
                    <Col span={11} offset={2}>
                        <h3 className="helper">Range Slider</h3>
                        <Slider range defaultValue={[20, 50]}/>
                    </Col>
                </Row>

                <Row>
                    <Col span={11}>
                        <h3 className="helper">Slider Input</h3>
                        <Row>
                            <Col span={16}>
                                <Slider onChange={this.onSliderChange} value={this.state.sliderValue}/>
                            </Col>
                            <Col span={6} offset={2}>
                                <InputNumber min={1} max={100} value={this.state.sliderValue} onChange={this.onSliderChange}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={11} offset={2}>
                        <h3 className="helper">Stepped Slider</h3>
                        <Slider marks={sliderMarks}/>
                    </Col>
                </Row>

                <Divider/>

                <h2 className="helper">breadcrumbs</h2>

                <Breadcrumb>
                    <Breadcrumb.Item><a>Dashboard</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>My Account</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>Permissions</a></Breadcrumb.Item>
                    <Breadcrumb.Item>Owner Permissions</Breadcrumb.Item>
                </Breadcrumb>

                <Divider/>

                <h2 className="helper">Modal</h2>

                <iframe src={`#/modal/${this.props.theme}`} frameBorder={0} width={"100%"} height={"500px"} style={{border: "2px solid #33343a"}}/>

                <Divider/>

                <h2 className="helper">Drawer</h2>

                <Button onClick={this.handleDrawerOpen}>Open</Button>

                <Drawer visible={this.state.isDrawerVisible} title="Basic Drawer" placement="right" onClose={this.handleDrawerClose}>
                    The drawer content is there
                </Drawer>

                <Divider/>


                <h2>Collapse</h2>

                <h3>Collapse</h3>

                <Collapse defaultActiveKey={["1"]}>
                    <Collapse.Panel header="This is panel header 1" key="1">
                        <p>
                            BitShares provides a high-performance decentralized exchange, with all the features you would expect in a trading platform. It can handle the trading volume of the NASDAQ, while settling orders the second you submit them. With this kind of performance on a decentralized exchange, who needs risky centralized exchanges?
                        </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="This is panel header 2" key="2" >
                        <p>
                            BitShares provides a high-performance decentralized exchange, with all the features you would expect in a trading platform. It can handle the trading volume of the NASDAQ, while settling orders the second you submit them. With this kind of performance on a decentralized exchange, who needs risky centralized exchanges?
                        </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="This is panel header 3" key="3" disabled>
                        <p>
                            BitShares provides a high-performance decentralized exchange, with all the features you would expect in a trading platform. It can handle the trading volume of the NASDAQ, while settling orders the second you submit them. With this kind of performance on a decentralized exchange, who needs risky centralized exchanges?
                        </p>
                    </Collapse.Panel>
                </Collapse>

                <h3>Borderless</h3>

                <Collapse defaultActiveKey={["1"]} bordered={false}>
                    <Collapse.Panel header="This is panel header 1" key="1">
                        <p>
                            BitShares provides a high-performance decentralized exchange, with all the features you would expect in a trading platform. It can handle the trading volume of the NASDAQ, while settling orders the second you submit them. With this kind of performance on a decentralized exchange, who needs risky centralized exchanges?
                        </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="This is panel header 2" key="2">
                        <p>
                            BitShares provides a high-performance decentralized exchange, with all the features you would expect in a trading platform. It can handle the trading volume of the NASDAQ, while settling orders the second you submit them. With this kind of performance on a decentralized exchange, who needs risky centralized exchanges?
                        </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="This is panel header 3" key="3" disabled>
                        <p>
                            BitShares provides a high-performance decentralized exchange, with all the features you would expect in a trading platform. It can handle the trading volume of the NASDAQ, while settling orders the second you submit them. With this kind of performance on a decentralized exchange, who needs risky centralized exchanges?
                        </p>
                    </Collapse.Panel>
                </Collapse>

                <h3>No Arrow</h3>

                <Collapse defaultActiveKey={["1"]}>
                    <Collapse.Panel header="This is panel header 1" key="1" showArrow={false}>
                        <p>
                            BitShares provides a high-performance decentralized exchange, with all the features you would expect in a trading platform. It can handle the trading volume of the NASDAQ, while settling orders the second you submit them. With this kind of performance on a decentralized exchange, who needs risky centralized exchanges?
                        </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="This is panel header 2" key="2" showArrow={false}>
                        <p>
                            BitShares provides a high-performance decentralized exchange, with all the features you would expect in a trading platform. It can handle the trading volume of the NASDAQ, while settling orders the second you submit them. With this kind of performance on a decentralized exchange, who needs risky centralized exchanges?
                        </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="This is panel header 3" key="3" disabled showArrow={false}>
                        <p>
                            BitShares provides a high-performance decentralized exchange, with all the features you would expect in a trading platform. It can handle the trading volume of the NASDAQ, while settling orders the second you submit them. With this kind of performance on a decentralized exchange, who needs risky centralized exchanges?
                        </p>
                    </Collapse.Panel>
                </Collapse>

                <Divider/>

                <h2>Popover</h2>

                <h3>Popover with title</h3>

                <Popover content={popoverContent} title="Title">
                    <Button type="primary">Hover me</Button>
                </Popover>

                <h3>Popover without title</h3>

                <Popover content={popoverContent}>
                    <Button type="primary">Hover me</Button>
                </Popover>

                <h3>Popover placement</h3>
                <div className="helper-popover-demo">

                    <div style={{ marginLeft: popoverDemoButtonWidth, whiteSpace: "nowrap" }}>
                        <Popover placement="topLeft" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>TL</Button>
                        </Popover>
                        <Popover placement="top" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>Top</Button>
                        </Popover>
                        <Popover placement="topRight" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>TR</Button>
                        </Popover>
                    </div>
                    <div style={{ width: popoverDemoButtonWidth, float:"left" }}>
                        <Popover placement="leftTop" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>LT</Button>
                        </Popover>
                        <Popover placement="left" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>Left</Button>
                        </Popover>
                        <Popover placement="leftBottom" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>LB</Button>
                        </Popover>
                    </div>
                    <div style={{ width: popoverDemoButtonWidth, marginLeft: (popoverDemoButtonWidth * 4) }}>
                        <Popover placement="rightTop" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>RT</Button>
                        </Popover>
                        <Popover placement="right" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>Right</Button>
                        </Popover>
                        <Popover placement="rightBottom" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>RB</Button>
                        </Popover>
                    </div>
                    <div style={{ marginLeft: popoverDemoButtonWidth, clear: "both", whiteSpace: "nowrap" }}>
                        <Popover placement="bottomLeft" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>BL</Button>
                        </Popover>
                        <Popover placement="bottom" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>Bottom</Button>
                        </Popover>
                        <Popover placement="bottomRight" title={popoverTitle} content={popoverContent} trigger="click">
                            <Button>BR</Button>
                        </Popover>
                    </div>
                </div>

                <Divider/>

                <h2>Tooltip</h2>

                <h3>Tooltip placement</h3>
                <div className="helper-popover-demo">

                    <div style={{ marginLeft: tooltipDemoButtonWidth, whiteSpace: "nowrap" }}>
                        <Tooltip placement="topLeft" title={tooltipTitle}>
                            <Button>TL</Button>
                        </Tooltip>
                        <Tooltip placement="top" title={tooltipTitle}>
                            <Button>Top</Button>
                        </Tooltip>
                        <Tooltip placement="topRight" title={tooltipTitle}>
                            <Button>TR</Button>
                        </Tooltip>
                    </div>
                    <div style={{ width: tooltipDemoButtonWidth, float: "left" }}>
                        <Tooltip placement="leftTop" title={tooltipTitle}>
                            <Button>LT</Button>
                        </Tooltip>
                        <Tooltip placement="left" title={tooltipTitle}>
                            <Button>Left</Button>
                        </Tooltip>
                        <Tooltip placement="leftBottom" title={tooltipTitle}>
                            <Button>LB</Button>
                        </Tooltip>
                    </div>
                    <div style={{ width: tooltipDemoButtonWidth, marginLeft: (tooltipDemoButtonWidth * 4) }}>
                        <Tooltip placement="rightTop" title={tooltipTitle}>
                            <Button>RT</Button>
                        </Tooltip>
                        <Tooltip placement="right" title={tooltipTitle}>
                            <Button>Right</Button>
                        </Tooltip>
                        <Tooltip placement="rightBottom" title={tooltipTitle}>
                            <Button>RB</Button>
                        </Tooltip>
                    </div>
                    <div style={{ marginLeft: tooltipDemoButtonWidth, clear: "both", whiteSpace: "nowrap" }}>
                        <Tooltip placement="bottomLeft" title={tooltipTitle}>
                            <Button>BL</Button>
                        </Tooltip>
                        <Tooltip placement="bottom" title={tooltipTitle}>
                            <Button>Bottom</Button>
                        </Tooltip>
                        <Tooltip placement="bottomRight" title={tooltipTitle}>
                            <Button>BR</Button>
                        </Tooltip>
                    </div>

                </div>

                <Divider/>

                <h2>Steps</h2>

                <h3>Basic</h3>

                <Steps current={1}>
                    <Steps.Step title="Finished" description="This is a description." />
                    <Steps.Step title="In Progress" description="This is a description." />
                    <Steps.Step title="Waiting" description="This is a description." />
                </Steps>

                <Divider/>

                <h2>Button Group</h2>

                <h3>Button Group</h3>

                <Button.Group>
                    <Button>First</Button>
                    <Button>Second</Button>
                </Button.Group>

                <h3>Button Group Disabled</h3>

                <Button.Group>
                    <Button>First</Button>
                    <Button disabled>Second</Button>
                    <Button>Third</Button>
                </Button.Group>

                <h3>Button Group different styles</h3>

                <Button.Group>
                    <Button type="primary">First</Button>
                    <Button type="dashed">Second</Button>
                    <Button type="danger">Third</Button>
                </Button.Group>

                <h2>Radio Button Group</h2>

                <Radio.Group buttonStyle="solid" defaultValue="a">
                    <Radio.Button value="a">First</Radio.Button>
                    <Radio.Button value="b">Second</Radio.Button>
                    <Radio.Button value="c">Third</Radio.Button>
                </Radio.Group>

                <Divider/>

                <h2>Card</h2>

                <h3>Card Basic</h3>

                <Card
                    title="Card title"
                    extra={<a href="#">More</a>}
                    style={{ width: 300 }}
                >
                    <p style={{margin: 0}}>Card content</p>
                    <p style={{margin: 0}}>Card content</p>
                    <p style={{margin: 0}}>Card content</p>
                </Card>

                <Divider/>

                <h2>Notification</h2>

                <Button style={{marginRight: "8px"}} onClick={this.showNotification("")}>Notify</Button>
                <Button style={{marginRight: "8px"}} onClick={this.showNotification("success")}>Notify Success</Button>
                <Button style={{marginRight: "8px"}} onClick={this.showNotification("info")}>Notify Info</Button>
                <Button style={{marginRight: "8px"}} onClick={this.showNotification("warning")}>Notify Warning</Button>
                <Button style={{marginRight: "8px"}} onClick={this.showNotification("error")}>Notify Error</Button>

                <Divider/>

                <h2>Alert</h2>

                <h3>Simple</h3>

                <Alert message="Success Text" type="success" /><br/>
                <Alert message="Info Text" type="info" /><br/>
                <Alert message="Warning Text" type="warning" /><br/>
                <Alert message="Error Text" type="error" /><br/>

                <h3>Title</h3>

                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description"
                    type="success"
                />
                <br/>
                <Alert
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                />
                <br/>
                <Alert
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                    type="warning"
                />
                <br/>
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description"
                    type="error"
                />

                <h3>Icon</h3>

                <Alert message="Success Tips" type="success" showIcon /><br/>
                <Alert message="Informational Notes" type="info" showIcon /><br/>
                <Alert message="Warning" type="warning" showIcon /><br/>
                <Alert message="Error" type="error" showIcon /><br/>
                <Alert
                    message="Success Tips"
                    description="Detailed description and advices about successful copywriting."
                    type="success"
                    showIcon
                /><br/>
                <Alert
                    message="Informational Notes"
                    description="Additional description and informations about copywriting."
                    type="info"
                    showIcon
                /><br/>
                <Alert
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                /><br/>
                <Alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                />

            </div>
        );
    }

}

export default Basic;
