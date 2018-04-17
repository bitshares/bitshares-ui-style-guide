import React from 'react';
import {
  Divider,
  Color,
  IconExample
} from '../Helper/index';

import {
  Button,
  Input,
  Icon,
  Row,
  Col,
  Form,
  Select,
  Upload,
  Checkbox,
  InputNumber,
  Breadcrumb,
  Switch,
  Slider,
  Radio,
  Table,
  Tabs,
} from 'bitshares-ui-style-guide';

import PropTypes from 'prop-types';

import logo from '../../assets/images/bitshares-logo.png';

/* * * * * * * UPLOAD * * * * * * */

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500', // custom error message to show
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500', // custom error message to show
  }],
};

const props2 = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

/* * * * * * * UPLOAD END * * * * * * */

/* * * * * * * TABLE * * * * * * */

const tableColumns = [{
  title    : 'asset',
  dataIndex: 'asset',
  key      : 'asset',
  render   : (text) => text
}, {
  title    : 'price',
  dataIndex: 'price',
  key      : 'price',
  render   : (text) => text
}, {
  title    : 'change',
  dataIndex: 'change',
  key      : 'change',
  render   : (text) => text
}, {
  title    : 'volume',
  dataIndex: 'volume',
  key      : 'volume',
  render   : (text) => text
}];

const tableData = [
  {
    key: 'open.btc:bitUSD',
    asset: 'open.btc:bitUSD',
    price: '8,734.00',
    change: '9.12%',
    volume: '117.0k'
  }, {
    key: 'open.btc:bitEUR',
    asset: 'open.btc:bitEUR',
    price: '2345.00',
    change: '-3.12%',
    volume: '50.0k'
  }, {
    key: 'open.btc:bitCNY',
    asset: 'open.btc:bitCNY',
    price: '0,23',
    change: '10%',
    volume: '120.0k'
  }
];

/* * * * * * * TABLE END * * * * * * */

/* * * * * * * SLIDER * * * * * * */

const sliderMarks = {
  0: '0',
  50: '50',
  80: '80',
  100: '100',
};

/* * * * * * * SLIDER END * * * * * * */

class Basic extends React.Component {

  static propTypes = {
    colorPalette: PropTypes.object,
  };

  state = {
    sliderValue: 1,
    activeTabKey: 'tab1'
  };

  onSliderChange(value) {
    this.setState({
      sliderValue: value
    })
  }

  onTabChange(tab) {

    this.setState({
      activeTabKey: tab,
    });

  }

