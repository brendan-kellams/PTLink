const formatter = {
	outboxFormatter(raw, cb) {
		var recipients ="";
		for (var i=0;i<raw.length;i++) {
			for (var j=0;j<raw[i].SentCommunications.length;j++) {
				recipients+= raw[i].SentCommunications[j].User.username + ", ";
			}
			raw[i].recipients = recipients;
			recipients = "";
		}
		cb(raw);
	}

};

module.exports = formatter;	