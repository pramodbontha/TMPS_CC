export const getJournalService = (session) => {
	session.call("com.filmdatabox.democontrol.journal").then((res) => {
		return res;
	});
};
