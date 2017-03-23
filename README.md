# Reactjs-percentage-circle

[![npm](https://img.shields.io/npm/v/reactjs-percentage-circle.svg?maxAge=2592000)]()
![Node Version](https://img.shields.io/node/v/reactjs-percentage-circle.svg "Node Version")
[![Build Status](https://travis-ci.org/JackPu/reactjs-percentage-circle.svg?branch=master)](https://travis-ci.org/JackPu/reactjs-percentage-circle)

<img width="360" src="http://img1.vued.vanthink.cn/vued51984c8d081502c58a7ef5c9bdda81e1.png"/>

Reactjs-percentage-circle is a component which supports you define your percent and draw the circle.And also you can use it as a progress bar.And you can show some data in a circle you want.

[React Native Version](https://github.com/JackPu/react-native-percentage-circle)


<img width="480" src="http://img1.vued.vanthink.cn/vuedc58a98ffa5a82311e9bb654c726e97e8.png"/>

*This is a screenshot of the Demo*

[Demos](http://events.jackpu.com/reactjs-percentage-circle/index.html)

### Start 

``` bash
npm i reactjs-percentage-circle --save

```

``` js

import PercentageCircle from 'reactjs-percentage-circle';

//...

render() {
  <div>
    <PercentageCircle percent={80}></PercentageCircle>
    <PercentageCircle percent={80}>
      <p>Children</p>
    </PercentageCircle>
  </div>
}

```

### Options

| Props        | Type         | Example  | Description  |
| ------------- |:-------------:| -----:|----------:|
| color     | string | '#000' | the color of border |
| bgcolor     | string | '#e3e3e3' | the background color of the circle  |
| innerColor     | string | '#fff' | the color of the inside of the circle  |
| percent      | Number      |  30 | the percent you need |
| radius | Number     |    20 | how large the circle is |
| borderWidth | Number(default 2)     |    5 | the width of  percentage progress bar |
| textStyle | Array   | {fontSize: 24, color: 'red'} | define the style of the text which in the circle |
| children | jsx   | `<Text>123</Text>` | define the children component in the circle |

### Contributions

Your contributions and suggestions are welcome 😄💐

### MIT License




