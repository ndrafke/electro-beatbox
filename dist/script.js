function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /*two banks of sound clips */
const bank1 = [
{ key: "Q", url: "https://freesound.org/data/previews/75/75845_260058-lq.mp3", clipId: "tom", id: "tom1" }, { key: "W", url: "https://freesound.org/data/previews/272/272467_2278554-lq.mp3", clipId: "ride", id: "ride1" }, { key: "E", url: "https://freesound.org/data/previews/209/209870_3797507-lq.mp3", clipId: "crash", id: "crash1" }, { key: "A", url: "https://freesound.org/data/previews/502/502951_4600366-lq.mp3", clipId: "kick", id: "kick1" }, { key: "S", url: "https://freesound.org/data/previews/103/103365_1225281-lq.mp3", clipId: "snare", id: "snare1" }, { key: "D", url: "https://freesound.org/data/previews/91/91791_1491361-lq.mp3", clipId: "open hat", id: "hat1" }, { key: "Z", url: "https://freesound.org/data/previews/346/346722_909262-lq.mp3", clipId: "cowbell", id: "cowbell1" }, { key: "X", url: "https://freesound.org/data/previews/342/342209_5876986-lq.mp3", clipId: "rim", id: "rim1" }, { key: "C", url: "https://freesound.org/data/previews/25/25689_48671-lq.mp3", clipId: "closed hat", id: "hat1a" }];

const bank2 = [
{ key: "Q", url: "https://freesound.org/data/previews/4/4354_4948-lq.mp3", clipId: "thump", id: "tom2" }, { key: "W", url: "https://freesound.org/data/previews/9/9614_4948-lq.mp3", clipId: "electro-ride", id: "ride2" }, { key: "E", url: "https://freesound.org/data/previews/319/319821_4486188-lq.mp3", clipId: "scrash", id: "crash2" }, { key: "A", url: "https://freesound.org/data/previews/25/25647_48671-lq.mp3", clipId: "stomp-kick", id: "kick2" }, { key: "S", url: "https://freesound.org/data/previews/528/528461_3797507-lq.mp3", clipId: "bonk-snare", id: "snare2" }, { key: "D", url: "https://freesound.org/data/previews/91/91683_1491361-lq.mp3", clipId: "open electro hat", id: "hat2" }, { key: "Z", url: "https://freesound.org/data/previews/98/98257_1651335-lq.mp3", clipId: "dink", id: "cowbell2" }, { key: "X", url: "https://freesound.org/data/previews/183/183108_2394245-lq.mp3", clipId: "flick", id: "rim2" }, { key: "C", url: "https://freesound.org/data/previews/25/25704_48671-lq.mp3", clipId: "closed electro hat", id: "hat2a" }];

/*child component to create the drumpad and make it interactive with mouse clicks and the keyboard */
class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeyPress",


















    item => {
      if (item.keyCode === this.props.text.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.changeDisplay(this.props.id);
        this.setState({
          backgroundColor: "hotpink" /*changes color with the keypress */ });

      }
    });_defineProperty(this, "handleKeyUp",
    item => {
      if (item.keyCode === this.props.text.charCodeAt()) {
        this.setState({
          backgroundColor: "white" /* changes the color back when keypress finished*/ });

      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.changeDisplay(this.props.id);
    });this.state = { backgroundColor: "white" /*to be changed with keypress */ };this.handleKeyPress = this.handleKeyPress.bind(this);this.handleClick = this.handleClick.bind(this);this.handleKeyUp = this.handleKeyUp.bind(this);}componentDidMount() {document.addEventListener('keydown', this.handleKeyPress);document.addEventListener('keyup', this.handleKeyUp);}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyPress);document.removeEventListener('keyup', this.handleKeyUp);}

  render() {
    const styles = {
      padStyle: { backgroundColor: this.state.backgroundColor } };

    const { padStyle } = styles;

    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", style: padStyle, id: this.props.id, onClick: this.handleClick }, /*#__PURE__*/
      React.createElement("p", null, this.props.text), /*#__PURE__*/
      React.createElement("audio", { ref: ref => this.audio = ref, className: "clip", id: this.props.text, src: this.props.src })));

  }}

//parent component
class BeatBox extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "changeDisplay",









    display => this.setState({ display }));_defineProperty(this, "handleBank",

    () => {
      this.state.bank === bank1 ?
      this.setState({
        activeBank: 'Crazy Bank',
        bank: bank2 }) :

      this.setState({
        activeBank: 'Groovy Bank',
        bank: bank1 });

    });this.state = { display: "", bank: bank1, activeBank: "Groovy Bank" };this.changeDisplay = this.changeDisplay.bind(this);this.handleBank = this.handleBank.bind(this);}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine", className: "outer-container" }, /*#__PURE__*/
      React.createElement("div", { className: "inner-container" }, /*#__PURE__*/
      React.createElement("div", { className: "left-container" }, /*#__PURE__*/
      React.createElement("div", { id: "drum-pads" },
      this.state.bank.map((x) => /*#__PURE__*/
      React.createElement(DrumPad, {
        text: x.key,
        id: x.clipId,
        src: x.url,
        changeDisplay: this.changeDisplay })))), /*#__PURE__*/




      React.createElement("div", { className: "center-container" }), /*#__PURE__*/

      React.createElement("div", { className: "right-container" }, /*#__PURE__*/
      React.createElement("div", { id: "display", className: "display" }, /*#__PURE__*/
      React.createElement("p", { style: { fontSize: "1.1rem" } }, " ", this.state.activeBank), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/
      React.createElement("p", null, this.state.display)), /*#__PURE__*/

      React.createElement("div", { className: "bank-select",
        onClick: this.handleBank }, /*#__PURE__*/
      React.createElement("p", null, "Bank"))))));





  }}

ReactDOM.render( /*#__PURE__*/React.createElement(BeatBox, null), document.getElementById("beatbox"));