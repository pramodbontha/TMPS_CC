import React, { useState, useEffect } from "react";
// import { getJournalService } from "../../services/journal.js";
import {
	Container,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";

const Journals = (props) => {
	const [jouranls, setJournals] = useState([]);
	useEffect(() => {
		const fetchJournals = async () => {
			const connection = props.connection;
			connection.onopen = (session) => {
				session
					.call("com.filmdatabox.democontrol.journal")
					.then(async (res) => {
						setJournals(res);
					});
			};
			connection.open();
		};
		fetchJournals();
	});

	return (
		<div>
			<Container>
				<TableContainer>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell key={1}>Journal</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{jouranls.map((row, index) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={index}>
										<TableCell>{row}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		</div>
	);
};

export default Journals;
