/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import CardComponent from "./CardComponent";

const CardGridComponent = ({ cards }) => {
    return (
        <Grid container spacing={2} mt={2}>
            {cards.map((card, index) => (
                <Grid item sm={12} md={6} lg={4} key={index}>
                    <CardComponent {...card} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CardGridComponent;
