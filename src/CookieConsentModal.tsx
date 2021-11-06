import React from 'react'
import {
    Accordion,
    AccordionDetails, AccordionSummary, Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Divider, Switch, Typography
} from "@mui/material";
import {makeStyles,} from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface CookieConsentModalProps {
    open: boolean;
    handleClose: () => void
    dialogTitle: string;
    dialogContextText: string;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

}

//TODO @Emad fix theme
const useStyles = makeStyles(() => ({
    root: {},
    buttonsContainer: {
        marginRight: '16px',
        marginTop: '16px'
    },
    button: {
        marginRight: '16px',
    },
    accordion: {
        boxShadow: 'none'

    },
    details: {
        marginLeft: '200px'
    }


}));


const CookieConsentModal: React.FC<CookieConsentModalProps> = (props) => {
    const classes = useStyles();
    return (
        <Dialog

            open={props.open}
            onClose={() => props.handleClose()}
            maxWidth={props.maxWidth}


        >
            <DialogTitle>{props.dialogTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.dialogContextText}
                </DialogContentText>
            </DialogContent>


            <Accordion disableGutters={true} style={{boxShadow: 'none'}}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <AccordionSummary>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <ExpandMoreIcon/>
                            <Typography>Notwendig</Typography>
                        </Box>

                    </AccordionSummary>
                    <Switch defaultChecked disabled={true}/>
                </Box>

                <AccordionDetails>
                    <Typography>
                        Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen, indem sie Grundfunktionen wie
                        Seitennavigation und Zugriff auf sichere Bereiche der Webseite ermöglichen. Die Webseite kann
                        ohne diese Cookies nicht richtig funktionieren.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters={true} style={{boxShadow: 'none'}}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <AccordionSummary>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <ExpandMoreIcon/>
                            <Typography>Komfort</Typography>
                        </Box>
                    </AccordionSummary>
                    <Switch defaultChecked/>
                </Box>
                <AccordionDetails>
                    <Typography>
                        Komfort-Cookies ermöglichen einer Webseite sich an Informationen zu erinnern, die die Art
                        beeinflussen, wie sich eine Webseite verhält oder aussieht, wie z. B. Ihre bevorzugte Sprache
                        oder die Region in der Sie sich befinden.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disableGutters={true} style={{boxShadow: 'none'}}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <AccordionSummary>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <ExpandMoreIcon/>
                            <Typography>Statistik</Typography>
                        </Box>
                    </AccordionSummary>
                    <Switch defaultChecked/>
                </Box>
                <AccordionDetails>
                    <Typography>Statistik-Cookies helfen Webseiten-Besitzern zu verstehen, wie Besucher mit Webseiten
                        interagieren, indem Informationen anonym gesammelt und gemeldet werden.</Typography>
                </AccordionDetails>
            </Accordion>
            <DialogActions>
                <div className={classes.buttonsContainer}>
                    <Button className={classes.button}>Settings</Button>
                    <Button variant='contained'>Accept all</Button>
                </div>

            </DialogActions>

        </Dialog>
    )
}


export default CookieConsentModal;