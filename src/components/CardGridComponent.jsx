import { Grid } from "@mui/material";
import CardComponent from "./CardComponent"; // Your custom Card component

const CardGridComponent = () => {
    const cards = [
        1,2,3,4,5,6,7,8,9,10
    ];

    return (
        <Grid container spacing={2} mt={2}>
            {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <CardComponent {...card} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CardGridComponent;
