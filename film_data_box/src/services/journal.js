var autobahn = require("autobahn");
var connection = new autobahn.Connection({
	url: "ws://testassignment.filmdatabox.com:8249/ws",
	realm: "democontrol",
});

export const getJournalService = async () => {
	var journalData = [];
	// connection.open();
	connection.onopen = (session) => {
		session.call("com.filmdatabox.democontrol.journal").then(async (res) => {
			journalData = res;
			console.log(res);
		});
	};
	console.log(journalData);
	return journalData;
};
