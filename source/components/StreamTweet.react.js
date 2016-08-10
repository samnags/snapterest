var React = require('react')
var ReactDOM = require ('react-dom')
var Header = require('./Header.react')
var Tweet = require('./Tweet.react')

var StreamTweet = React.createClass({
  // first lifecycle method invoked before component is inserted into DOM
  getInitialState: function() {
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');

    return {
      numberOfCharactersIsIncreasing: null
      headerText: null
    };
  },

  // second lifecycle method invoked, immediately before component is inserted
  componentWillMount: function() {
    console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()')

    return {
      this.setState({
        numberOfCharactersIsIncreasing: true
        headerText: 'Latest public photo from Twitter'
      });
      window.snapterest = {
        numberOfReceivedTweets: 1,
        numberofDisplayedTweets: 1
      };
    }
  }

  // third lifecycle method invoked, right after component is inserted into DOM
  // because updated DOM is available, this is when you initialize other JS libraries
  componentDidMount: function() {
    console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()')

    var componentDOMRepresentation = ReactDOM.findDOMNode(this);
    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
  }

  componentWillUnmount: function() {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()')
    delete window.snapterest;
  }

  render: function() {
    console.log('[Snapterest] StreamTweet: Running render()');

    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.props.onAddTweetToCollection}
        />
      </section>
    );
  }
})

module.exports = StreamTweet;
