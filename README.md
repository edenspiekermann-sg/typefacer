# Typefacer

A small tool for testing web typography. [See the demo here.](http://typefacer.netlify.com/)

![Screenshot of Typefacer](./screenshot.png)

## Usage

1. Run `git clone https://github.com/tyhopp/typefacer` from your terminal to download these files. 
2. Run `cd typefacer` to navigate into the project repository.
3. When inside the project directory, setup your local server. I recommend [MDN's suggested approach](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server). To do this:
	- Run `python -V` to find out what Python version you have. If you don't have Python, [download it here](https://www.python.org/downloads/).
	- If you have Python version 2+, run `python -m SimpleHTTPServer`. 
	- If you have Python version 3+, run `python -m http.server`.
4. Open your browser and type `localhost:8000` in your address bar. You should be live!

## Changing fonts

To change fonts, add your font files to the project directory and link to them in the code. CSS-Tricks has [a great guide](https://css-tricks.com/snippets/css/using-font-face/) on how to do this. 

## Notes

This project was built using [Site Starter](https://github.com/tyhopp/site-starter). 
