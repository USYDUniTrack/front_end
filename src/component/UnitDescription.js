import React from 'react';

const UnitDescription = () => {
    return (<>
        <div className='UnitDescriptionWrapper'>
            <div className='UnitDescriptionHeading'>COMP2017: Systems Programming</div>
            <div className='UnitDescriptionSubHeading'>Computer Science | 6 credit points  </div>
            <div className='UnitDescriptionSemester'>Semester 1</div>
            <hr className='BottomBorderLine' />
            <p className='UnitDescriptionDesc'>
                In this unit of study, elementary methods for developing robust, efficient, and re-usable software will be covered. The unit is taught in C, in a Unix environment. Specific coding topics include memory management, the pragmatic aspects of implementing data structures such as lists and hash tables and managing concurrent threads. Debugging tools and techniques are discussed and common programming errors are considered along with defensive programming techniques to avoid such errors. Emphasis is placed on using common Unix tools to manage aspects of the software construction process, such as version control and regression testing. The subject is taught from a practical viewpoint and it includes a considerable amount of programming practice.
            </p>
            <p className='UnitDescriptionNotes'>Prohibitions: <span>COMP2129</span> or <span>COMP9017</span> or <span>COMP9129</span></p>
        </div>
    </>)
}

export default UnitDescription;