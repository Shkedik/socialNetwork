import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
	let dialogsData = [
		{id: 1, name: 'Anna'},
		{id: 2,	name: 'Victor'},
		{id: 3,	name: 'Andrey'},
		{id: 4,	name: 'Alexandra'},
		{id: 5,	name: 'Pavel'},
		{id: 6,	name: 'Seva'},
		{id: 7,	name: 'Valera'}
	];

	let messagesData = [
		{id: 1, message: 'Hi'},
		{id: 2,	message: 'How are you?'},
		{id: 3,	message: 'Kamasutra'},
		{id: 4,	message: 'Yo'},
		{id: 5,	message: 'Yo'}
	];

	let dialogsElements = dialogsData
		.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
	let messagesElements = messagesData
		.map(message => <Message message={message.message}/>);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>  
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				{messagesElements}
			</div>	
		</div>
	)
}

export default Dialogs;