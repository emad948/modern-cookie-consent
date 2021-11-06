import React from 'react';
import CookieConsentModal from "./CookieConsentModal";


function App() {
    const dummyText="We use cookies to optimize your user experience. All details can be found in ourprivacy policy."
    return (
        <div>
            {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
            <CookieConsentModal open={true} handleClose={()=>{}}
                                dialogTitle={'Deine Cookie-Einstellungen'}
                                dialogContextText={dummyText}
            />

        </div>
    );
}

export default App;
