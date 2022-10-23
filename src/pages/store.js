import React from 'react';
import { Helmet } from 'react-helmet'

function Store({ location })
{
  return (
    <>
      <Helmet>
        <script type='text/javascript' src='https://fineartamerica.com/widgetshoppingcart/widgetscripts.php'></script>
      </Helmet>
      <iframe
        id='pixelsshoppingcartiframe'
        title='pixelsshoppingcartiframe'
        src={`https://fineartamerica.com/${location.state?.path || 'widgetshoppingcart/artwork.html'}?memberidtype=artistid&memberid=1009581&domainid=0&showheader=0&height=600&autoheight=true&flagwidget=true`}
        style={{ display: 'inline-block', width: '100%', height: '820px', border: 'none', overflow: 'hidden' }}
      >

      </iframe>
    </>
  );
}

export default Store;