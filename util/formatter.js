const formatter = {
	outboxFormatter(raw, cb) {
		var recipients ="";
		for (var i=0;i<raw.length;i++) {
			for (var j=0;j<raw[i].SentCommunications.length;j++) {
				recipients+= raw[i].SentCommunications[j].User.username + ", ";
			}
			recipients = recipients.replace(/, $/, '');
			raw[i].dataValues.recipients = recipients;
			recipients = "";
		}
		cb(raw);
	},
	inboxFormatter(raw, cb) {
		let responseObj = [];
		for(let i = 0; i < raw.length; i++) {
			responseObj.push({});
			responseObj[i].id = raw[i].Communication.id;
			responseObj[i].unread = raw[i].unread;
			responseObj[i].createdAt = raw[i].createdAt;
			responseObj[i].subject = raw[i].Communication.subject;
			responseObj[i].body = raw[i].Communication.body;
			responseObj[i].senderId = raw[i].Communication.senderId;
			responseObj[i].sender = raw[i].Communication.User.username;
		}
		cb(responseObj);
	}

};

module.exports = formatter;	