import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../img/banner-img.png";
import "animate.css";

const TopBanner = () => {
	return (
		<Grid
			container
			spacing={4}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "104vh",
				background: "#D4E6F1",
				marginTop: -9,
				p: 6,
			}}
		>
			<Grid
				item
				xs={12}
				md={6}
				sx={{ textAlign: "center" }}
				className="animate__animated animate__slideInLeft"
			>
				<Typography
					variant="h3"
					sx={{
						fontWeight: "bold",
						color: "#212F3D",
						textAlign: "justify",
					}}
				>
					DJI Phantom 3 Standard Quadcopter Drone
				</Typography>
				<Typography variant="body1" sx={{ my: 4 }}>
					Refer the user manual and videos on this page for
					troubleshooting.Enjoy the view: A live video feed gives you a
					720p HD real-time view of what your camera sees right on your
					mobile device. View a live image streamed from the drone up to a
					half mile away on the DJI Go app using your mobile phone or
					tablet
				</Typography>
				<Link to="explore">
					<button>Explore more</button>
				</Link>
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
				className="animate__animated animate__bounceInUp"
			>
				<img width="100%" src={banner} alt="" />
			</Grid>
		</Grid>
	);
};

export default TopBanner;
