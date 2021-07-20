
function DOMtoString(document_root) {
	console.log(document);
	return document_root.outerHTML;
}

chrome.runtime.sendMessage({
	action: "getSource",
	source: DOMtoString(document)
});