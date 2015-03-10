// BEGIN BIOGRAPHY OBJECT

var bio = {
	"name" : "Tony Stark",
	"role" : "CEO",
	"contacts" : {
		"mobile" : "<a href='tel:8005555555'>800.555.5555</a>",
		"email" : "<a href='mailto:tony@starkindustries.com'>tony@starkindustries.com</a>",
		"github" : "<a href='https://github.com/ironman'>ironman</a>",
		"twitter" : "<a href='https://twitter.com/iron_man'>iron_man</a>",
		"location" : "<a href='http://maps.google.com/maps?q=200 Park Avenue, New York, NY, US'>200 Park Avenue, New York, NY, US</a>"
	},
	"aboutme" : "http://marvel.com/ironmantech",
	"welcomeMessage": "I don't like to be handed things",
	"skills" : ["genius", "billionaire", "playboy", "philanthropist"],
	"languages" : ["English", "Spanish", "Italian", "Dari"],
	"bioPic" : "http://img2.wikia.nocookie.net/__cb20120418014346/powerlisting/images/e/e5/Tony_Stark_Business.jpg"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var bioPic = bio.bioPic;
	var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
	$("#header").append(formattedBioPic);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var welcomeMessage = bio.welcomeMessage;
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var i in bio.skills) { /* loop thru skills array, display them all */
			formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		};
	};

	if(bio.languages.length > 0) {
		$("#header").append(HTMLlanguagesStart);

		for (var i in bio.languages) { /* loop thru languages array, display them all */
			formattedLanguage = HTMLlanguages.replace("%data%", bio.languages[i]);
			$("#languages").append(formattedLanguage);
		};
	};
};

// BEGIN EDUCATION OBJECT

var education = {
	"schools": [
		{
			"name": "Massachusetts Institute of Technology",
			"location": "Cambridge, MA, US",
			"degree": "Bachelor of Science",
			"major": ["Electrical Engineering"],
			"dates": "1988-1990",
			"url" : "http://web.mit.edu/"
		},
		{
			"name": "Massachusetts Institute of Technology",
			"location": "Cambridge, MA, US",
			"degree": "Masters of Science",
			"major": ["Electrical Engineering", "Physics"],
			"dates": "1990-1992",
			"url" : "http://web.mit.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Introduction to Robotics",
			"school" : "Stanford University",
			"date" : "2003",
			"url" : "http://see.stanford.edu/see/courseinfo.aspx?coll=86cc8662-f6e4-43c3-a1be-b30d1d179743"
		},
		{
			"title" : "Introduction to Contemporary Art: 1980 to Present",
			"school" : "Sotheby's Institute of Art",
			"date" : "2007",
			"url" : "http://www.sothebysinstitute.com/Programmes/POnlineCourses/PO_Intro_to_Contemporary_Art_Wi_2015.aspx"
		}
	]
};

education.display = function() {
	for (school in education.schools) {
	// create new div for education experience
	$("#education").append(HTMLschoolStart);
	// concat school and degree
	var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
	formattedSchool = formattedSchool.replace("#", education.schools[school].url);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedSchoolDegree = formattedSchool + formattedDegree;
	$(".education-entry:last").append(formattedSchoolDegree);

	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);

	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedLocation);

	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedMajor);
	};

	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
	// concat course and school
	var formattedOnlineCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	formattedOnlineCourse = formattedOnlineCourse.replace("#", education.onlineCourses[course].url);
	var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	var formattedCourseSchool = formattedOnlineCourse + formattedSchool;
	$(".education-entry:last").append(formattedCourseSchool);

	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
	$(".education-entry:last").append(formattedDates);
	};
};

// BEGIN WORK OBJECT

var work = {
	"jobs": [
		{
			"employer": "Stark Industries",
			"title": "Project Lead, Miniature Arc Reactor Initiative",
			"location": "New York, NY, US",
			"dates": "1992-1995",
			"description": "Developed and engineered miniature fusion reactor.",
			"url" : "http://marvel.wikia.com/Stark_Industries_%28Earth-616%29" /* added URL sections because that's how Tony rolls */
		},
		{
			"employer": "Stark Industries",
			"title": "CEO",
			"location": "New York, NY, US",
			"dates": "1992-2010",
			"description": "Military contracting, leading producer of smart weapons and satellite technology.",
			"url" : "http://marvel.wikia.com/Stark_Industries_%28Earth-616%29"
		},
		{
			"employer": "Volunteer",
			"title": "Ironman",
			"location": "Malibu, CA, US",
			"dates": "2008-Present",
			"description": "Global nuclear deterrent!",
			"url" : "http://marvel.com/characters/29/iron_man"
		},
		{
			"employer": "S.H.I.E.L.D.",
			"title": "Adviser",
			"location": "New York, NY, US",
			"dates": "2010-Present",
			"description": "Strategic Homeland Intervention, Enforcement and Logistics Division - an espionage and law-enforcement agency that deals with paranormal and superhuman threats.",
			"url" : "http://shieldsite.net/"
		}
	]
};

work.display = function() {
	for (job in work.jobs) {
	// create new div for work experience
	$("#workExperience").append(HTMLworkStart);
	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	};
};

// BEGIN PROJECTS OBJECT

var projects = {
	"projects": [
		{
			"title": "Project Lead, Arc Reactor Initiative",
			"dates": "1992-1995",
			"description": "Developed and engineered fusion reactor as proof of concept - currently running at Stark Industries.",
			"images" : ["images/Stark Industries Arc Reactor.jpg"] /* hotlinks: http://www.extremetech.com/wp-content/uploads/2014/11/dynomak-31-640x465.jpg */
		},
		{
			"title": "Project Lead & Designer, Miniature Arc Reactor Initiative",
			"dates": "2008",
			"description": "While in captivity, developed and engineered miniaturized version of the arc reactor.",
			"images" : ["images/arc_reactor_blueprints_by_fongsaunder-d4tttee.jpg"] /* hotlinks: http://vignette1.wikia.nocookie.net/marvelmovies/images/8/8c/Arc_reactor_blueprints_by_fongsaunder-d4tttee.jpg */
		},
		{
			"title": "Project Lead & Designer, Iron Man Suits",
			"dates": "2008-Present",
			"description": "Various armored suit versions developed. Mark I through Mark VII in production. Mark VIII is in development and is classified.",
			"images" : ["images/The Armoury - suit progression.png"] /* hotlinks: http://25.media.tumblr.com/109e0375097b95890c2366a244e46c51/tumblr_mk57icxiJo1r6mt8go1_1280.png */
		},
		{
			"title": "32 Ford Flathead Roadster",
			"dates": "2008",
			"description": "Just a little something to pass the time... plus, chicks dig cars!",
			"images" : ["images/32 Ford Flathead Roadster.jpg"] /* hotlinks: http://s1.paultan.org/image/2013/04/ford-flathead.jpg */
		},
		{
			"title": "Stark Expo",
			"dates": "2010",
			"description": "Better Living Through Technology",
			"images" : ["images/expo1.jpg", "images/expo4.jpg"] /* hotlinks: http://www.starkexpo2010.com/images/gallery/expo1.jpg, http://www.starkexpo2010.com/images/gallery/expo4.jpg */
		}
	]
};

projects.display = function() {
	for (project in projects.projects) {
		// create new div for work experience
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				formattedProjectImage = formattedProjectImage.replace("#", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage); // append title, dates, description and images to project-entry:last which grabs the last one every time thru this list
			}
		}
	};
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

// COLLECTING CLICK LOCATIONS

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
	}
)

// END COLLECTING CLICK LOCATIONS