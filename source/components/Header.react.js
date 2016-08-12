var React = require('react')

var headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

var Header = React.createClass({


  // this will set defaultProps in case we don't pass aything down with component
  getDefaultProps: function() {
    return {
      text: 'Default Header'
    };
  },

  // by passing in the header as props, we can reuse the Header component
  render: function () {
    return (
      <h2 style={headerStyle}>{this.props.text}</h2>
    );
  }
})

module.exports = Header;
