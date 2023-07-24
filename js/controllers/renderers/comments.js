import {render} from '../../utils/render';
import {commentTemplate} from '../elements/template';
import {commentsContainer} from '../elements/big-picture';

const createCommentNode = ({message, name, avatar}) => {
	const comment = commentTemplate.cloneNode(true);
	const commentAvatar = comment.querySelector('.social__picture');
	const commentText = comment.querySelector('.social__text');

	commentAvatar.src = avatar;
	commentAvatar.alt = name;
	commentText.textContent = message;

	return comment;
};

const renderComments = (...comments) => {
	const commentNodes = comments.map(createCommentNode);
	render(commentsContainer, ...commentNodes);
};

export {renderComments};


