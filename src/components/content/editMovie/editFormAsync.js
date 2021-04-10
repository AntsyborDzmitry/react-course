import Loadable from 'react-loadable';
import Loading from '../../common/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: "editForm" */'./editForm'),
  loading: Loading,
});
