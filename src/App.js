import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};


  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  handleUsernameOnChange = (event) => {
    this.setState({username: event.target.value});
  }

  handlePasswordOnChange = (event) => {
    this.setState({password: event.target.value})
  }

  loadMockDate = () => {
    let samachar = [
      {
        "pageUrl": "http://kathmandutoday.com/2019/02/368413.html",
        "title": "६४ जना इन्स्पेक्टर, डीएसपीमा बढुवा(नामसहित)",
        "source": "kathmandutoday",
        "sourceNep": "काठमान्डू टुडे",
        "publishedNepaliDate": {
          "year": 2075,
          "month": 11,
          "day": 12,
          "dayOfWeek": 0,
          "nepaliString": "१२ फागुन, २०७५",
          "dnYear": "२०७५",
          "dnMonth": "फागुन",
          "dnDay": "१२",
          "dnDayOfWeek": ""
        },
        "publishedDateBs": null,
        "publishedDateEn": null,
        "shortDescription": "काठमाण्डु, १२ फागुन – नेपाल प्रहरीका ६४ प्रहरी निरीक्षक (इन्स्पेक्टर), प्रहरी नायब उपरीक्षक (डीएसपी)मा बढुवा सिफारिस भएका छन् । बिहीबार बसेको प्रहरी प्रधान कार्यालयको बढुवा सिफारिस समितिको बैठकले उनीहरूलाई प्रहरी निरीक्षकबाट नायब उपरीक्षकमा बढुवा सिफारिस गरेको हो ।",
        "descriptionType": null,
        "imageUrl": "http://kathmandutoday.com/wp-content/uploads/2018/05/nepal-police-copy-1-768x391-280x180.jpg",
        "category": "NEWS",
        "todaysNewsItem": true,
        "language": "NEPALI"
      },
      {
        "pageUrl": "http://www.nagariknews.com/news/69664/",
        "title": "संक्रमणकालीन न्याय र अबको बाटो चरण प्रसाईं",
        "source": "nagariknews",
        "sourceNep": "नागरिक न्युज",
        "publishedNepaliDate": {
          "year": 2075,
          "month": 11,
          "day": 12,
          "dayOfWeek": 1,
          "nepaliString": "सोमवार, १२ फागुन, २०७५",
          "dnYear": "२०७५",
          "dnMonth": "फागुन",
          "dnDay": "१२",
          "dnDayOfWeek": "सोमवार"
        },
        "publishedDateBs": null,
        "publishedDateEn": null,
        "shortDescription": "",
        "descriptionType": null,
        "imageUrl": "",
        "category": "OPINION",
        "todaysNewsItem": true,
        "language": "NEPALI"
      },
      {
        "pageUrl": "https://www.kantipurdaily.com/news/2019/02/24/155097227002642806.html",
        "title": "१८ दिनमा ४१५ किमि पैदल",
        "source": "kantipurdaily",
        "sourceNep": "कान्तिपुर",
        "publishedNepaliDate": {
          "year": 2075,
          "month": 11,
          "day": 12,
          "dayOfWeek": 0,
          "nepaliString": "१२ फागुन, २०७५",
          "dnYear": "२०७५",
          "dnMonth": "फागुन",
          "dnDay": "१२",
          "dnDayOfWeek": ""
        },
        "publishedDateBs": null,
        "publishedDateEn": null,
        "shortDescription": "विभिन्न देशका भिक्षुले शान्तिका लागि ४ सय १५ किमि लामो पैदल यात्रा पूरा गरेका छन् । १८ दिन लगाएर उनीहरूले यो याक्रा शुत्रबार पूरा गरेका हुन् । थाई भिक्षु अचान दावको नेतृत्वमा विभिन्न मुलुकका ६० जना धुतांगधारी भिक्षु/भिक्षुणी र उपासक/उपासिकाले स्वयम्भू टु शाक्यमुनि शान्ति पैदल यात्रा सुरु गरेका थिए ।",
        "descriptionType": null,
        "imageUrl": "https://assets-cdn-usaa.kantipurdaily.com/uploads/source/news/kantipur/2019/miscellaneous/1-23021-1-kapilvastumanoj-photo4-2422019023723-300x0.jpg",
        "category": "NEWS",
        "todaysNewsItem": true,
        "language": "NEPALI"
      }
    ];

    return samachar;
  }


  render() {
    let newsList = this.loadMockDate();
    let newsRender = newsList.map((news,i) => {
      return <Home key={i} newsParam={news}></Home>;
    });

    return (
      <div className="App">
        {newsRender}
      </div>
    );
  }
}

export default App;



//jest enzyme testing with coverage
//Redux/Saga
//Router Browser react
//Promise
//Observables

