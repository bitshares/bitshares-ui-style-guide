import React from 'react';
import {
  Divider,
  Color,
  IconExample
} from '../Helper/index';

import {
  Button
} from 'bitshares-ui-style-guide';

import logo from '../../assets/images/bitshares-logo.png';
import './styles.less';

class Basic extends React.Component {

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
        <Color color={'#00a9e0'} style={{marginRight: '24px'}}/>
        <Color color={'#fff'} textColor={'#000'} style={{margin: '0 24px'}}/>
        <Color color={'#2c2e37'} style={{margin: '0 24px'}}/>
        <Color color={'#191a1f'} style={{margin: '0 24px', borderWidth: '1px'}}/>
        <h3>helper colours</h3>
        <Color color={'#39b54a'} style={{marginRight: '24px'}}/>
        <Color color={'#e6001f'} style={{margin: '0 24px'}}/>
        <h3>accent colours</h3>
        <Color color={'#bababa'} style={{marginRight: '24px'}}/>
        <Color color={'#656565'} style={{margin: '0 24px'}}/>
        <Color color={'#38393f'} style={{margin: '0 24px'}}/>
        <Color color={'#121212'} style={{margin: '0 24px', borderWidth: '1px'}}/>
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

      </div>
    );
  }

}

export default Basic;
