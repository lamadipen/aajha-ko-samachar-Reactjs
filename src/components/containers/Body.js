import React from 'react';

const Body = (props) => {
    return (
        <div className="wrapper row-offcanvas row-offcanvas-left">
            <div className="col-xs-1"/>
            <aside className="col-xs-10">
                <section className="content">
                    <div className="row">
                        <section className="col-lg-12 connectedSortable">
                            {props.children}
                        </section>
                    </div>
                </section>
            </aside>
            <div className="col-xs-1"/>
        </div>
    )
}

export default Body;