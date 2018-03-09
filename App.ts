export default class App {

	aFieldWithText = "Some text here"

	andSomeNumbers = [1,2,3,4,5,6,7]

	input = ""

	constructor() {
		console.log("App model was created")
	}

	get aDerivedListUsingGetter() {
		return this.andSomeNumbers.map(x => x*x)
	}

	get inputIsValid() {
		return !isNaN(Number.parseFloat(this.input))
	}

	addNumber() {
		if (this.inputIsValid) {
			this.andSomeNumbers.push(Number.parseFloat(this.input))
			this.input = ""
		}
	}
}
