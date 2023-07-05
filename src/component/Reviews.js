import React from "react";
import { Typography, Rating, Button, Stack, Box } from '@mui/material';
import RectangleIcon from '@mui/icons-material/Rectangle';

const Reviews = () => {
    return (<>
        <div className="ReviewsWrapper">
            <div className="Heading">Reviews</div>
            <hr className='BottomBorderLine' />
            <div className="OverallReviews">
                <Typography component="legend" sx={{fontWeight: 700, fontSize: '15px'}}>Average workload rated by students:</Typography>
                    <Rating
                        name="read-only"
                        value={5}
                        size="large"
                        sx={{color: "#DD432B"}}
                        icon={<RectangleIcon fontSize="inherit"/>}
                        readOnly
                    />
            </div>
            <Button variant="outlined" sx={{marginTop: 1, marginBottom: 1}}>Write a review</Button>
            <p></p>
            <Stack spacing={1}>
                <Box component="span" sx={{ p: 2, border: 1, borderRadius: '15px' }}>
                    <Typography component="legend" sx={{fontWeight: 700, fontSize: '15px'}}>Average workload rated by students:</Typography>
                        <Rating
                            name="read-only"
                            value={5}
                            size="large"
                            sx={{color: "#DD432B"}}
                            icon={<RectangleIcon fontSize="inherit"/>}
                            readOnly
                        />
                        <Typography>{'COMP2017 is a very rewarding unit with incredibly fun and challenging assignments. Doing the unit gives you an understanding and appreciation of programming, that I doubt other units could give. At the end of the unit you not only have a better understanding of low level programming, but a better understanding of how programming languages work.'}</Typography>
                        <Typography sx={{opacity: '50%'}}>Anonymous, S1 2023</Typography>
                </Box>

                <Box component="span" sx={{ p: 2, border: 1, borderRadius: '15px' }}>
                    <Typography component="legend" sx={{fontWeight: 700, fontSize: '15px'}}>Average workload rated by students:</Typography>
                        <Rating
                            name="read-only"
                            value={5}
                            size="large"
                            sx={{color: "#DD432B"}}
                            icon={<RectangleIcon fontSize="inherit"/>}
                            readOnly
                        />
                        <Typography>{'Tough assignments but very rewarding unit overall. I loved the unit, John is very sweet! :)'}</Typography>
                        <Typography sx={{opacity: '50%'}}>Anonymous, S1 2023</Typography>
                </Box>
            </Stack>
        </div>
    </>)
}

export default Reviews;