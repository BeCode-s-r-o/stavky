const createEmailTemplate = ({
  name,
  invoiceNumber,
  isForex,
  storeItem,
  email,
  address,
}) => {
  return `<div style=text-align:center;><h2>Dobrý deň <strong>${name}</strong></h2>

  <h1>ĎAKUJEME ZA PLATBU A DÔVERU</h1> 
  
  <p>Objednávka a platba je <strong>úspešne</strong> zrealizovaná. V prílohe <br/>
  nájdete <strong>faktúru</strong> za uhradené poradenské služby. Aktuálne <br/> 
  musíte vykonať <strong>3 kroky pre aktiváciu</strong>  členstva.</p>  

  <p>Stiahnite si aplikáciu <strong>Telegram Messenger</strong> pre odber a komunikáciu <br/>
  Napíšte nám na náš <strong>support chat</strong> na telegrame <strong>@digitalgroupsupport</strong> <br/>
  Odošlite nám <strong>screenshot e-mailu</strong> s <strong>potvrdením o úhrade </strong> <br/>
  služby
  </p>

  <h1>HOTOVO! DO 48 HODÍN VÁS BUDEME <br/> KONTAKTOVAŤ</h1>

  <p>Do <strong>48 hodín</strong> Vás bude kontaktovať náš <strong>support team</strong><br/> s ďalšími inštrukciami, uvítacím <br/>
  <strong>e-bookom</strong> a potrebnými <strong>linkami</strong> na odber našich <strong>alertov</strong>.
  </p>

  <hr>
  <h1>VAŠA OBJEDNÁVKA č. ${invoiceNumber} | ${
    isForex ? "Forex" : "Stavkove"
  } Poradenstvo</h1>
  <h2>${storeItem.name} v hodnote ${
    (storeItem.priceInCents / 100).toFixed(2) + "€"
  } (s DPH)</h2>
  <h2>FAKTURAČNÉ ÚDAJE</h2>

  <p>${name}</p>
  <p>${email}</p>
  <p>${address.street}</p>
  <p>${address.zip + ", " + address.city}</p>
  <p>${address.country}</p>

  <hr>

  <h1>V PRÍPADE AKÝCHKOĽVEK OTÁZOK NÁS  <br/> NEVÁHAJTE KONTAKTOVAŤ</h1>
  <p>
${isForex ? "info@forexporadenstvo.sk" : "info@stavkoveporadenstvo.sk"}
  </p>
  <h2>PRAJEME VÁM PRÍJEMNY DEŇ</h2>
  <p><strong>tím ${isForex ? "Forex" : "Stavkove"} Poradenstvo! </strong></p>

  <div>
    <a href=https://www.facebook.com/${
      isForex ? "poradenstvoforex" : "poradenstvostavkove"
    }.sk style=margin:5px><img src = 'cid:facebook' alt="facebook logo" width="60" height="60" /></a> 
    <a href=https://www.instagram.com/${
      isForex ? "forexporadenstvo" : "stavkoveporadenstvo"
    }.official/ style=margin:5px><img src = 'cid:instagram' alt="instagram logo" width="60" height="60"/></a>
    <a href=https://www.tiktok.com/${
      isForex ? "@forexporadenstvo" : "@stavkoveporadenstvo"
    } style=margin:5px><img src = 'cid:tiktok' alt="tiktok logo" width="60" height="60"/></a>
    <a href=https://t.me/${
      isForex ? "forex" : "stavkove"
    }poradenstvosk style=margin:5px><img src = 'cid:telegram' alt="telegram logo" width="60" height="60"/></a>
  </div>
  </div>`;
};
module.exports = {
  createEmailTemplate,
};
