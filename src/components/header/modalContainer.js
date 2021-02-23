import { connect } from 'react-redux';
import Modal from './modal';
import { setHideModal } from '../../redux/actions/actionCreators';

const mapStateToProps = (state) => ({ visibilityState: state });

const modalContainer = connect(mapStateToProps, { setHideModal })(Modal);

export default modalContainer;
