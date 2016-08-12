var React = require('react');
var Stream = require('./Stream.react')
var Collection = require('./Collection.react')

var Application = React.createClass({

  getInitialState: function() {
    return {
      collectionTweets: {}
    };
  },

  addTweetToCollection: function(tweet) {
    var collectionTweets = this.state.collectionTweets;
    
    collectionTweets[tweet.id] = tweet;

    // setState is a React function. Takes in argument of what you want to change about state
    this.setState({
      collectionTweets: collectionTweets
    });
  },

  removeAllTweetsFromCollection: function() {
    this.setState({
      collectionTweets: {}
    });
  },

  removeTweetFromCollection: function(tweet) {
    var collectionTweets = this.state.collectionTweets;

    delete collectionTweets[tweet.id];

    this.setState({
      collectionTweets: collectionTweets
    });
  },

  render: function() {
    // parent passing a callback function as property to child components
    // this is how Stream can update application's state
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream onAddTweetToCollection = {this.addTweetToCollection} />
          </div>

        <div className="col-md-8">
          <Collection
            tweets={this.state.collectionTweets}
            onRemoveTweeetFromCollection={this.removeTweetFromCollection}
            onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Application;
