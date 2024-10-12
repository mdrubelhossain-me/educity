import React from 'react';
import './Program.css'
import './ProgramResponsive.css'
import program_1 from '../../assets/images/program-1.png'
import program_2 from '../../assets/images/program-2.png'
import program_3 from '../../assets/images/program-3.png'
import p_icon_1 from '../../assets/images/program-icon-1.png'
import p_icon_2 from '../../assets/images/program-icon-2.png'
import p_icon_3 from '../../assets/images/program-icon-3.png'

const Program = () => {
    return (
        <div className='programs container'>
            <div className="program">
                <img src={program_1} alt="" />
                <div className="p-caption">
                    <img src={p_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program_2} alt="" />
                <div className="p-caption">
                    <img src={p_icon_2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program_3} alt="" />
                <div className="p-caption">
                    <img src={p_icon_3} alt="" />
                    <p>Post Graduation Degree</p>
                </div>
            </div>
        </div>
    );
};

export default Program;