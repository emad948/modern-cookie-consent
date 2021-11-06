import React from 'react';
import CookieConsentModal from "./CookieConsentModal";


const App:React.FC= ()=> {
    const dummyText="Wir verwenden Cookies und ähnliche Technologien, um Inhalte zu personalisieren, das Nutzererlebnis zu optimieren sowie um Werbung anzupassen und zu bewerten. Indem du auf “Alle akzeptieren“ klickst oder in den Einstellungen eine Option aktivierst, stimmst du dem zu. Dies wird auch in unserer Datenschutzrichtlinie beschrieben. Um deine Einstellungen zu ändern oder deine Einwilligung zu widerrufen, aktualisiere einfach deine Cookie-Einstellungen."
    return (
        <div>
            {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
            <CookieConsentModal open={true} handleClose={()=>{}}
                                dialogTitle={'Deine Cookie-Einstellungen'}
                                dialogContextText={dummyText}
                                maxWidth={'md'}
            />

        </div>
    );
}

export default App;
