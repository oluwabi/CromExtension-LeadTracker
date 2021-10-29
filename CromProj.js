

/* using more advance way of writing the function*/

let myLeads = []

/* using const makes the variable not to be reassigned also getting values from input*/

// 1. Turn the myLeads string into an array
/*myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)*/


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

const tabBtn = document.getElementById("tab-btn")

console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console

tabBtn.addEventListener("click", function(){

	// how to connect our save button to the current url    

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

    	// Save the url instead of logging it out
    	// console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
	let listItems = ""
	for (let i = 0; i < leads.length; i++) {

	/* to list out in list in myleads and also make the list clickable to browse in another tab*/

		//listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

		// just another way of writing this 👆

		listItems += `
			<li>
				<a target='_blank' href='${leads[i]}'> 
					${leads[i]}
				</a>
			</li>
		`

	// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

	/* another way of doing this is this 👆*/

	// const li = document.createElement("li")
	// li.textContent = myLeads[i]
	// ulEl.append(li)
	}
	ulEl.innerHTML = listItems
}

 // to double click on a button and clear localstorage, myleads and the DOM

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear() // clear localstorage
    myLeads = [] // clear myLeads
    render(myLeads) // clear DOM
})

inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value)
	// console.log("myLeads")

	// clearing out input values

	inputEl.value = ""

	// Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )

	render(myLeads)
})

//one solution like that
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)


// another solution to images
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()

// learn about forms
https://www.w3schools.com/tags/tag_form.asp