<h1 align="center">
	<img alt="Logo" src="client/public/favicon.ico" width="32px" />
  AsteroidTrivia
</h1>

<h3 align="center">
</h3>

<p align="center"></p>

<div>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/stelianok/codedamn-hackathon-project">
  <div id="banner">
    <div>
      <img alt="Repository size" src="https://img.shields.io/github/repo-size/stelianok/codedamn-hackathon-project">
    </div>
    <div>
      <a href="https://github.com/stelianok/codedamn-hackathon-project/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/stelianok/codedamn-hackathon-project">
    </div>
    <div>
      <a href="https://github.com/stelianok/codedamn-hackathon-project/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/stelianok/codedamn-hackathon-project">
  </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/kszinhu/">
        <img alt="Made by" src="https://img.shields.io/badge/made%20by-Cassiano%20Rodrigues-gree">
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/kaua-steliano/">
        <img alt="Made by" src="https://img.shields.io/badge/made%20by-Kauã%20Steliano-gree">
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/vinicius-fiedler">
        <img alt="Made by" src="https://img.shields.io/badge/made%20by-Vinicius%20Fiedler-gree">
      </a>
    </div>
    </div>
  <div>
  <img alt="GitHub" src="https://img.shields.io/github/license/stelianok/codedamn-hackathon-project">
  </div>
</div>


<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

-  [Hackathon of Codedamn](https://codedamn.com/hackfest)
<p> We used Nasa’s API Asteroids – NeoWs (Near-Earth Object Web Service) to get reliable data about asteroids including their id, name, diameter, speed, last approach, and if it is hazardous.</p>

<p>
The main technologies that we have used to create our web app were React.js, with some helpful libraries such as styled-components, to better organize our CSS code and application as a whole,  font-awesome to get pretty icons. </p>

<p>
We have also used Axios, a promise-based HTTP client, to better organize our API calls and avoid code duplication. allowing us to communicate with APIs easily in our React apps 
</p>

<p>
Asteroid Trivia has a clean design and a straightforward proposition: show information about asteroids but in a remarkably interesting way. But just showing large numbers does not make us aware of the magnitude of those space objects. For this reason, we decided to compare their data with animals' data.  For example, we show approximately how many aligned blue whales would be necessary to achieve the average asteroid’s diameter. 

</p>



## 🚀 Technologies

Technologies that We've used to develop this web client
- [NASA API](https://api.nasa.gov/)
- [ReactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
- [Vite](https://github.com/vitejs/vite)

## 💻 Getting started

### Requirements


<br/>

**Configure .env**

You need to create a .env file in the root of the project with the same structure from the .env.example

And Fill it with you [nasa api key](https://api.nasa.gov/), and  the BaseURL.


**Clone the project and access the folder**

```bash
$ git clone https://github.com/stelianok/codedamn-hackathon-project.git && cd codedamn-hackathon-project
```



**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn dev
```
## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork stelianok/codedamn-hackathon-project
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd codedamn-hackathon-project

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by 👋 &nbsp;[Cassiano Rodrigues](https://github.com/kszinhu), [Kauã Steliano](https://github.com/stelianok) and [Vinicius Fiedler](https://github.com/viniFiedler)