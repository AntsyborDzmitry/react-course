import Loadable from 'react-loadable';
import Loading from './components/common/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: "app" */'./app'),
  loading: Loading,
});
