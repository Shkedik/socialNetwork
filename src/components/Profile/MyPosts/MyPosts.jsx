import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = () => {
	let postData = [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2,	message: 'It\'s my first pst', likesCount: 10},
	];

	let postsElements = postData
		.map(post => <Posts message={post.message} counter={post.likesCount}/>)

	return (
		<div className={classes.potsBlock}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button> Add post </button>
				</div>
			</div>
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	);
}

export default MyPosts;