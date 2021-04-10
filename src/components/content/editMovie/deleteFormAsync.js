import Loadable from 'react-loadable';
import Loading from '../../common/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: "deleteForm" */'./deleteForm'),
  loading: Loading,
});
