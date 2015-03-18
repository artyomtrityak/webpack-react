var React = require('react');

console.log('HEL!', React);

 var Mod = React.createClass({
  render: function() {
    return (<div>LOO</div>);
  }
});

React.render(<Mod />, document.getElementsByTagName('body')[0]);

module.exports = Mod;