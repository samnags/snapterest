var React = require('react')
var ReactDOM = require ('react-dom')
var Header = require('./Header.react')
var Tweet = require('./Tweet.react')

var StreamTweet = React.createClass({
  // first lifecycle method invoked before component is inserted into DOM
  getInitialState: function() {
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');

    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  },



  // second lifecycle method invoked, immediately before component is inserted
  componentWillMount: function() {
    console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()')

    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberofDisplayedTweets: 1
      };
    },


  // third lifecycle method invoked, right after component is inserted into DOM
  // because updated DOM is available, this is when you initialize other JS libraries
  componentDidMount: function() {
    console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()')

    var componentDOMRepresentation = ReactDOM.findDOMNode(this);
    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
  },



  componentWillReceiveProps: function(nextProps) {
    // first method in update stage
      console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()')

      var currentTweetLength = this.props.tweet.text.length;
      var nextTweetLength = nextProps.tweet.text.length;
      var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
      var headerText;

      // updating component state
      this.setState({
        numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
      });

      if (isNumberOfCharactersIncreasing) {
        headerText = 'Number of characters is increasing';
      } else {
        headerText = 'Latest public photo from Twitter';
      }

      // even though there are two setStates in this function, React won't re-render more than once. It optimizes where it batches the state together
      this.setState({
        headerText: headerText
      });

      window.snapterest.numberOfReceivedTweets++;
  },



  // returns a boolean value
  // a false will skip over componentWillUpdate(), render(), and componentDidUpdate()
  // Second method invoked in updating phase
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()')
    // if next tweet is longer one character, return true
    return (nextProps.tweet.text.length > 1);
  },

  componentWillUpdate: function(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
    // React will call Render() after calling this component
 },

 // called immediately after React updates the DOM
 // we can use this to interact with updated DOM or perform any post-render operations
 componentDidUpdate: function(prevProps, prevState) {
   console.log('[Snapterest] StreamTweet: 6. Running componentDidUpdate()')
   window.snapterest.numberofDisplayedTweets++;
 },


 componentWillUnmount: function() {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()')
    delete window.snapterest;
  },


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
