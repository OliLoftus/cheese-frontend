import API_URL from "../config";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import RatingComponent from "../rating/Rating";
import Box from "@mui/material/Box";

const RecommendationComponent = () => {
    const [cheese, setCheeseRecommendation] = useState([]);
    const [highestRatedType, setType] = useState([]);
    const [token] = useState(window.localStorage.getItem("token"));

    useEffect(() => {
        const fetchCheeseRecommendation = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/api/ratings/get/recommendation`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (response.status === 401) {
                    window.location.href = "/";
                }
                if (response.status === 200) {
                    const data = await response.json();
                    setCheeseRecommendation(data.cleanRandomCheese);
                    setType(data.highestRatedCheeseType);
                } else {
                    console.error("Error fetching cheese recommendation");
                }
            } catch (error) {
                console.error("Error fetching cheese recommendation", error);
            }
        };
        fetchCheeseRecommendation();
    }, [token]);

    const link = cheese.image;
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "lower",
                justifyContent: "center",
                margin: "50px",
            }}
        >
            <Typography style={{ marginTop: "10px" }} variant="h4">
                Here's your recommendation:
            </Typography>
            <img
                src={link}
                alt={cheese.name}
                style={{
                    width: "100%",
                    maxWidth: "250px",
                    height: "200px",
                    margin: "15 0",
                }}
            />
            <Typography style={{ marginTop: "10px" }} variant="h4">
                {cheese.name}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                This cheese was suggested because your highest rated cheese type
                is {highestRatedType}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                Cheese Type:{" "}
            </Typography>
            {/* this conditional checks if exists once, then if not does nothing, then is rechecked when useEffect is called/component is re-rendered*/}
            <Typography
                variant="p"
                className="randomCheeseFields"
                style={{ display: "flex", flexDirection: "row" }}
            >
                {cheese.type && Array.isArray(cheese.type) ? (
                    cheese.type.map((item) => (
                        <p key={item} style={{ margin: "0px 10px 5px 0" }}>
                            {item}
                        </p>
                    ))
                ) : (
                    <p>No types available</p>
                )}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                Description:{" "}
            </Typography>
            <Typography
                data-cy="description"
                variant="p"
                className="randomCheeseFields"
            >
                {cheese.description}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                Flavour Profiles:{" "}
            </Typography>
            <Typography variant="p" className="randomCheeseFields">
                {cheese.flavour ? cheese.flavour : "Unknown"}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                Cheese Families:{" "}
            </Typography>
            <Typography variant="p" className="randomCheeseFields">
                {cheese.family ? cheese.family : "Unknown"}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                Aromas:{" "}
            </Typography>
            <Typography
                variant="p"
                className="randomCheeseFields"
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {cheese.aromas && Array.isArray(cheese.aromas) ? (
                    cheese?.aromas?.map((item) => (
                        <p key={item} style={{ margin: "0px 10px 5px 0" }}>
                            {item}
                        </p>
                    ))
                ) : (
                    <p style={{ margin: "0px 10px 5px 0" }}>Unknown</p>
                )}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                Regions of Origin:{" "}
            </Typography>
            <Typography variant="p" className="randomCheeseFields">
                {cheese.region ? cheese.region : "Unknown"}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                Countries of Origin:{" "}
            </Typography>
            <Typography
                variant="p"
                className="randomCheeseFields"
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {cheese.countries && Array.isArray(cheese.countries) ? (
                    cheese?.countries?.map((item) => (
                        <p key={item} style={{ margin: "0px 10px 5px 0" }}>
                            {item}
                        </p>
                    ))
                ) : (
                    <p style={{ margin: "0px 10px 5px 0" }}>Unknown</p>
                )}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                Milk Type:{" "}
            </Typography>
            <Typography
                variant="p"
                className="randomCheeseFields"
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {cheese.milks && Array.isArray(cheese.aromas) ? (
                    cheese?.milks?.map((item) => (
                        <p key={item} style={{ margin: "0px 10px 5px 0" }}>
                            {item}
                        </p>
                    ))
                ) : (
                    <p style={{ margin: "0px 10px 5px 0" }}>Unknown</p>
                )}
            </Typography>
            <Typography
                variant="h2"
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                }}
            >
                Suitable for Vegetarians:{" "}
            </Typography>
            <Typography variant="p" className="randomCheeseFields">
                {cheese.vegetarian ? cheese.vegetarian : "Unknown"}
            </Typography>
            <RatingComponent cheeseId={cheese.cheeseId} />
        </Box>
    );
};

export default RecommendationComponent;
