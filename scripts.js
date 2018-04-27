// Upload font section
/*
var inputElement = document.getElementById('input')
inputElement.addEventListener('change', handleFiles, false)
function handleFiles() {
	var fileList = this.files 
	console.log(fileList)
	link = document.createElement('link')
	link.href = fileList[0].name
	link.rel = fileList[0].type

	var sheet = window.document.styleSheets[0]
	sheet.insertRule(
		`@font-face { font-family: ${link.href}; src: url(${link.href}) format(${
			link.rel
		});}`
	)
}
*/

// Change CSS Section

var headline = document.getElementById('headline')
var headlineInputFontSize = document.getElementById('headlineInputFontSize')
var headlineInputLineHeight = document.getElementById('headlineInputLineHeight')
var headlineInputLetterSpacing = document.getElementById(
	'headlineInputLetterSpacing'
)
var body = document.getElementById('body')
var bodyInputFontSize = document.getElementById('bodyInputFontSize')
var bodyInputLineHeight = document.getElementById('bodyInputLineHeight')
var bodyInputLetterSpacing = document.getElementById('bodyInputLetterSpacing')

var container = document.getElementById('container')
var containerInputMaxWidth = document.getElementById('containerInputMaxWidth')

function setHeaderFormValue(input, attr) {
	headlineValue = window.getComputedStyle(headline, null).getPropertyValue(attr)
	input.value = headlineValue
}

function setBodyFormValue(input, attr) {
	bodyValue = window.getComputedStyle(body, null).getPropertyValue(attr)
	input.value = bodyValue
}

function setContainerFormValue(input, attr) {
	containerValue = window
		.getComputedStyle(container, null)
		.getPropertyValue(attr)
	input.value = containerValue
}

function populateForms() {
	// Populate headline form value with current font values
	setHeaderFormValue(headlineInputFontSize, 'font-size')
	setHeaderFormValue(headlineInputLineHeight, 'line-height')
	setHeaderFormValue(headlineInputLetterSpacing, 'letter-spacing')
	setBodyFormValue(bodyInputFontSize, 'font-size')
	setBodyFormValue(bodyInputLineHeight, 'line-height')
	setBodyFormValue(bodyInputLetterSpacing, 'letter-spacing')
	setContainerFormValue(containerInputMaxWidth, 'max-width')
}

function updateHeader() {
	headline.style.fontSize = headlineInputFontSize.value
	headline.style.lineHeight = headlineInputLineHeight.value
	headline.style.letterSpacing = headlineInputLetterSpacing.value
}

function updateBody() {
	body.style.fontSize = bodyInputFontSize.value
	body.style.lineHeight = bodyInputLineHeight.value
	body.style.letterSpacing = bodyInputLetterSpacing.value
}

function updateContainer() {
	container.style.maxWidth = containerInputMaxWidth.value
}

window.onload = populateForms()
