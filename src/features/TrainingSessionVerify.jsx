import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setExistingTrainingSession } from '../redux/actions/trainingSessionActions';
import api from './api';

const TrainingSessionVerify = ({ props }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		api.get('/training-session/get-session').then((res) => {
			console.log(res.data);
			if (res.data) {
				dispatch(setExistingTrainingSession(res.data));
			}
		});
	}, [dispatch]);

	return;
};

export default TrainingSessionVerify;
