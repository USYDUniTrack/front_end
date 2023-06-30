import React from "react";
import { BsFillCalendarEventFill, BsFillCalendar2Fill } from 'react-icons/bs';
import { AiFillRead } from 'react-icons/ai';


const NavigationBar = () => {
    return (<>
        <div className="NavigationBarWrapper">
            <div className="NavigationBarDetails">
                <span className="name">John Doe</span>
                <span className="email">jdoe1234@uni.sydney.edu.au</span>
            </div>
            <div className="NavigationBarMenuItems">
                <div className="NavigationBarMenu">
                    <div className="NavigationBarMenuIcon">
                        <BsFillCalendarEventFill size={27} />
                    </div>
                    <div className="NavigationBarMenuContent">
                        My Timetable
                    </div>
                </div>
                <div className="NavigationBarMenu">
                    <div className="NavigationBarMenuIcon">
                        <BsFillCalendar2Fill size={27} />
                    </div>
                    <div className="NavigationBarMenuContent">
                        Degree Plan
                    </div>
                </div>
                <hr className="BottomBorderLine bgColorCardHr cardHrGap widthCardHR"/>
                <div className="NavigationBarMenu">
                    <div className="NavigationBarMenuIcon">
                        <AiFillRead size={35} />
                    </div>
                    <div className="NavigationBarMenuContent">
                        Units
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default NavigationBar;