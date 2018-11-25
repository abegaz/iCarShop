// Initialize Firebase
const config = {
    apiKey: "AIzaSyC-CueGsWM2HxGmahgFy9An53mpY2mjzpU",
    authDomain: "fir-4ada0.firebaseapp.com",
    databaseURL: "https://fir-4ada0.firebaseio.com",
    storageBucket: "fir-4ada0.appspot.com",
    messagingSenderId: "472126861593"
  }
  
  firebase.initializeApp(config)
  const storage = firebase.storage().ref()
  
  class HelloMessage extends React.Component {
    constructor () {
      super()
      this.state = {
        lithuania: '',
        uk: ''
      }
      
      this.getImage('lithuania')
      this.getImage('uk')
    }
    
    getImage (image) {
      let { state } = this
      storage.child(`${image}.png`).getDownloadURL().then((url) => {
        state[image] = url
        this.setState(state)
      }).catch((error) => {
        // Handle any errors
      })
    }
  
    render() {
      return (
        <div>
          Hello Lithuania<br />
          <img src={ this.state.lithuania } alt="Lithuanian flag" />
          <br />
          Hello United Kingdom<br />
          <img src={ this.state.uk } alt="UK flag" />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Jane" />,
    document.getElementById('app')
  )