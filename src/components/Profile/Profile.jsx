import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div>
				<img src="http://www.radionetplus.ru/uploads/posts/2013-05/thumbs/1369460629_panda-1.jpeg" />
			</div>
			<div>
					ava + discription
			</div>
			<div>
				my posts  
					<div>
						new post
					</div>
				<div className={classes.posts}>
					<div className={classes.item}>
						post 1
					</div>
					<div className={classes.item}>
						post 2
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;