  constructor(props) {
    super(props);

    this.onSliderChange = this.onSliderChange.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  render() {
    return (
      <div className={'container'}>
        <div className="header">
          <div className="header-logo">
            <img src={logo} alt=""/>
          </div>
          <div className="header-description">
            style guide: midnight theme
          </div>
        </div>
        <Divider style={{marginTop: 0}}/>
        {/*
            ****COLOURS PALETTE****
        */}
        <h2>colour palette</h2>

        <h3>primary colours</h3>
        { this.props.colorPalette.primary.map((color, i) => (
          <Color {...color} key={i}/>
        ))}

        <h3>helper colours</h3>
        { this.props.colorPalette.helper.map((color, i) => (
          <Color {...color} key={i}/>
        ))}

        <h3>accent colours</h3>
        { this.props.colorPalette.accent.map((color, i) => (
          <Color {...color} key={i}/>
        ))}

        <h3>calculated colours</h3>
        <span>
          Using SCSS, it is possible to use calculated colours, for example hover effect that are in keeping with existing branding.
          <br/>
          E.g. A hyperlink should be 10% lighter on hover
        </span>
        <div>
          <code>
            {`color: lighten(#00A9E0, 10%);`}
          </code>
          And, you can also darken colours:
          <code>
            {`color: darken(#2C2E37, 15%);`}
          </code>
        </div>
        {/*
            ****TYPOGRAPHY****
        */}
        <Divider/>
        <h2>Typography</h2>
        <p>
          For consistency 'Roboto' will be the default font choice. According to Google Font Analytics, it is popular in the US,
          Russia, Japan, India and Brazil amongst others. In the year (March 2017 - March 2018) it was viewed over 2 trillion times
          and is featured on ~20 millions websites.
        </p>
        <p>
          Roboto covers all Latin, Greek and Cyrillic characters as defined in Unicode 7.0
        </p>
        <h3>definitions</h3>
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
        <h2>ICONOGRAPHY</h2>
        <p>
          The full list of icons you can find there: <a href="https://ant.design/components/icon/">https://ant.design/components/icon</a>
        </p>
        <div>
          <IconExample type="step-backward" />
          <IconExample type="step-forward" />
          <IconExample type="fast-backward" />
          <IconExample type="fast-forward" />
          <IconExample type="shrink" />
          <IconExample type="arrows-alt" />
          <IconExample type="down" />
          <IconExample type="up" />
          <IconExample type="left" />
          <IconExample type="right" />
          <IconExample type="caret-up" />
          <IconExample type="caret-down" />
          <IconExample type="caret-left" />
          <IconExample type="caret-right" />
          <IconExample type="up-circle" />
          <IconExample type="down-circle" />
          <IconExample type="left-circle" />
          <IconExample type="right-circle" />
          <IconExample type="up-circle-o" />
          <IconExample type="down-circle-o" />
          <IconExample type="right-circle-o" />
          <IconExample type="left-circle-o" />
          <IconExample type="double-right" />
          <IconExample type="double-left" />
        </div>
        <Divider/>
        <h2>Buttons</h2>

        <h3>Primary</h3>
        <Button type="primary">Regular</Button> <Button type="primary" disabled={true}>Disabled</Button>
        <div>
          <code>
            {`<Button type="primary">Regular</Button>`}
          </code>
        </div>

        <h3>Default</h3>
        <Button>Default</Button> <Button type="primary" disabled={true}>Disabled</Button>
        <div>
          <code>
            {`<Button>Default</Button>`}
          </code>
        </div>

        <h3>Contextual Buttons</h3>
        <p>
          There may be cases where providing a contextual button will reinforce what the user is about to do.<br/>
          This approach however should be used both carefully and sparingly.
        </p>
        <Button type="danger">Danger</Button>
        <div>
          <code>
            {`<Button type="danger">Danger</Button>`}
          </code>
        </div>

        <Divider/>

        <h2>form fields</h2>

        <h3>text input</h3>

        <Row>
          <Col span={11}>
            <Input type="text" placeholder="Placeholder"/>
            <p>Default (empty)</p>
            <p>
              <code>{`<Input type="text" placeholder="Placeholder"/>`}</code>
            </p>
          </Col>
          <Col span={11} offset={2}>
            <Input type="text" defaultValue="Entered Text"/>
            <p>Default (Filled)</p>
            <p>
              <code>{`<Input type="text" value="Entered Text"/>`}</code>
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <Input type="text" defaultValue="Edited, but unsaved field" unsaved={true}/>
            <p>Input revisited from another tab</p>
          </Col>
        </Row>
        <div>
          <code>{`<Input type="text" value="Edited, but unsaved field" unsaved={true}/>`}</code>
        </div>

        <h3>text input</h3>

        <Row>
          <Col span={11}>

            <Form.Item label="Input Label">
              <Input type="text" placeholder="Input"/>
            </Form.Item>

            <p>
              <code>{`<Input type="text" placeholder="Placeholder"/>`}</code>
            </p>
          </Col>

          <Col span={11} offset={2}>

            <Form.Item label="Input Label" validateStatus="error" help="Validation error text helper">
              <Input type="text" placeholder="Input"/>
            </Form.Item>

            <p>
              <code>{`<Input type="text" value="Entered Text"/>`}</code>
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <Form.Item label="Input Group">
              <Input.Group compact>
                <Input style={{width: 'calc(100% - 50px)'}} type="text" placeholder="Placeholder" />
                <Button style={{width: '50px'}} type="primary" icon="copy"/>
              </Input.Group>
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>

          </Col>
        </Row>

        <h3>Select input</h3>

        <Row>
          <Col span={11}>
            <Select placeholder="Select option" style={{width: '100%'}}>
              <Select.Option value={'Option #1'}>Option #1</Select.Option>
              <Select.Option value={'Option #2'}>Option #2</Select.Option>
              <Select.Option disabled value={'Option #3'}>Option #3</Select.Option>
              <Select.Option value={'Option #4'}>Option #4</Select.Option>
            </Select>
          </Col>
          <Col span={11} offset={2}>
            <Select defaultValue='Option #1' placeholder="Select currency" style={{width: '100%'}}>
              <Select.Option value={'Option #1'}>Option #1</Select.Option>
              <Select.Option value={'Option #2'}>Option #2</Select.Option>
              <Select.Option disabled value={'Option #3'}>Option #3</Select.Option>
              <Select.Option value={'Option #4'}>Option #4</Select.Option>
            </Select>
          </Col>
        </Row>

        <h3>Select & typeahead</h3>

        <Row>
          <Col span={11}>
            <Select placeholder={"Select asset"} showSearch optionFilterProp="children"  style={{width: '100%'}} filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              <Select.Option value={'Bitshares'}>Bitshares</Select.Option>
              <Select.Option value={'Bitcoin'}>Bitcoin</Select.Option>
              <Select.Option disabled value={'BitGold'}>BitGold</Select.Option>
              <Select.Option value={'Bitcoin Cash'}>Bitcoin Cash</Select.Option>
            </Select>
          </Col>
          <Col span={11} offset={2}>
            <Select defaultValue={"Bitshares"} showSearch optionFilterProp="children"  style={{width: '100%'}} filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              <Select.Option value={'Bitshares'}>Bitshares</Select.Option>
              <Select.Option value={'Bitcoin'}>Bitcoin</Select.Option>
              <Select.Option disabled value={'BitGold'}>BitGold</Select.Option>
              <Select.Option value={'Bitcoin Cash'}>Bitcoin Cash</Select.Option>
            </Select>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <h3>Upload by click</h3>
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Upload
              </Button>
            </Upload>
          </Col>
          <Col span={11} offset={2}>
            <h3>Upload drag & drop</h3>
            <Upload.Dragger {...props2}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Allowed files include .png, .jpg, .pdf</p>
            </Upload.Dragger>
          </Col>
        </Row>

        <h3>checkbox & radio buttons</h3>

        <Row>
          <Col span={11}>
            <Form.Item label="Which do you invest in?">
              <Checkbox>Bitshares</Checkbox>
              <Checkbox>Bitcoin</Checkbox>
              <Checkbox>Bitcoin Cash</Checkbox>
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label="Choose your favourite">
              <Radio.Group>
                <Radio value={'bitshares'}>Bitshares</Radio>
                <Radio value={'bitcoin'}>Bitcoin</Radio>
                <Radio value={'bitcoin cash'}>Bitcoin Cash</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <h3>Switches</h3>

        <Row>
          <Col span={2}>
            <Form.Item label="Switch On">
              <Switch defaultChecked/>
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label="Switch Off">
              <Switch />
            </Form.Item>
          </Col>
        </Row>

        <Divider/>

        <h2>tables</h2>

        <h3>table with pagination</h3>

        <Table columns={tableColumns} dataSource={tableData}/>

        <h3>table without pagination</h3>

        <Table columns={tableColumns} dataSource={tableData} pagination={false}/>

        <Divider/>

        <h2>Tabs</h2>

        <Tabs defaultActiveKey={'tab1'} activeKey={this.state.activeTabKey} onChange={this.onTabChange}>
          <Tabs.TabPane tab="Tab #1" key="tab1">Content of Tab Pane 1</Tabs.TabPane>
          <Tabs.TabPane tab="Tab #2" key="tab2">Content of Tab Pane 2</Tabs.TabPane>
          <Tabs.TabPane tab="Tab #3" key="tab3">Content of Tab Pane 3</Tabs.TabPane>
        </Tabs>

        <Divider/>

        <h2>Slider</h2>

        <Row>
          <Col span={11}>
            <h3>Single Slider</h3>
            <Slider />
          </Col>
          <Col span={11} offset={2}>
            <h3>Range Slider</h3>
            <Slider range defaultValue={[20, 50]}/>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <h3>Slider Input</h3>
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
            <h3>Stepped Slider</h3>
            <Slider marks={sliderMarks}/>
          </Col>
        </Row>

        <Divider/>

        <h2>breadcrumbs</h2>

        <Breadcrumb>
          <Breadcrumb.Item><a href="javascript:void(0)">Dashboard</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="javascript:void(0)">My Account</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="javascript:void(0)">Permissions</a></Breadcrumb.Item>
          <Breadcrumb.Item>Owner Permissions</Breadcrumb.Item>
        </Breadcrumb>

        <Divider/>

        <h2>Modal</h2>

        <iframe src="#/modal/darkTheme" frameBorder={0} width={'100%'} height={'500px'} style={{border: '2px solid #33343a'}}/>

      </div>
    );
  }

}

export default Basic;
