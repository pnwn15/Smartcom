import React, { useState } from 'react';
import { Box, Grid, Container, Tabs, Tab, Typography } from '@mui/material';


function Business() {
    // State for selected tab
    const [selectedTab, setSelectedTab] = useState(0);

    // Handle tab change
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    // Array of content for each tab
    const tabContent = [
        {
            text: "Computer",
            imgSrc: "/Carou1.png",
            description: (
                <>
                    <h1>Computer System</h1>
                    <p className="text-black text-sm">
                        Get computer systems to be assigned to work (System Integrator) in both Hardware and Software.
                    </p>
                    <h1>Network system</h1>
                    <p className="text-black text-sm">
                        Install LAN, WAN, WIRELESS inside - outside both copper cable and fiber optic (Fiber Optic) air and underground.
                    </p>
                    <h1>Software Developer</h1>
                    <p className="text-black text-sm">
                        Design-produce software for the system and hardware required
                    </p>
                    <h1>Service Contacts</h1>
                    <p className="text-black text-sm">
                        Provide yearly repair-maintenance services for computers and equipment.
                    </p>
                </>
            ),

        },
        {
            text: "Telecommunication",
            imgSrc: "/Carou1.png",
            description: (
                <>
                    <h1>PABX System</h1>
                    <p className="text-black text-sm">
                        Get computer systems to be assigned to work (System Integrator) in both Hardware and Software.
                    </p>
                    <h1>Build base station</h1>
                    <p className="text-black text-sm">
                        Install LAN, WAN, WIRELESS inside - outside both copper cable and fiber optic (Fiber Optic) air and underground.
                    </p>
                    <h1>Install the copper-fiber network cable</h1>
                    <p className="text-black text-sm">
                        Installation - wiring inside and outside the building , wiring is underground , update wireless network.
                    </p>
                </>
            ),
        },
        {
            text: "Security",
            imgSrc: "/Carou1.png",
            description: (
                <>
                    <h1>CCTV</h1>
                    <p className="text-black text-sm ">
                        Design-Distribution and installation of CCTV systems Inside - outside the building with NVR Server image recording system, face detection system, license plate inspection system
                    </p>
                    <h1>CATV</h1>
                    <p className="text-black text-sm">
                        Sale and installation of CATV systems for hotels, apartments, indoors - outdoors.
                    </p>
                    <h1>Access Control</h1>
                    <p className="text-black text-sm">
                        Design - Distribution and installation of Access Control systems for offices, factories, apartments, hotels.
                    </p>
                    <h1>Car park System</h1>
                    <p className="text-black text-sm">
                        Automatic parking system
                    </p>
                    <h1>Fire Alarm</h1>
                    <p className="text-black text-sm">
                        Design, sale and installation of Fire Alarm systems for offices, apartments, hotels.
                    </p>
                    <h1>Instruction System</h1>
                    <p className="text-black text-sm">
                        Design - sell and install the system Intruder alert for inside / outside the building.
                    </p>
                    <h1>Sprinkler System</h1>
                    <p className="text-black text-sm">
                        Design - sell and install the system Fire and chemical fire suppression systems
                    </p>
                </>
            ),
        },
        {
            text: "Conference",
            imgSrc: "/Carou1.png",
            description: (
                <>
                    <div className="flex justify-between items-start lg:flex-row  flex-col md:flex-row gap-8 my-6">
                        <div className="flex flex-col gap-4 w-full md:w-2/3">
                            <h1 className="text-xl font-semibold text-black">Conference System</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Design - During the unit and installation. Conference rooms for offices, hotels, factories, and apartments.
                            </p>

                            <h1 className="text-xl font-semibold text-black">Public Attendance System</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Design - During the unit and installation of sound within and along the lines of the building. For offices, hotels, factories, and apartments.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <img
                                src="/conference.jpg"
                                alt="Conference System"
                                style={{ width: '100%', objectFit: 'cover' }}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            text: "Electric",
            imgSrc: "/Carou1.png",
            description: (
                <>
                    <div className="flex justify-between items-start lg:flex-row  flex-col md:flex-row gap-8 my-6">
                        <div className="flex flex-col gap-4 w-full md:w-2/3">
                            <h1 className="text-xl font-semibold text-black">Electric system</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Design - Install electrical systems within the building and outside the building.
                            </p>

                            <h1 className="text-xl font-semibold text-black">Building Automation System</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Install intelligent building control systems For office buildings , hotels
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <img
                                src="/elec.jpg"
                                alt="Conference System"
                                style={{ width: '100%', objectFit: 'cover' }}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            text: "Air Conditional",
            imgSrc: "/Carou1.png",
            description: (
                <>
                    <div className="flex justify-between items-start lg:flex-row  flex-col md:flex-row gap-8 my-6">
                        <div className="flex flex-col gap-4 w-full md:w-2/3">
                            <h1 className="text-xl font-semibold text-black">Air Conditional System</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Install air conditioning systems for computer control rooms, central buildings, offices, hotels, both modular systems and cold air ducts - cold water pipes
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <img
                                src="/air.jpg"
                                alt="Conference System"
                                style={{ width: '100%', objectFit: 'cover' }}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            text: "Utility",
            imgSrc: "/Carou1.png",
            description: (
                <>
                    <div className="flex justify-between items-start lg:flex-row  flex-col md:flex-row gap-8 my-6">
                        <div className="flex flex-col gap-4 w-full md:w-2/3">
                            <h1 className="text-xl font-semibold text-black">Water System</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Install a water pipe system PP-R, PVC, PE, PP with accessories
                            </p>
                            <h1 className="text-xl font-semibold text-black">Wastewater System</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Install drainage system And wastewater treatment systems with equipment
                            </p>
                            <h1 className="text-xl font-semibold text-black">Stream System</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Install steam pipes and accessories
                            </p>
                            <h1 className="text-xl font-semibold text-black">Booster Pump System</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Install water pump Pressure control and water delivery system with equipment
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <img
                                src="/ul.jpg"
                                alt="Conference System"
                                style={{ width: '100%', objectFit: 'cover' }}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            text: "Preventive",
            imgSrc: "/Carou1.png",
            description: (
                <>
                    <div className="flex justify-between items-start lg:flex-row  flex-col md:flex-row gap-8 my-6">
                        <div className="flex flex-col gap-4 w-full md:w-2/3">
                            <h1 className="text-xl font-semibold text-black">Air Conditioner Service</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Maintenance of Split Type and Chiller air conditioners, annual contract with PM
                            </p>
                            <h1 className="text-xl font-semibold text-black">Cold Room Service</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Maintenance of cold storage and cold storage system, annual contract with PM
                            </p>
                            <h1 className="text-xl font-semibold text-black">Building Utility Service</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Maintenance work Building assembly system, water system, electrical system, fire fighting system, drainage system, waste water treatment system, annual contract with PM
                            </p>
                            <h1 className="text-xl font-semibold text-black">Security System Service</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Maintenance work Security, CCTV, Access Control, Car park. Annual contract with PM.
                            </p>
                            <h1 className="text-xl font-semibold text-black">Computer Networks Service</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Maintenance work computer system And the annual contract network system with PM
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <img
                                src="/preven.jpg"
                                alt="Conference System"
                                style={{ width: '100%', objectFit: 'cover' }}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            text: "Distributor",
            imgSrc: "/Carou1.png",
            description: (
                <>
                    <div className="flex justify-between items-start lg:flex-row  flex-col md:flex-row gap-8 my-6">
                        <div className="flex flex-col gap-4 w-full md:w-2/3">
                            <h1 className="text-xl font-semibold text-black">CCTV</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Main distributor and importer CCTV Brand Lilin, Afidus
                            </p>
                            <h1 className="text-xl font-semibold text-black">VMS (Video Management System)</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Management program CCTV system, IO Network, Lilin
                            </p>
                            <h1 className="text-xl font-semibold text-black">Access Control</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Main distributor and importer of Access Control brand of Chiyu, Hundure
                            </p>
                            <h1 className="text-xl font-semibold text-black">Turnstile and Gate Barrier</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Main dealer and importer of car protection products from Goosafe
                            </p>
                            <h1 className="text-xl font-semibold text-black">UVIS System (Under Vehicle Inspector System)</h1>
                            <p className="text-black text-sm leading-relaxed">
                                Main distributor and importer Security and protection against foreign matters Smuggled into the area from under the car floor.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <img
                                src="/cctv.jpg"
                                alt="Conference System"
                                style={{ width: '100%', objectFit: 'cover' }}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </>
            ),
        },
    ];
    return (
        <Container maxWidth="xl">
            <Box>
                <Grid container sx={{ marginTop: '8%', }}>
                    <Grid item xs={12}>
                        <div className='h-full w-full relative'>
                            <img className='h-[327px] w-full object-cover' src={tabContent[selectedTab].imgSrc} alt="carousel" />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-3xl">
                                <h2 className='text-white overflow-hidden bg-black text-md p-2 font-extrabold tracking-wider border border-black rounded-4xl'>{tabContent[selectedTab].text}</h2>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                
                {/* Tabs Section */}
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    aria-label="business tabs"
                    indicatorColor="transparent"  // Make indicator transparent so we can customize it
                    centered
                    scrollButtons="auto"  // Enable scrolling buttons when necessary
                    variant="scrollable"  // Make tabs scrollable
                    sx={{
                        "& .MuiTab-root": {
                            color: "#000000",  // Set the text color of tabs to black
                        },
                        "& .Mui-selected": {
                            color: "#000000",  // Set the selected tab color to black as well
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: "red",  // Change the indicator line color to red
                        },
                        overflow: "hidden",  // Prevent horizontal scroll in the container itself
                        border: "1px solid #000",  // Border around the tabs container
                        padding: "0",  // Optional: Adjust the padding if needed
                    }}
                >
                    <Tab label="Computer System" />
                    <Tab label="Telecommunication System" />
                    <Tab label="Security System" />
                    <Tab label="Conference And Outdoor System" />
                    <Tab label="Electric System" />
                    <Tab label="Air Conditional System" />
                    <Tab label="Utility System" />
                    <Tab label="Preventive And Service" />
                    <Tab label="Distributor" />
                </Tabs>

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
                    {tabContent[selectedTab].text}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mt: 2,
                        textAlign: 'start', // Aligns the text to the start (left)
                        color: 'red', // Sets the font color to red
                        mx: 'auto', // Centers the text horizontally with automatic margins
                        width: '80%', // Optional: ensures the content is only as wide as the text
                        my: '5%',
                    }}
                >
                    <div className="flex flex-col gap-3 flex-wrap">
                        {tabContent[selectedTab].description}
                    </div>
                    </Typography>
                </Grid>
            </Box>
        </Container>
    );
}

export default Business;
