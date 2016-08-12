var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');

var inputStyle = {
  marginRight: '5px'
}


// props
  // name={this.state.name}
  // onChangeCollectionName={this.setCollectionName}
// onCancelCollectionNameChange={this.toggleEditCollectionName} />

var CollectionRenameForm = React.createClass({

  getInitialState: function() {
    return {
      // inputValue when CollectionRenameForm is MOUNTED
      inputValue: this.props.name
    };
  },

  setInputValue: function(inputValue) {
    this.setState({
      // updates component's inputValue state
      // will force a re-render of the the input element
      inputValue: inputValue
    });
  },


  handleInputValueChange: function(event) {
    // receives an event object
    var inputValue = event.target.value;
    // stores the value of the user input
    this.setInputValue(inputValue);
    // pass that string to the setInputValue() method
  },

  handleFormSubmit: function(event) {
    event.preventDefault();

    var collectionName = this.state.inputValue;
    // changing collectionName with callback
    this.props.onChangeCollectionName(collectionName)
  },

  handleFormCancel: function(event) {
    event.preventDefault();

    var collectionName = this.props.name
    // changing input name back to what original name was
    this.setInputValue(collectionName)
    // callback to function that will change the isEditing boolean andhide the form
    this.props.onCancelCollectionNameChange;
  },

  componentDidMount: function() {
    // CollectionRenameForm successfully mounted then we want to shift focus to the form
    // because we referred to the ref in our render function, we can use it here
    this.refs.collectionName.focus();
  },

  render: function() {
    // THIS HANDLE SUBMIT SEEMS OFF. NO FUNCTION, NONE PASSED IN
    // ref allows you to reference a component from outside of the render method
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <Header text="Collection name:"/>
          <div className="form-group">
            <input
              className="form-control"
              style={inputStyle}
              onChange={this.handleInputValueChange}
              value={this.state.inputValue}
              ref="collectionName" />
            </div>

          <Button label="Change" handleClick={this.handleFormSubmit} />
          <Button label="Cancel" handleClick={this.handleFormCancel} />
        </form>
    );
  }
});

module.exports = CollectionRenameForm;
