'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails );

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	

	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	var urlString = "/project/" + idNumber;
	console.log(urlString);
	$.get(urlString, callbackEmpty); // results of the GET get passed into callbackEmpty
}

/*
 * Called from addProjectDetails
 */
function callbackEmpty(result) {
	console.log(result);
	var projectHTML = '<a href-"#" class="thumbnail">' + 
		'<img src="' + result['image'] + '" class="detailsImage">' +
		'<p>' + result['title'] + '</p>' + 
		'<p><small>' + result['date'] + '</small></p></a>' + 
		result['summary'];
	console.log(projectHTML);

	var selectorString = "#project" + result['id'] + " .details";
	$(selectorString).html(projectHTML);
	console.log(selectorString);

}

/* {id: 6, title: "Meat on the Bones", date: "February 13", summary: "<p>Functionality functionality functionality! Cont…u to complete the interaction flow this week.</p>", image: "http://regmedia.co.uk/2011/03/01/node_code.png"} */


/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
}