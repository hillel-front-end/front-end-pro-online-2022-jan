import { useEffect, useState } from "react";
import WeatherService from "../services/WeatherService";
import Button from '@mui/material/Button';
import { Accordion, Switch } from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// CSS in JS
const AccordionStyles = {
    '&::before': {
        backgroundColor: 'red',
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        transition: 'all 1s',
    }
};

const WeatherContainer = (props) => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        if (!props.position) return;

        WeatherService.loadForecast({
            lat: props.position.lat,
            lon: props.position.lng
        })
            .then(weather => setWeather(weather))
    }, [props.position]);

    return (
        <div>
            {weather && 
                weather.list.map(record => (
                        <Accordion sx={AccordionStyles} key={record.dt_txt} style={{maxWidth: 600}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{record.dt_txt}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                {record.main.temp}
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
            
            
            <Button variant="contained">Click me</Button>
            <Switch />
        </div>
    );
}

export default WeatherContainer;