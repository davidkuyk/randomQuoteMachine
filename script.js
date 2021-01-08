const quotes = [
["Spread love everywhere you go. Let no one ever come to you without leaving happier.", "Mother Teresa"],
["When you reach the end of your rope, tie a knot in it and hang on.", "Franklin D. Roosevelt"],
["Always remember that you are absolutely unique. Just like everyone else.", "Margaret Mead"],
["Don't judge each day by the harvest you reap but by the seeds that you plant.", "Robert Louis Stevenson"],
["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
["Tell me and I forget. Teach me and I remember. Involve me and I learn.", "Benjamin Franklin"],
["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller"],
["It is during our darkest moments that we must focus to see the light.", "Aristotle"],
["Whoever is happy will make others happy too.", "Anne Frank"],
["Do not go where the path may lead, go instead where there is no path and leave a trail.", "Ralph Waldo Emerson"]];

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: "" };

    this.getQuote = this.getQuote.bind(this);
  }
  componentWillMount() {
    this.getQuote();
  }
  getQuote() {
    this.setState({
      randomIndex: Math.floor(Math.random() * quotes.length) });

  }
  render() {
    const quote = quotes[this.state.randomIndex];
    const tweetLink = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + "'" + quote[0] + "'%20-" + quote[1];
    return /*#__PURE__*/(
      React.createElement("div", { id: "wrapper" }, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Random Quote Machine"), /*#__PURE__*/
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, quote[0]), /*#__PURE__*/
      React.createElement("p", { id: "author" }, "- ", quote[1]), /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: tweetLink, target: "_top" }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.getQuote }, "New Quote"))));



  }}
;
ReactDOM.render( /*#__PURE__*/React.createElement(QuoteBox, null), document.getElementById('root'));