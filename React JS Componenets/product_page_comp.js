import React from 'react';
import '../css/product_page_comp.css';
import SearchBarComp from './search_bar_comp.js';
import LogoComp from './logo_comp.js';
import LoginSignUpcartComp from './login_signup_cart_comp.js';
import CarouselHomeComp from './carousel_home_comp.js';
import MembershipCardComp from './membership_card_comp.js';
import Accordion from './accordion.js';
import DetailCardComp from './detail_card_comp.js';
import RatingCardComp from './rating_card_comp.js';
import BasicDetailCardComp from './basic_detail_card.js';
import FacilityAvailableComp from './facility_available_comp.js';
import TimingCardComp from './timing_card_comp.js';

export default class ProductPageComp extends React.Component{
    constructor(props){
        super(props);
    }
    

    render()
    {
    
    var fitnessOption = ['Gyms','Yoga','Zumba','Dance','Aerobics','Cross Functional', 'Fitness Studios',
    'Martial Arts','Wellness Centers','Nutritionist/Dietician','Physiotherapy','Sauna and Spa'];

    var locationArray = ['Beltola', 'Panbazaar', 'Dispur', 'Hengrabari', 'Ganeshguri','Lalganesh', 'Adabari','NoonMati',
    'Azara'];


        return(
            <div className="product-page-main-container">
                <div className="product-page-header">
                    <LogoComp height={80} width={100} fill="#272636" 
                    className="#" />
                    <SearchBarComp serviceList={this.props.serviceOffered} 
                    locationList={this.props.locationOffered} />
                    <div className="product-page-login-cart">
                        <LoginSignUpcartComp />
                    </div>
                </div>


                <div className="product-page-carousel-membership-card">
                    <div className="product-page-carousel">
                        <CarouselHomeComp imageLink={this.props.imageUrl}
                        width={550} height={320}/>
                    </div>

                    <div className="product-page-membership">
                        <MembershipCardComp width={300} serviceOffered={this.props.serviceOfferedByCenter}
                        detailOfServiceOffered={this.props.detailOfServiceOfferedShort}
                        name="Hello Gym"/>
                    </div>
                </div>


                <div className="product-page-gym-detail-rating">
                    <div className="product-page-gym-detail">
                        <BasicDetailCardComp title={this.props.detailOfGym[0]}
                        address={this.props.detailOfGym[1]}
                        contact={this.props.detailOfGym[2]} titleColor="#272636" addressColor="#6684a1" 
                        contactColor="#272636" 
                        width={550}/>
                    </div>

                    <div className="product-page-rating">
                        <RatingCardComp ratingArray={this.props.arrayOfRating}/>
                    </div>
                </div>

                <div className="product-page-service-details">

                    <p className="product-page-service-header">Services Offered</p>
                    <div className="product-page-service-bigger-holder">
                        <div className="product-page-service-holder">
                            <div className="product-page-service-box">
                                {
                                this.props.serviceOfferedByCenter.map((item) => 
                                <Accordion accordionButtonColor="#272636" 
                                accordionButtonTextColor="#6684a1"
                                accordionButtonTextHoverColor="#ffffff"
                                arrowColor="#6684a1"
                                transitionTime={0.8}
                                header={item}>
                                        <DetailCardComp healthBenefit={this.props.detailOfServiceOfferedLong[item]} averageCalorieBurn="5000 Cal Per Hour"
                                        resultTime="2-3 Weeks" pricing="2000" />
                                </Accordion>
                                
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="product-page-facility-available">

                    <p className="product-page-facility-available-header">Facilities Available</p>
                    <FacilityAvailableComp width={890} facilityCollection={this.props.totalFacilityAvailable}
                    facilityAvailable={this.props.facilityOfCenter}/>
                    
                </div>

                <div className="product-page-timing">
                    <p className="product-page-timing-header">Timing Hours</p>
                    <TimingCardComp timingValues={this.props.timingDetail}  width={890}/>
                </div>


            </div>
        )
    }
}

/*
<AvailableFacilityCardComp width={500} facilityAvailable={this.props.facilityOfCenter}
                    facilityCollection={this.props.totalFacilityAvailable}/>

*/