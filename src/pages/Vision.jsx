import React from 'react'
import { Box, Grid, Container, Typography } from '@mui/material';
function Vision() {


    const vision = [
        { id: '1', image: '/vision.jpg', head: 'Vision', paragrap: 'Has advanced technology Developing services all the time To meet the needs and create maximum satisfaction for customers According to the main goal of the company' },
        { id: '2', image: '/vision.jpg', head: 'Mission', paragrap: '> Focus on service excellence', paragrap2: '> Build trust from customers.', paragrap3: '> Able to meet the needs and meet the needs of customers', paragrap4: '> Offering the best to customers.', paragrap5: '> Perform tasks quickly, on time, on target' }
    ]
    return (
        <Container maxWidth="xl">
            <Box>
                <Grid container sx={{ my: '7%', }}>
                    <Grid item xs={12} >
                        <div className='h-full w-full relative'>
                            <img className='h-[327px] w-full object-cover' src="/vision.jpg" alt="carousel" />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-3xl">
                                <h2 className='text-white text-4xl p-4 font-extrabold tracking-wider'>Vision And Aission
                                </h2>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid sx={{ border: "1px solid #000", my: "5%", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", }}>


                    {/* Content for the selected tab */}
                    <Typography
                        variant="h4"
                        sx={{
                            borderRadius: '4px',
                            textAlign: 'center',  // Centers the text
                            color: 'red',  // Sets the font color to 
                            borderBottom: '1px solid #000000',
                            backgroundColor: '#000000',
                            padding: '5px'
                        }}
                    >
                        Vision And Aission
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mt: 2,
                            textAlign: 'start', // Aligns the text to the start (left)
                            color: 'black', // Sets the font color to red
                            mx: 'auto', // Centers the text horizontally with automatic margins
                            width: '80%', // Optional: ensures the content is only as wide as the text
                            my: '5%',
                        }}
                    >
                        <div className="flex flex-col gap-3 flex-wrap">
                            The company has a vision to develop information technology services. Installation and repair, maintenance, air conditioners, CCTV, as well as other services with the goal of creating maximum customer satisfaction. And develop teamwork skills to reach international standards
                        </div>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mt: 2,
                            textAlign: 'start', // Aligns the text to the start (left)
                            color: 'black', // Sets the font color to black
                            mx: 'auto', // Centers the text horizontally with automatic margins
                            width: '80%', // Optional: ensures the content is only as wide as the text
                            my: '5%',
                        }}
                    >
                        {vision.map((item) => (
                            <div
                                key={item.id}
                                className={`vision-item flex gap-4 items-center my-12 justify-between ${item.id === '2' ? 'lg:flex-row-reverse sm:flex-col flex-col' : 'lg:flex-row sm:flex-col flex-col'} transition-all duration-500 ease-in-out`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.head}
                                    className="lg:w-1/2 w-full h-60 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                                />
                                <div className="flex flex-col  justify-center  ml-8 flex-wrap md:ml-10">
                                    <h2 className="text-3xl ${item.id === '1' ? 'flex-row-reverse' : 'flex-row'} flex justify-center border-b-2 border-red-600  font-semibold text-gray-800 mb-5">{item.head}</h2>
                                    <p className={`text-sm text-gray-600`}>{item.paragrap}</p>
                                    <p className="text-sm text-gray-600">{item.paragrap2}</p>
                                    <p className="text-sm text-gray-600">{item.paragrap3}</p>
                                    <p className="text-sm text-gray-600">{item.paragrap4}</p>
                                    <p className="text-sm text-gray-600">{item.paragrap5}</p>
                                </div>
                            </div>

                        ))}
                    </Typography>

                </Grid>



            </Box>
        </Container>
    )
}

export default Vision
