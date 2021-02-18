export default {
  privacyPolicy: {
    collectedData: `För att bedriva den här studien, behöver vi samla data från dig när du använder dig av Mobistudy.
    Vad för personlig data kommer bli insamlad?
\u2022 Generell profil information som email address, namn, efternamn, födelsedatum, kön, land, språk, huvudsakliga hälsoproblem, långsiktiga behandlingar, vikt och längd.
Denna information behövs för att identifiera dig och för att skapa statistik angående de som deltagar i studien.
\u2022 Ditt deltagande i den här studien och tiden det tar för dig att slutföra uppgifterna.
Denna information är nödvändig för att bedöma din nivå av deltagande i studien.
\u2022 Teknisk information som åtkomst till servern (vid t.e.x inloggning).
Denna information är nödvändig för säkerhet och granskningssyften.
\u2022 Datainsamling relaterat till uppgifterna tilldelade i studien, rent konkret: 
`,
    collectedDataForm: `    \u2022 Svar givna till {formName} formuläret.`,
    collectedDataQuery: `    \u2022 {dataType} från GoogleFit (Android telefoner) eller HealthKit (iPhones).`,
    collectedDataQCST: `    \u2022 Hjärtfrekvens och stegräkning under loppet av ett Queens College Step Test.`,
    collectedDataSMWT: `    \u2022 Din geografiska position, distansen och antal steg under loppet av ett Six-minute Walk Test`,
    collectedDataMiband3: `    \u2022 Hjärtfrekvens, aktivitetsnivå, antal steg and aktivitetstyp insamlad av en MiBand3 hälso-klocka.`,
    collectedDataPO60: `    \u2022 Hjärtfrekvens och syremättnadsnivå insamlad av en pulsoximeter`,
    collectedDataReason: ` Den här insamlade datan är nödvändig för att uppnå forskningssyftet. [LÄGG TILL ANLEDNINGEN FÖR INSAMLINGEN AV SPECIFIKT DEN HÄR DATAN]`,
    storage: `All den här datan kommer bli lagrad på Mobistudys server, vilken sköts av Malmö Universitet i Sverige. Din telefon kommer endast att lagra din profil och data relaterat till ditt deltagande i studien. 

Hur länge kommer datan att förvaras?
Din profil och deltagandet i studien kommer att förvaras så länge du har ett konto hos Mobistudy. 
Datan insamlag inom de olika uppgifterna tilldelade i den här studien kommer att förvaras hos Mobistudy servrar tills slutet av studien, {studyEndDate}.
Teknisk insamlad data (loggar) kommer att bli borttagna 1 år efter att de har producerats. 

[SPECIFIERA HUR LÄNGE STUDIENS INSAMLADE DATA KOMMER ATT BEHÅLLAS AV FORSKARNA]
`,
    access: `Vem kommer att ha tillgång till datan?
\u2022 Personal från Malmö Universitet för tekniskt underhåll och granskning (Malmö Universitet är handläggaren av din personliga information).`,
    accessInstitution: `\u2022 {institution}`,
    accessReason: ` för {reason} ({institution} är den som kontrollerar din personliga information).`,
    rights: `Vad är mina rättigheter?
\u2022 Du kan upphäva ditt deltagande i studien när du än vill genom att navigera till “studier” sektionen av den här appen. Datan som du har producerat hitintills inom studien kommer att behållas, men om du vill ta bort den, kontakta mobistudy@mau.se.
\u2022 Du kan ta bort ditt konto från Mobistudy genom att navigera till "profil" sektionen av den här appen. Detta kommer att ta bort all din insamlade data av Mobistudy förutom de tekniska loggarna, vilka kommer bli borttagna efter ett år. Var medveten om att den redan nedladdade datan av instutitioner inblandare i den här eller eller förflutna studier kan behålla din data efter att du tagit bort ditt konto. Om du vill att den datan också blir borttagen, var god kontakta mobistudy@mau.se.
\u2022 Du kan be om att behandlingen av din data stoppas eller begränsas (även utan att ta bort ditt konto). I det här fallet, kontakta mobistudy@mau.se.
\u2022 Du kan finna det som insamlats om dig och ladda ner datan i ett maskinläsligt format genom att kontakta mobistudy@mau.se.
\u2022 Du kan be om fel i din insamlade data att bli rättad. I det här fallet, kontakta mobistudy@mau.se.
\u2022 Om du har klagomål som inte kan bli avgjorda med Malmö Universitet förelägga detta till Datainspektionen.`,
    contacts: `För frågor gällande hur insamlad data är handlagd av varje involverad instutition i studien, var god kontakta:
\u2022 Malmö Universitet, hos: dataskyddsombud@mau.se`,
    piContact: `\u2022 {name} hos: {contact}`
  },
  consent: {
    taskItemDataQuery: `Jag godkänner att skicka min data gällande {dataType}, {scheduling}`,
    taskItemForm: `Jag godkänner att svara på {formName} form, {scheduling}`,
    taskItemMiBand3: `Jag godkänner att skicka min data insamlad av MiBand3 hälso-klockan, {scheduling}`,
    taskItemQCST: 'Jag godkänner att utföra queens college step test, {scheduling}',
    taskItemSMWT: 'Jag godkänner att utföra six minute walk test, {scheduling}',
    taskItemPO60: 'Jag godkänner att skicka data insamlad av Beurer PO60 pulsoximetern, {scheduling}'
  },
  scheduling: {
    notDefined: 'Icke definierad än',
    alwaysOn: 'Alltid tillgänglig',
    fromDaysConsented: `Dagen efter du har gett ditt samtycke | {n} dagar efter att du har gett ditt samtycke`,
    untilDaysConsented: `Tills {days} dagar efter att du har gett ditt samtycke`,
    occurrences: `Upprepad {occurrences} gånger`,
    repeatedDays: `Upprepad dagligen | Upprepad varje {n} dagar`,
    repeatedWeeks: `Upprepad veckovis | Upprepad varje {n} veckor`,
    repeatedMonths: `Upprepad månadsvis | Upprepad varje {n} månade`,
    repeatedYears: `Upprepad årligen | Upprepad varje {n} år`,
    onMonths: `På dessa följande månad(er)`,
    onDaysMonth: `På dessa följande dag(ar) i månaden`,
    onDaysWeek: `På dessa följande dag(ar) i månaden`
  },
  months: {
    '1': 'Januari',
    '2': 'Februari',
    '3': 'Mars',
    '4': 'April',
    '5': 'Maj',
    '6': 'Juni',
    '7': 'Juli',
    '8': 'Augusti',
    '9': 'September',
    '10': 'Oktober',
    '11': 'November',
    '12': 'December'
  },
  weekDays: {
    mo: 'Måndag',
    tu: 'Tisdag',
    we: 'Onsdag',
    th: 'Torsdag',
    fr: 'Fredag',
    sa: 'Lördag',
    su: 'Söndag'
  },
  healthDataTypes: {
    steps: 'Steg',
    weight: 'Vikt',
    height: 'Längd',
    activity: 'Aktivitet',
    heart_rate: 'Hjärtfrekvens',
    heart_rate_variability: 'Hjärtfrekvensvariabilitet',
    calories: 'Kalorier',
    distance: 'Distansen som har gåtts eller sprungits'
  }
}
