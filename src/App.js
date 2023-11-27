import Calendar from './components/Calendar';
import moment from 'moment'
import './CSS/main.css';

function App() {
const now = moment;
return (
  <Calendar date={now} />
);
}
export default App;
