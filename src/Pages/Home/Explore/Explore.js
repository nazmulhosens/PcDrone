import { Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Service from "../Services/Service/Service";

const Explore = () => {
	const { services } = UseAuth();

	return (
		<Box sx={{ background: "#f2f2f2" }}>
			<Header />
			<Container>
				<Typography
					variant="h3"
					sx={{ fontWeight: "bold", color: "#283747", py: 6 }}
				>
					Services We Provide
				</Typography>
				<Grid container spacing={4} sx={{ mx: "auto", py: 6 }}>
					{services?.map((service, index) => (
						<Service key={service._id} service={service} index={index} />
					))}
				</Grid>
			</Container>
			<Footer />
		</Box>
	);
};

export default Explore;
