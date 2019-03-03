import React, {Component} from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let news = this.props.newsParam;
        console.log(news)
        return (
            <div>
                <div className="box box-primary" id="loading-example">

                    <div className="box-header">

                        <div className="pull-right box-tools">
                            {news.sourceNep}
                        </div>
                        <i className="fa fa-cloud"></i>

                        <h1 className="box-title"><strong>{news.title}</strong></h1>
                    </div>
                    <div className="box-body no-padding">
                        <div className="row">
                            <div className="col-sm-3"/>
                            <div className="col-sm-7">
                                {news.imageUrl.length > 0 && news.imageUrl !== "" &&
                                <div id="carousel-example-generic" className="carousel slide">
                                    <img src={news.imageUrl} alt="`+this.title +`"
                                         style={{display: 'block  ', marginLeft: 'auto', marginRight: 'auto'}}></img>
                                </div>
                                }
                                {(!news.imageUrl.length > 0) &&
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
                                <div className="knob-label"><a href={news.pageUrl}>पूरा पढ्नुहोस् </a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>);
    }
}

export default Home;


//Wework12@