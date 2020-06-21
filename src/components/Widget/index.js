import React from 'react';


export const Widget = () => (
  <div>
    <iframe
      id='iframe-widget'
      title="Exchange"
      src='https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=0.1&from=btc&link_id=4738f5c74dcbe0&to=vet&FAQ=false&logo=true'
      width='100%'
      height='350px'
      frameBorder='0'/>
    <script type='text/javascript' async src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'/>
  </div>
);
