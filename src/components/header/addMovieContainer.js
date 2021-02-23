import { connect } from 'react-redux';
import addMovie from './addMovie';
import { setShowModal } from '../../redux/actions/actionCreators';

const mapStateToProps = (state) => ({ visibilityState: state });
const addMovieContainer = connect(mapStateToProps, { setShowModal })(addMovie);

export default addMovieContainer;
