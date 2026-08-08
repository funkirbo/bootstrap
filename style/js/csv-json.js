function responseHandlerCsvToJson(csvText) {
	let csvLines = csvText.split("\n")
	if (csvLines.length <= 1) {
		return {rows: []}
	}
	let headers = csvLines[0].split(",")
	return csvLinesToJsonRows(csvLines.slice(1), headers);
}

function responseHandlerCsvToJsonHeaders(csvText, headers) {
	let csvLines = csvText.split("\n")
	return csvLinesToJsonRows(csvLines, headers);
}

// Convert CSV to array of objects.
// NOTE: there is no any unqoting for string and all fields become a string type even numbers
function csvLinesToJsonRows(csvLines, headers) {
	let jsonRows = []
	for (let csvLineIdx = 0; csvLineIdx < csvLines.length; csvLineIdx++) {
		let csvLine = csvLines[csvLineIdx]
		if (!csvLine) {
			continue
		}
		let fields = csvLine.split(",")
		let row = {}
		if (fields.length === 0) {
			continue
		}
		for (let headerIdx = 0; headerIdx < headers.length; headerIdx++) {
			let header = headers[headerIdx]
			if (fields.length > headerIdx) {
				row[header] = fields[headerIdx]
			}
		}
		jsonRows[csvLineIdx] = row
	}
	return {rows: jsonRows}
}
