
(function(){
  const S = (window.OE_SETTINGS||{});
  // Calendly buttons
  function setHref(id, url){
    const a = document.getElementById(id);
    if (a){ a.href = url && url.length ? url : '#'; a.target = url && url.length ? '_blank' : '_self'; }
  }
  setHref('link-30', S.CALENDLY_30);
  setHref('link-60', S.CALENDLY_60);

  // Inline embed if either link present
  function showEmbed(url){
    const wrap = document.getElementById('cal-embed');
    if (!wrap) return;
    if (!url){ wrap.innerHTML = '<div class="placeholder">Set your Calendly links in <b>assets/js/settings.js</b> to enable inline scheduling.</div>'; return; }
    wrap.innerHTML = '<div class="calendly-inline-widget" data-url="'+url+'" style="min-width:320px;height:520px;"></div>';
    var s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js"; s.async = true;
    wrap.appendChild(s);
  }
  var current = S.CALENDLY_60 && S.CALENDLY_60.length ? S.CALENDLY_60 : S.CALENDLY_30;
  showEmbed(current);
  // Tab switching
  var t30 = document.getElementById('tab30'); var t60 = document.getElementById('tab60');
  if (t30) t30.addEventListener('click', function(){ t30.classList.add('active'); t60.classList.remove('active'); showEmbed(S.CALENDLY_30); });
  if (t60) t60.addEventListener('click', function(){ t60.classList.add('active'); t30.classList.remove('active'); showEmbed(S.CALENDLY_60); });

  // Optional GA4
  if(S.GA_MEASUREMENT_ID){
    var gtagScript = document.createElement('script');
    gtagScript.async = true; gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id='+S.GA_MEASUREMENT_ID;
    document.head.appendChild(gtagScript);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date()); gtag('config', S.GA_MEASUREMENT_ID);
  }
})();
