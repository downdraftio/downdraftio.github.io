const textContainer = document.querySelector(".textcontainer");

const textContent = document.querySelector(".textcontent"); 

const imageContent = document.getElementById("ad");

const textValues = ["How are you doing whenever you are reading this message?", "I hope you aren't dead that would be weird wouldn't it... 🎅🏿", "Anyway today I would like to talk about this Chick-Fil-A ad I stole of off google images!", "Now one thing you should know about me is that I like Chick-Fil-A. 🤓", "I'm no vegan so I really don't care where the chicken comes from as long as it tastes good.", "So I love a good Chick-Fil-A ad and as you can see this one is a billboard.", "Now let me talk about why this ad is amazing and how it makes you want Chick-Fil-A.", "The first thing you will notice with this ad is Chick-Fil-A's 'Eat More Chicken slogan'.", "One of the core concepts of Chick-Fil-A's brand is that they don't serve red-meat and have a chicken based menu.", "This ad reinforces this concept with the whole idea being cows grafting a billboard to tell you to eat more chicken.", "Now most people driving by probably won't care or will think of 'Ya, Chick-Fil-A'", "But a select few in traffic will actually notice the cows and think 'That's funny, you know what I want some Chick-Fil-A'.", "And hopefully they'll pull off and go to Chick-Fil-A.", "Now let me tell you how Chick-Fil-A uses design principals to achieve this!", "The first overwhelming principal you will notice is the use of white space to exemplify the slogan and Chick-Fil-A's logo.", "This is used heavily because when you’re driving you'll only be able to glance at the billboard so simplicity is key.", "Speaking of simplicity the ad also exploits the use of balance by horizontally centering the logo and text and choosing the slogan as the top part of the balance to abide by the slightly higher visual center.", "And the last major element used to make this design more appealing is contrast.", "Again, this design is all about grabbing the attention of the driver and reminding them of Chick-Fil-A.", "So when you contrast big letters on a white background, and a big bright red logo to grab your attention, you truly see how Chick-Fil-A uses contrast in this design.", "So our elements were whitespace, balance, and contrast but there's one more element that makes this ad amazing.", "And that's the combination of both a 2d printed ad and a physical object being the cow.", "This turns it from a good, albeit a regular billboard ad, to a funny attention grabbing spectacle for drivers.", "So ya, that's about it, hope you enjoyed click again to return home..."];

const imagevalues = ["howyoudoing.png", "dead.gif", "cow.jpg", "lgbtq.png", "slaughterhouse.png", "cow.jpg", "cow.jpg", "morechicken.png", "redmeat.png", "cowspropaganda.png", "distracted.png", "driver.gif", "driverpullsoff.gif", "cow.jpg", "whitespacelogo.png", "distractedglancer.png", "focalpoing.png", "contrasts.png", "chick.png", "cow.jpg", "jobs.png", "cow.jpg", "cow.jpg", "wojack.png"];

let timeout = false; 

let index = -1; 


function init() {
	$(textContainer).fadeIn(1000);

    document.addEventListener("click", () => {
        if (timeout == false) {
        timeout = true; 
        masterfade(); 
        setTimeout(()=> { textadvance(); }, 1000);
        }
	});
}

function textadvance() { 
	try {
    index++;
     
    if (index >= textValues.length) {
        location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0"); 
    }

    else {
        textContent.innerHTML = textValues[index]; 
		imageContent.style.background = "url('" + imagevalues[index]; + "');'" 
    }
	}
	catch(err) {
		alert(err);
	}
};

function masterfade() { 
    $(textContainer).fadeOut(1000);
    setTimeout(()=>{ $(textContainer).fadeIn(1000); }, 1500);
    setTimeout(()=>{ timeout = false; }, 3000);
}
			
init();

