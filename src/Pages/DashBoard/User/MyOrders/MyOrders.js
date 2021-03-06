import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import UseAuth from "../../../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const MyOrders = () => {
	const [myOrders, setMyOrders] = useState([]);
	const { user, cencelHandle, reload } = UseAuth();

	useEffect(() => {
		const url = `https://shielded-retreat-91589.herokuapp.com/myorders?email=${user?.email}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMyOrders(data));
	}, [user.email, reload]);

	return (
		<Box>
			{myOrders.length ? (
				<Grid
					container
					spacing={2}
					sx={{
						background: "#283747",
						pb: 1,
					}}
				>
					<Grid item xs={12} md={4}>
						<Typography
							variant="body1"
							sx={{ color: "#fff", fontWeight: "bold" }}
						>
							Product Name
						</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography
							variant="body1"
							sx={{ color: "#fff", fontWeight: "bold" }}
						>
							Price
						</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography
							variant="body1"
							sx={{ color: "#fff", fontWeight: "bold" }}
						>
							Order
						</Typography>
					</Grid>

					<Grid item xs={12} md={2}>
						<Typography
							variant="body1"
							sx={{ color: "#fff", fontWeight: "bold" }}
						>
							Cancellation
						</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography
							variant="body1"
							sx={{ color: "#fff", fontWeight: "bold" }}
						>
							Payment
						</Typography>
					</Grid>
				</Grid>
			) : (
				<Typography
					variant="h4"
					sx={{ fontWeight: "bold", color: "#283747", py: 5 }}
				>
					You have no orders
				</Typography>
			)}
			{myOrders?.map((order) => (
				<Grid
					container
					spacing={2}
					key={order._id}
					sx={{
						color: "#283747",
						p: 3,
						borderBottom: "1px solid lightgray",
						alignItems: "center",
					}}
				>
					<Grid item xs={12} md={4}>
						<Typography variant="body1" sx={{ textAlign: "justify" }}>
							{order?.productName.slice(0, 50)}...
						</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography
							variant="body1"
							sx={{
								fontWeight: "bold",
							}}
						>
							$ {order?.productPrice}
						</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography
							variant="body1"
							sx={{
								fontWeight: "bold",
								background: "#2ECC71",
								px: 3,
								py: 1,
								borderRadius: 2,
								color: "#fff",
							}}
						>
							{order.status}
						</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<button
							onClick={() => cencelHandle(order._id)}
							className="cencel-btn"
						>
							Cencel
						</button>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography
							variant="body1"
							sx={{
								color: "#000",
								fontWeight: "bold",
							}}
						>
							{order.pay ? (
								"Paid"
							) : (
								<Link to={`/dashBoard/pay/${order._id}`}>Pay</Link>
							)}
						</Typography>
					</Grid>
				</Grid>
			))}
		</Box>
	);
};

export default MyOrders;
