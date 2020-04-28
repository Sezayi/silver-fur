import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableFur = Loadable({
  loader: () => import('../components/fur'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableFur/>;
  }
}