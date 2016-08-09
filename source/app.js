var React = require('react');
var ReactDOM = require('react-dom')
var Application = require('./components/Application.react')



ReactDOM.render(
  <Application  />,
  document.getElementById('react-application')
)


// var MessageComponent = React.createClass({
//   onClickityClick() {
//     alert("Bonjour friend")
//   },
//
//   render() {
//     return (
//       <div>
//         <button className="btn btn" onClick={this.onClickityClick}>Click Me. You know you want to</button>
//       </div>
//     )
//   }
// })


// var MyForm = React.createClass({
//   getInitialState: function() {
//     return {value: 'Hello!'};
//   },
//
//   handleChange: function(event) {
//     this.setState({value: event.target.value});
//   },
//
//   render: function() {
//     return (
//       <input
//         type="text"
//         value={this.state.value}
//         onChange={this.handleChange}
//       />
//     );
//   }
//
// })
//
// var MyComponent = React.createElement(MyForm);
