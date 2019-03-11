import React, {Component} from 'react';


class Home extends Component {

    render() {
        let news = this.props.newsParam;
        return (
            <div>
                <div className="box box-primary" id="loading-example">

                    <div className="box-header">
                        <button onClick={() => {this.props.invokeMe("Hi From child")}}>Click Me</button>
                        <div className="pull-right box-tools">
                            {news.sourceNep}
                        </div>
                        <i className="fa fa-cloud"></i>

                        <h1 className="box-title"><strong>{news.title}</strong></h1>
                    </div>
                    <div className="box-body no-padding">
                        <div className="row">
                            <div className="col-sm-3"/>
                            <div className="col-sm-4">
                                {news.imageUrl != null && news.imageUrl.length > 0 && news.imageUrl !== "" &&
                                <div id="carousel-example-generic" className="carousel slide">
                                    <img src={news.imageUrl} alt=""
                                         style={{display: 'block  ', marginLeft: 'auto', marginRight: 'auto'}}></img>
                                </div>
                                }
                                {(news.imageUrl != null && !news.imageUrl.length > 0) &&
                                <div className="box box-solid bg-light-blue">
                                    <div className="box-body">
                                        <p>
                                            test
                                        </p>
                                    </div>
                                </div>
                                }
                                <div>
                                    <dl>
                                        <dd>
                                            {news.shortDescription}
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="col-sm-3"/>
                        </div>
                    </div>
                    <div className="box-footer">
                        <div className="row">
                            <div className="col-xs-3 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
                                <div className="knob-label">{news.publishedNepaliDate.nepaliString}</div>
                            </div>
                            <div className="col-xs-3 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
                                <div className="knob-label">{news.category}</div>
                            </div>
                            <div className="col-xs-3 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
                                <div className="knob-label">
                                    <button className="btn bg-blue btn-circle"><i className="fa fa-facebook"></i>
                                    </button>
                                    <button className="btn bg-red btn-circle"><i className="fa fa-google-plus"></i>
                                    </button>
                                    <button className="btn bg-aqua btn-circle"><i className="fa fa-twitter"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-xs-3 text-center">
                                <div className="knob-label" id="readMore"><a href={news.pageUrl}>पूरा पढ्नुहोस् </a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>);
    }

    sum = () => {

    }
}

Home.defaultProps = {
    newsParam : {
        "pageUrl": "https://hamrakura.com/news-details/57982/2019-03-07",
        "title": "आइएमई लाइफ इन्स्योरेन्स र माछापुच्छ्रे बैंक लिमिटेडबीच बैंक अस्योरेन्स सम्झौता",
        "source": "hamrakura",
        "sourceNep": "हाम्रा कुरा",
        "publishedNepaliDate": {
            "year": 2075,
            "month": 11,
            "day": 23,
            "dayOfWeek": 5,
            "nepaliString": "शुक्रवार, २३ फागुन, २०७५",
            "dnYear": "२०७५",
            "dnMonth": "फागुन",
            "dnDay": "२३",
            "dnDayOfWeek": "शुक्रवार"
        },
        "publishedDateBs": {
            "dnYear": "२०७५",
            "dnMonth": "फागुन",
            "dnDay": "२३",
            "dnDayOfWeek": "शुक्रवार",
            "dnString": "शुक्रवार, २३ फागुन, २०७५",
            "year": 2075,
            "month": 11,
            "day": 23,
            "dayOfWeek": 5
        },
        "publishedDateAd": null,
        "shortDescription": "२०७५ फाल्गुण २३ बिहिबार, काठमाडौं। आइएमई लाइफ इन्स्योरेन्स कम्पनी लिमिटेड र माछापुच्छ्रे बैंक लिमिटेड काठमाडौँबीच बैंक अस्योरेन्स सम्झौता भएको छ। उक्त बैंक अस्योरेन्स सम्झौतामा इन्स्योरेन्स कम्पनीकातर्फबाट सहायक महा प्रबन्धक आशिष सिंह र माछापुच्छ्रे बैंक लिमिटेडका तर्फबाट उप–प्रमुख कार्यकारी अधिकृत सन्तोष कोइरालाले हस्ताक्षर गरेका छन्।",
        "descriptionType": null,
        "imageUrl": "https://hamrakura.com//uploads/news/images/ime-mbl.jpg",
        "category": "ECONOMY",
        "todaysNewsItem": false,
        "language": "NEPALI"
    }
}

export default Home;


//Wework12@