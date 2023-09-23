import React from 'react';
import Layout from '@theme/Layout';

const FLAG_BASE_URL = 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@master/svg';


function ShowcaseItem({ showcase }) {
    return (
        <div className="showcaseItem">
            <div className="customerHeader">
                <h2>{showcase.customerName}</h2>
                <img className="flag" src={showcase.flagUrl} alt="" />
            </div>
            <p>{showcase.description}</p>
            <img className="thumbnail" src={`/img/showcase/${showcase.thumbnail}`} alt="Showcase thumbnail" />
            <p><a href={showcase.link} target="_blank" rel="noopener noreferrer">View Form</a></p>
        </div>
    );
}

export default function Showcase() {
    return (
        <Layout title="Showcase" description="Showcase of our users' websites">
            <div className="showcaseIntro">
                <h1 className="showcaseHeading">Stocks</h1>
                <p className="showcaseDescription">
                </p>
                <a className="addYourSite" href="https://docs.google.com/forms/d/e/1FAIpQLSf6jFDWzMgZRFgWWy0X569y0Bz3Fcu2G62FYVgaiMHe5m9e3A/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                    Stocks
                </a>
            </div>
        </Layout>
    );
}
