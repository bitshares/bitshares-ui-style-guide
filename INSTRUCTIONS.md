## Style Guide usage instruction

### What is Style Guide?

Style Guide is a set of [Ant Design components](ant.design/components) styled for each 
[Bitshares UI](https://github.com/bitshares/bitshares-ui) theme. <br>
The list of supported components you can [take a look there](https://github.com/bitshares/bitshares-ui-style-guide#ant-design-v3-components-support). 
<br>
Any documentation about each of supported components can be found in [Ant Design documentation](ant.design/components). 


### Usage of Style Guide in Bitshares UI project

To use any already supported component simply import it from `bitshares-ui-style-guide` package like:

`import {Button} from ‘bitshares-ui-style-guide’`

Documentation about supported props of each component you can find on Ant Design documentation about each component. 
For e.g. all supported props or ways how to use `Button` component you can find there - [https://ant.design/components/button/](https://ant.design/components/button)

### How to add new components to style-guide?

To start to support new components please follow the next steps:
- Create new directory with component name in the path<br>`app/bitshares-ui-style-guide/NewComponent`


- Create `index.js` file inside recently created directory and put your component code inside this index file
`app/bitshares-ui-style-guide/NewComponent/index.js`


- Add export of your component `index.js` file in `app/bitshares-ui-style-guide/index.js`

### How to manage styles of style-guide components ?

Configs for all 3 themes are placed inside these files:
- `app/bitshares-ui-style-guide/styles/dark/dark-theme.less`
- `app/bitshares-ui-style-guide/styles/light/light-theme.less`
- `app/bitshares-ui-style-guide/styles/midnight/midnight-theme.less`

Custom css rules placed there:
- `app/bitshares-ui-style-guide/styles/basic/theme.less`

Config themes files contains only variables.

### PLEASE FOLLOW THE RULES TO MANAGE STYLES:

- Use variables for any values of properties. Do not put hardcoded values like: `background-color: #000`. 
- Use variables instead: `background-color: @new-component-background-color`
- Keep all 3 themes config files in SYNC. Do not apply styles only for single theme template file. All themes files should be the same. Only variable values should be different


