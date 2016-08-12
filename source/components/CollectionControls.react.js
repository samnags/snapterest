var React = require('react');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionRenameForm = require('./CollectionRenameForm.react');
var CollectionExportForm = require('./CollectionExportForm.react');



// compononts passed in from Collection
  // numberOfTweetsInCollection={numberOfTweetsInCollection}
  // htmlMarkup={htmlMarkup}
  // onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}

var CollectionControls = React.createClass({

  // if the name changes, we want component to rerender which is why we're making name part of the state
  getInitialState: function() {
    return {
      name: 'new',
      isEditingName: false
    };
  },

  getHeaderText: function() {
    var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
    var text = numberOfTweetsInCollection

    if (numberOfTweetsInCollection === 1) {
      text = text + ' tweet in your';
    } else {
      text = text + ' tweets in your';
    }

    // setting the header text as part of getHeaderText, which is then passed down to render
    return (
      <span>
        {text}<strong>{this.state.name}</strong>
      </span>
    );
  },

  toggleEditCollectionName: function() {
    this.setState({
      isEditingName: !this.state.isEditingName
    });
  },

  setCollectionName: function(name) {
    // updates the name and then hides the form
    this.setState({
      name: name,
      isEditingName: false
    });
  },

  render: function() {
    // the CC compoent renders either a CC elements or a form to change elements
    // the decision on which to render is based on the isEditingName property
    if (this.state.isEditingName) {
      return (
        <CollectionRenameForm
          name={this.state.name}
          onChangeCollectionName={this.setCollectionName}
          onCancelCollectionNameChange={this.toggleEditCollectionName} />
      )
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />

        <Button
          label="Rename collection"
          handleClick={this.toggleEditCollectionName} />


        <Button
          label="Empty collection"
          handleClick={this.props.onRemoveAllTweetsFromCollection} />

        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    );
  }
})

module.exports = CollectionControls;
