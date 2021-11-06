import React from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {makeStyles,} from '@mui/styles';

export interface CookieConsentModalProps {
    open: boolean;
    handleClose: () => void
    dialogTitle: string;
    dialogContextText: string;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

}

const useStyles = makeStyles({
    root: {},
    buttonsContainer: {
        marginRight: '16px',
    },
    button:{
        marginRight: '16px',
    }
});


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