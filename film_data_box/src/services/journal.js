export const getJournalService = async (session) => {
	return session.call("com.filmdatabox.democontrol.journal");
};
