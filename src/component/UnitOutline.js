import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const UnitOutline = () => {
    return(<>
        <Typography sx={{fontWeight: 700, fontSize: '20px'}}>Unit Outline</Typography>
        <hr className='BottomBorderLine' />
        <Typography sx={{marginBottom: 2}}>Unit outlines will be available 2 weeks before the first day of teaching for the relevant session.</Typography>
        <Accordion sx={{marginBottom: 2, backgroundColor: '#D9D9D9'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Current Year</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Insert unit outline link here
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{backgroundColor: '#D9D9D9'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Previous Years</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Insert unit outline links here
            </AccordionDetails>
        </Accordion>
        <br />
    </>)
}

export default UnitOutline;