import React from 'react';
import classes from './ProfileInfo.module.css';
import MyPosts from '../MyPosts/MyPosts';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="http://www.radionetplus.ru/uploads/posts/2013-05/thumbs/1369460629_panda-1.jpeg" />
			</div>
			<div className={classes.discriptionBlock}>
					ava + discription
			</div>
		</div>
	);
}

export default ProfileInfo;