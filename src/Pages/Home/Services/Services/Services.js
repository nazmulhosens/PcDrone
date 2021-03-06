import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UseAuth from "../../../../Hooks/UseAuth";
import Service from "../Service/Service";

const Services = () => {
	const { services } = UseAuth();

	return (
		<Box sx={{ background: "#f2f2f2" }}>
			<Container>
				<Typography
					variant="h4"
					sx={{ fontWeight: "bold", color: "#283747", py: 5 }}
				>
					Services We Provide
				</Typography>
				<Grid container spacing={4} sx={{ mx: "auto", py: 6 }}>
					{services?.slice(0, 6).map((service, index) => (
						<Service key={service._id} service={service} index={index} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;
