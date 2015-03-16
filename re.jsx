var React = require('react');

console.log('react!', React);

 var Mod = React.createClass({
  render: function() {
    return (<div>1233333233</div>);
  }
});

React.render(<Mod />, document.getElementsByTagName('body')[0]);

module.exports = Mod;