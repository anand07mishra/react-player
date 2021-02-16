
function gatracking() {
    var imported = document.createElement('script');
    imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-187122323-2';
    document.head.appendChild(imported);
    var dataLayer=window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-187122323-2');
    gtag('config', 'UA-187122323-2', {
      'user_id': authData.attributes.email
    });
}