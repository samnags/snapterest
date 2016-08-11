var React = require('react')
var Tweet = require('./Tweet.react.js')

var listStyle = {
  padding: '0';
};

var listItemStyle = {
  display: 'inline-block',
  listStyle: 'none'
};


// components being passed in:
  // tweets
  // onRemoveTweetFromCollection


var TweetList = React.createClass({
  getListOfTweetIds: function() {
    return Object.keys(this.props.tweets);
  },


  // we want to provide an optional onClick function for when a user wants to remove tweet from collectionTweets
  // we don't want to provid eit when they're exporting the collection
  getTweetElement: function (tweetId) {
    // variable that stores tweet with an ID
    var tweet = this.props.tweets[tweetID];
    // variable that stores a passed down Remove property
    var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection
    var tweetElement;

    // if handleRemove was passed down a prop, we create one kind of tweetElement
    if (handleRemoveTweetFromCollection) {
      tweetElement = (
        <Tweet
          tweet={tweet}
          onImageClick={handleRemoveTweetFromCollection}
        />
      );
    } else {
      tweetElement = <Tweet tweet={tweet} />;
    }

  return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>
  }

  render: function() {
    // taking each individual tweet and returning a tweetElement
    // tweetElments with be an array of li's?
    var tweetElements = this.getListOfTweetIds().map(this.getTweetElement);

    return (
      <ul style={listStyle}>
        {tweetElements}
      </ul>
    )
  }
})

module.exports = TweetList;
