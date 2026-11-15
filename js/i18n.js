/* =========================================================
   Worldforge – translations (English is written in index.html,
   Czech translations are here). Game terms follow the game's own
   Czech and English texts.
   ========================================================= */
window.I18N = (() => {
  'use strict';

  /* ---- Czech versions of everything marked data-i18n in index.html ---- */
  const CS = {
    'nav.play': 'Jak hrát', 'nav.features': 'Funkce', 'nav.store': 'Obchod', 'nav.community': 'Komunita', 'nav.faq': 'Dotazy',
    'btn.download': 'Stáhnout',

    'hero.pill': 'Online hra pro více hráčů',
    'hero.title': 'Online strategie na skutečné mapě světa',
    'hero.lead': 'Vyberte si <b>volný stát</b> ze 168 skutečných zemí a veďte ho v jednom společném, trvalém světě proti <b>skutečným hráčům</b>.',
    'hero.download': 'Stáhnout pro Windows', 'hero.discord': 'Připojit se na Discord',
    'hero.note': 'Zdarma · Windows 10 / 11 · 103 MB',

    'res.money': 'Peníze', 'res.food': 'Potraviny', 'res.metals': 'Kovy', 'res.oil': 'Ropa', 'res.goods': 'Zboží', 'res.electronics': 'Elektronika',
    'mock.search': 'Hledat provincii…',
    'tab.prov': 'Provincie', 'tab.country': 'Země', 'tab.comp': 'Firmy', 'tab.trans': 'Doprava', 'tab.tech': 'Výzkum', 'tab.army': 'Armáda',
    'tab.dip': 'Diplomacie', 'tab.coal': 'Koalice', 'tab.market': 'Trh', 'tab.news': 'Zprávy', 'tab.art': 'Články',
    'mock.offer': 'Nabídka od hráče', 'mock.offerText': 'Nabízí spojenectví a vzájemnou obranu.',
    'ui.accept': 'Přijmout', 'ui.decline': 'Odmítnout', 'ui.free': 'volný', 'ui.player': 'hráč', 'ui.join': 'Připojit',

    'c.cz': 'Česko', 'c.de': 'Německo', 'c.fr': 'Francie', 'c.jp': 'Japonsko', 'c.pl': 'Polsko', 'c.it': 'Itálie', 'c.lu': 'Lucembursko', 'c.us': 'USA', 'c.at': 'Rakousko',
    'cap.cz': 'Praha', 'cap.de': 'Berlín', 'cap.fr': 'Paříž', 'cap.jp': 'Tokio', 'cap.pl': 'Varšava', 'cap.it': 'Řím', 'cap.lu': 'Lucemburk',
    'states.copy': 'Vybírejte ze <b>168 skutečných států</b> s reálnými hranicemi a hlavními městy. <b>Obsazené státy řídí jiní hráči.</b>',
    'states.btn': 'Jak to funguje',

    'play.h2': 'Od stažení k prvnímu tahu za pár minut.<br><span>Čtyři kroky do společného světa.</span>',
    's1.h': 'Stáhněte hru', 's1.p': 'Instalátor pro Windows. Instaluje se jen pro váš účet, bez práv správce.',
    's2.h': 'Vyberte si volný stát', 's2.p': 'Volné státy najdete v seznamu, obsazené řídí jiní hráči.',
    's3.offer': 'Nabídka obchodní dohody', 's3.h': 'Hrajte online', 's3.p': 'Svět je trvalý. Čas běží, i když jste odhlášeni.',
    's4.h': 'Přidejte se na Discord', 's4.p': 'Domluvte koalice a obchod a novinky se dozvíte jako první.',

    'feat.h2': 'Řiďte celý stát.<br><span>Ekonomika, výzkum, diplomacie a válka, které do sebe zapadají.</span>',
    'fa.q': 'Za který stát budete hrát?', 'fa.s': 'Hrát za', 'fa.h': 'Skutečná mapa Země',
    'fa.p': 'Reálné hranice, hlavní města, silnice, železnice a řeky. Den a noc běží pro celý svět najednou.',
    'fb.h': 'Šest surovin, jeden rozpočet', 'fb.p': 'Daně, obchod a firmy proti provozu budov, armádě a infrastruktuře.',
    'fc.city': 'město · 20 míst', 'b.factory': 'Továrny', 'b.uni': 'Univerzita', 'b.market': 'Obchodní centrum',
    'fc.l1': 'Ú1', 'fc.l2': 'Ú2', 'fc.l3': 'Ú3', 'fc.building': 'staví se', 'fc.free': 'Volné stavební místo',
    'fc.h': '20 staveb až do 5. úrovně', 'fc.p': 'Ve městech 8–20 stavebních míst, na venkově 2–4.',
    'fd.robot': 'Robotika', 'fd.h': '56 technologií v 11 oborech', 'fd.p': 'Víc výzkumů najednou, body se dělí podle priority.',
    'fe.all': 'Spojenectví', 'fe.trade': 'Obchod', 'fe.coal': 'Koalice',
    'fe.h': 'Diplomacie se skutečnými hráči', 'fe.p': 'Nabídněte mír, spojenectví nebo obchod. Koalice až o šesti státech.',
    'ff.units': '12 jednotek', 'u.inf': 'Pěchota', 'u.mbt': 'Hlavní bojový tank', 'u.mlrs': 'Salvový raketomet', 'u.stealth': 'Stealth stíhačka', 'u.frigate': 'Fregata',
    'ff.sel': 'Vybraná jednotka', 'ff.atk': 'Útok', 'ff.def': 'Obrana', 'ff.hp': 'Životy', 'ff.move': 'Přesun', 'ff.merge': 'Sloučit', 'ff.split': 'Rozdělit',
    'ff.h': '32 jednotek na zemi, ve vzduchu i na moři', 'ff.p': 'Pěchota, tanky, letectvo, loďstvo i rakety. Terén mění obranu i rychlost.',
    'st.1': 'skutečných států v jednom společném světě', 'st.2': 'všech provincií stačí k vítězství',
    'st.3b': '2 měsíce', 'st.3': 'skutečného času trvá jeden svět, pak rozhodne skóre',

    'store.h2': 'Obchod se zlatem.<br><span>Dobijte si herní účet. Přihlaste se stejným jménem hráče a heslem jako ve Worldforge.</span>',
    'si.h1': 'K čemu je zlato',
    'si.lead': 'Hra běží v reálném čase, takže zlato kupuje čas. Cena vždy sleduje zbývající čas, takže skoro hotová věc stojí málo.',
    'use.build': 'Dokončit stavbu', 'use.train': 'Dokončit výcvik', 'use.infra': 'Dokončit zlepšení infrastruktury',
    'use.tech': 'Dokončit výzkum', 'use.mob': 'Okamžitá mobilizace', 'use.day': 'za zbývající den', 'use.level': 'za stupeň',
    'si.more': 'Za zlato koupíte také suroviny, barvu státu nebo prémiový účet.',
    'si.h2': 'Jak nákup funguje',
    'flow.1h': 'Přihlaste se herním účtem', 'flow.1p': 'Stejné jméno hráče a heslo jako ve Worldforge.',
    'flow.2h': 'Zaplaťte přes PayPal', 'flow.2p': 'Přesměrujeme vás na PayPal, kde platbu bezpečně dokončíte.',
    'flow.3h': 'Zlato dorazí do hry', 'flow.3p': 'Hra si ho sama vyzvedne do minuty, nebo při příštím přihlášení.',
    'si.free': '<b>Chcete ho raději vydělat?</b> Každý nový hráč dostane na start 150 zlata a další získá hraním, za úspěchy a z denních odměn (až 75 zlata).',
    'store.fine': 'Platby zpracovává PayPal. Zlato je herní měna bez peněžní hodnoty a nelze ho směnit zpět za peníze. Ceny jsou konečné.',

    'com.h2': 'Worldforge na Discordu.<br><span>Najděte spojence dřív, než vás najdou sousedé.</span>',
    'com.open': 'Otevřít Discord',
    'com.t': 'Server Worldforge. <span>Místo, kde se hráči domlouvají na spojenectví, obchodu i válce.</span>',
    'com.p1': 'Novinky o hře a nových světech', 'com.p2': 'Hledání spojenců a koalic', 'com.p3': 'Pomoc pro nováčky a hlášení chyb',
    'com.join': 'Připojit se na Discord',
    'dc.info': 'Informace', 'dc.ann': 'oznámení', 'dc.news': 'novinky-ze-hry', 'dc.game': 'Hra', 'dc.dip': 'diplomacie',
    'dc.lfa': 'hledám-spojence', 'dc.trade': 'obchod', 'dc.support': 'Podpora', 'dc.help': 'pomoc', 'dc.bugs': 'chyby-a-návrhy',
    'dc.team': 'TÝM', 'dc.msg': 'Worldforge 1.0 je venku. Stáhněte hru, vyberte si volný stát a uvidíme se ve světě!',
    'dc.input': 'Napsat do #oznámení',

    'faq.h2': 'Časté dotazy.', 'faq.ask': 'Zeptat se na Discordu',
    'q1': 'Je Worldforge zdarma?',
    'a1': 'Ano. Hru si stáhnete i zahrajete zdarma. Zlato je dobrovolné: každý hráč dostane na start 150 zlata a další získává hraním, za úspěchy a z denních odměn.',
    'q2': 'Jak funguje hra online?',
    'a2': 'Hrajete v jednom trvalém světě s ostatními hráči. Čas běží vždy, i když jste odhlášeni, takže stát si hlídejte. Hráči mohou jeden druhému nabídnout mír, spojenectví nebo obchod. Nabídky najdete v záložce Diplomacie.',
    'q3': 'Jak se vyhrává?',
    'a3': 'Vyhráváte, když ovládnete 45 % všech provincií (rebelská území se nepočítají). Svět trvá nejvýš 2 měsíce skutečného času, pak o konečném pořadí rozhodne skóre: počet obyvatel, příjem, vojenská síla, výzkum a počet provincií. Není nutné válčit – bohatý a vzdělaný stát může vyhrát i přes obchod, koalice a vliv.',
    'q4': 'Jakým účtem se v obchodě přihlásím?',
    'a4': 'Stejným jménem hráče a heslem jako ve hře. Online účet váš profil získá při prvním přihlášení do hry s připojením k internetu.',
    'q5': 'Kdy zlato dostanu?',
    'a5': 'Hned jak PayPal potvrdí platbu. Když hra běží, zlato se objeví do minuty, jinak při příštím přihlášení. Hra vás na jeho příchod upozorní.',
    'q6': 'Jak můžu zaplatit?',
    'a6': 'Platby zpracovává PayPal. Zaplatíte svým účtem PayPal, nebo kartou, pokud ji PayPal nabídne. Na české verzi webu platíte v korunách, na anglické v eurech.',
    'q7': 'Za co můžu zlato utratit?',
    'a7': 'Zlato urychlí stavbu, výzkum, výcvik i mobilizaci a koupíte za něj suroviny, barvu státu nebo prémiový účet.',
    'q8': 'Jaké má hra požadavky?',
    'a8': 'Windows 10 nebo 11 (64bit), asi 330 MB místa na disku a připojení k internetu pro online hru. Instalátor má 103 MB a nepotřebuje práva správce.',
    'q9': 'Kde najdu pomoc nebo nahlásím chybu?',
    'a9': 'Na našem Discord serveru. Tam zveřejňujeme i novinky o hře a nových světech.',

    'cta.h2': 'Svět čeká.<br><span>Vykujte svůj stát.</span>', 'cta.dc': 'Discord', 'cta.dl': 'Stáhnout zdarma',
    'req.sys': 'Systém', 'req.sysv': 'Windows 10 / 11, 64bit', 'req.inst': 'Instalátor', 'req.disk': 'Místo na disku', 'req.diskv': 'cca 330 MB',
    'req.setup': 'Instalace', 'req.setupv': 'Bez práv správce', 'req.net': 'Internet', 'req.netv': 'Nutný pro online hru',

    'foot.tag': 'Online strategie od Senecioteam.', 'foot.game': 'Hra', 'foot.dl': 'Ke stažení', 'foot.inst': 'Instalátor pro Windows',
    'foot.req': 'Systémové požadavky', 'foot.bug': 'Nahlásit chybu', 'foot.legal': 'Právní', 'foot.terms': 'Podmínky použití',
    'foot.privacy': 'Data a soukromí', 'foot.lic': 'Licence třetích stran', 'foot.map': 'Mapová data: Natural Earth, NASA Blue Marble (public domain)',

    'login.h': 'Přihlášení do Worldforge', 'login.sub': 'Použijte stejné jméno hráče a heslo jako ve hře.',
    'login.name': 'Jméno hráče', 'login.pw': 'Heslo', 'login.btn': 'Přihlásit se',
    'login.help': 'Nedaří se přihlásit?', 'login.helpLink': 'Poraďte se na Discordu'
  };

  /* ---- texts used from JavaScript ---- */
  const STR = {
    en: {
      'meta.title': 'Worldforge – Online strategy on a real map of the world',
      'meta.desc': 'Worldforge is a free online strategy game by Senecioteam. Pick one of 168 real countries and lead it in one shared, persistent world against real players.',
      'names': ['Czechia', 'Japan', 'Brazil', 'Luxembourg', 'United States', 'Poland', 'Iceland'],
      'nav.login': 'Log in', 'close': 'Close',
      'gold': 'gold',
      'acct.out.t': 'You are not logged in', 'acct.out.s': 'Log in with your Worldforge account to buy gold.',
      'acct.in.t': 'Logged in as {name}', 'acct.nosync': 'Gold you buy is delivered to this account in the game.',
      'acct.sync': 'In the game: {gold} gold · synced {ago}', 'acct.pending': '{gold} gold on the way to the game',
      'acct.login': 'Log in', 'acct.logout': 'Log out',
      'ago.now': 'just now', 'ago.min': '{n} min ago', 'ago.h': '{n} h ago', 'ago.d': '{n} days ago',
      'pack.base': 'Base package', 'pack.bonus': '+{n} bonus', 'pack.per': '{price} / 100 gold', 'pack.buy': 'Buy',
      'pack.rec': 'Recommended', 'pack.best': 'Best value',
      'rec.h': 'Recent purchases', 'rec.delivered': 'Delivered to the game', 'rec.waiting': 'Waiting for the game', 'rec.refunded': 'Refunded',
      'banner.offline': 'The store is temporarily unavailable. Please try again later.',
      'note.preview': 'Preview mode: this page is opened as a file, so it is not connected to the game server. Login and purchases are only simulated.',
      'err.empty': 'Enter your player name and password.', 'err.cred': 'Wrong player name or password.',
      'err.cred2': "Haven't played online yet? Log in to the game once with an internet connection to activate your account.",
      'err.many': 'Too many attempts. Try again in 30 seconds.', 'err.net': "Can't reach the server. Check your connection.",
      'err.pw4': 'Password must have at least 4 characters.', 'login.busy': 'Logging in…', 'login.btn': 'Log in',
      'toast.welcome': 'Welcome, {name}.', 'toast.logout': 'You have been logged out.',
      'toast.success': 'Payment received. The gold will appear in the game within a minute, or the next time you log in.',
      'toast.cancel': 'Payment cancelled. Nothing was charged.', 'toast.failed': "The payment didn't go through. Nothing was charged.",
      'toast.delivered': '{gold} gold has been delivered to the game.',
      'buy.h': 'Confirm your purchase', 'buy.pkg': 'Package', 'buy.gold': 'Gold', 'buy.incl': 'incl. {n} bonus', 'buy.acct': 'Game account', 'buy.total': 'Total',
      'buy.agree': 'I agree to the <a href="#terms" data-terms="0">Terms of use</a> and ask for the gold to be delivered immediately. I understand that I lose my right of withdrawal once it is delivered.',
      'buy.paypal': 'You will complete the payment on PayPal and come back here automatically.',
      'buy.btn': 'Continue to PayPal', 'buy.busy': 'Redirecting to PayPal…', 'buy.needAgree': 'Please confirm the terms to continue.',
      'buy.err': 'The payment could not be started. Please try again.',
      'done.h': 'Preview complete', 'done.p': 'In the live store you would now continue to PayPal. After payment, {gold} gold would be delivered to {name} in the game.', 'done.btn': 'Done',
      'terms.note': 'These are the terms of desktop version 1.0. Updated terms for online play and gold purchases are being prepared.'
    },
    cs: {
      'meta.title': 'Worldforge – online strategie na skutečné mapě světa',
      'meta.desc': 'Worldforge je online strategie zdarma od Senecioteam. Vyberte si jeden ze 168 skutečných států a veďte ho v jednom společném světě proti skutečným hráčům.',
      'names': ['Česko', 'Japonsko', 'Brazílie', 'Lucembursko', 'Spojené státy', 'Polsko', 'Island'],
      'nav.login': 'Přihlásit', 'close': 'Zavřít',
      'gold': 'zlata',
      'acct.out.t': 'Nejste přihlášeni', 'acct.out.s': 'Přihlaste se svým účtem z Worldforge a kupte si zlato.',
      'acct.in.t': 'Přihlášený účet: {name}', 'acct.nosync': 'Zakoupené zlato se doručí na tento účet ve hře.',
      'acct.sync': 'Ve hře: {gold} zlata · aktualizováno {ago}', 'acct.pending': '{gold} zlata na cestě do hry',
      'acct.login': 'Přihlásit se', 'acct.logout': 'Odhlásit',
      'ago.now': 'právě teď', 'ago.min': 'před {n} min', 'ago.h': 'před {n} h', 'ago.d': 'před {n} dny',
      'pack.base': 'Základní balíček', 'pack.bonus': '+{n} bonus', 'pack.per': '{price} / 100 zlata', 'pack.buy': 'Koupit',
      'pack.rec': 'Doporučujeme', 'pack.best': 'Nejvýhodnější',
      'rec.h': 'Poslední nákupy', 'rec.delivered': 'Doručeno do hry', 'rec.waiting': 'Čeká na hru', 'rec.refunded': 'Vráceno',
      'banner.offline': 'Obchod je dočasně nedostupný. Zkuste to prosím později.',
      'note.preview': 'Režim náhledu: stránka je otevřená jako soubor, takže není připojená k hernímu serveru. Přihlášení i nákup se jen simulují.',
      'err.empty': 'Zadejte jméno hráče a heslo.', 'err.cred': 'Špatné jméno hráče nebo heslo.',
      'err.cred2': 'Ještě jste nehráli online? Přihlaste se jednou do hry s připojením k internetu a účet se aktivuje.',
      'err.many': 'Příliš mnoho pokusů. Zkuste to znovu za 30 sekund.', 'err.net': 'Nelze se spojit se serverem. Zkontrolujte připojení.',
      'err.pw4': 'Heslo musí mít aspoň 4 znaky.', 'login.busy': 'Přihlašuji…', 'login.btn': 'Přihlásit se',
      'toast.welcome': 'Vítejte, {name}.', 'toast.logout': 'Byli jste odhlášeni.',
      'toast.success': 'Platba přijata. Zlato se ve hře objeví do minuty, nebo při příštím přihlášení.',
      'toast.cancel': 'Platba zrušena. Nic se neúčtovalo.', 'toast.failed': 'Platba neprošla. Nic se neúčtovalo.',
      'toast.delivered': '{gold} zlata bylo doručeno do hry.',
      'buy.h': 'Potvrzení nákupu', 'buy.pkg': 'Balíček', 'buy.gold': 'Zlato', 'buy.incl': 'včetně {n} bonusu', 'buy.acct': 'Herní účet', 'buy.total': 'Celkem',
      'buy.agree': 'Souhlasím s <a href="#terms" data-terms="0">podmínkami použití</a> a žádám o okamžité dodání zlata. Beru na vědomí, že dodáním ztrácím právo na odstoupení od smlouvy.',
      'buy.paypal': 'Platbu dokončíte na stránkách PayPalu a pak se automaticky vrátíte sem.',
      'buy.btn': 'Pokračovat na PayPal', 'buy.busy': 'Přesměrovávám na PayPal…', 'buy.needAgree': 'Pro pokračování potvrďte podmínky.',
      'buy.err': 'Platbu se nepodařilo zahájit. Zkuste to prosím znovu.',
      'done.h': 'Náhled dokončen', 'done.p': 'V ostrém provozu byste teď pokračovali na PayPal. Po zaplacení by se na účet {name} ve hře doručilo {gold} zlata.', 'done.btn': 'Hotovo',
      'terms.note': 'Toto je znění ze stolní verze 1.0. Podmínky pro online hru a nákup zlata připravujeme.'
    }
  };

  /* ---- terms of use (text from the game, version 1.0) ---- */
  const TERMS = {
    en: {
      lead: 'Please read these terms before you install the game. By clicking “I agree” you confirm that you understand and accept them.',
      sec: [
        ['1. Who made the game', 'Worldforge (the “game”) was made by Senecioteam (the “author”). These terms cover the installer and the Worldforge desktop app, version 1.0.0.'],
        ['2. Licence', 'The author grants you a non-exclusive, non-transferable, free licence to use the game for personal, non-commercial purposes on your own devices. You may not sell, rent or redistribute the game, or present it as your own.'],
        ['3. What is not allowed', 'You may not reverse-engineer or decompile the game, modify its files, bypass its protection, or change saved data (profiles, gold, ratings, saved games) outside the game. The game detects such changes and refuses to load altered data.'],
        ['4. Your data and privacy', 'Your profile, password hash, saved games and settings stay on your computer only and are stored encrypted. The game sends no data to the internet and contains no tracking. The installer does not use the internet in this version; the installation files are inside it.'],
        ['5. Passwords and backups', 'A profile password cannot be recovered because it is never sent anywhere. You can save a backup of your profile to a file in the game settings. Keeping it safe is your responsibility.'],
        ['6. Game gold and rewards', 'Gold, experience points, ranks and achievements are purely in-game items with no monetary value. They cannot be cashed out, sold or transferred. In this version nothing can be bought with real money. A future online version may have its own terms.'],
        ['7. Third-party software', 'The game uses open-source software (for example Electron and Chromium, the d3-delaunay library), Natural Earth boundary data and the fonts Big Shoulders Display and IBM Plex Sans Condensed. Their own licences apply to them.'],
        ['8. No warranty and limit of liability', 'The game is provided “as is”, without any warranty of error-free operation. To the extent permitted by law the author is not liable for loss of data, lost profit or any other damage caused by using the game. Statutory consumer rights are not affected.'],
        ['9. Uninstalling and termination', 'You can uninstall the game at any time in Windows settings (Apps). If you breach these terms, the licence ends. Your profiles stay on disk until you delete them yourself.'],
        ['10. Changes to the terms', 'The terms may change. The current version is always available in the game settings. The law of the Czech Republic applies.']
      ]
    },
    cs: {
      lead: 'Než hru nainstalujete, přečtěte si prosím tyto podmínky. Kliknutím na „Souhlasím“ potvrzujete, že jim rozumíte a přijímáte je.',
      sec: [
        ['1. Kdo hru vytvořil', 'Worldforge (dále „hra“) vytvořil Senecioteam (dále „autor“). Tyto podmínky se týkají instalátoru a stolní aplikace Worldforge ve verzi 1.0.0.'],
        ['2. Licence', 'Autor vám uděluje nevýhradní, nepřenosnou a bezplatnou licenci k osobnímu, nekomerčnímu používání hry na vašich zařízeních. Hru nesmíte prodávat, pronajímat ani šířit dál, ani vydávat za vlastní.'],
        ['3. Co je zakázáno', 'Hru nesmíte zpětně analyzovat, dekompilovat, upravovat její soubory, obcházet její ochranu ani měnit uložená data (profily, zlato, hodnocení, uložené hry) mimo hru. Hra takové zásahy rozpozná a změněná data odmítne načíst.'],
        ['4. Vaše data a soukromí', 'Profil, hash hesla, uložené hry a nastavení zůstávají jen ve vašem počítači a jsou uložené zašifrovaně. Hra neposílá žádná data na internet a neobsahuje sledování. Instalátor v této verzi žádné připojení k internetu nepoužívá, instalační soubory jsou přímo v něm.'],
        ['5. Hesla a zálohy', 'Heslo k profilu nelze obnovit, protože se nikam neposílá. Zálohu profilu si můžete uložit do souboru v nastavení hry. Za její uschování odpovídáte vy.'],
        ['6. Herní zlato a odměny', 'Zlato, body zkušeností, hodnosti a úspěchy jsou čistě herní prvky bez peněžní hodnoty. Nelze je vyplatit, prodat ani převést. V této verzi hry se za ně nedá platit skutečnými penězi. Případná online verze může mít vlastní podmínky.'],
        ['7. Software třetích stran', 'Hra používá open-source software (například Electron a Chromium, knihovnu d3-delaunay), data hranic Natural Earth a písma Big Shoulders Display a IBM Plex Sans Condensed. Na ně se vztahují jejich vlastní licence.'],
        ['8. Bez záruky a omezení odpovědnosti', 'Hra je poskytována „tak, jak je“, bez záruky bezchybného provozu. Autor neodpovídá za ztrátu dat, ušlý zisk ani jinou škodu způsobenou používáním hry, a to v rozsahu, v jakém to právo dovoluje. Zákonná práva spotřebitele tím nejsou dotčena.'],
        ['9. Odinstalace a ukončení', 'Hru můžete kdykoli odinstalovat v nastavení Windows (Aplikace). Pokud tyto podmínky porušíte, licence zaniká. Vaše profily zůstávají na disku, dokud je sami nesmažete.'],
        ['10. Změny podmínek', 'Podmínky se mohou měnit. Aktuální znění je vždy v nastavení hry. Platí právo České republiky.']
      ]
    }
  };

  /* ---- engine ---- */
  const KEY = 'wf-web-lang';
  let lang = 'en';
  const orig = new WeakMap();
  const metaDesc = document.querySelector('meta[name="description"]');

  function detect() {
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (q === 'cs' || q === 'en') { localStorage.setItem(KEY, q); return q; }
    } catch (e) { }
    try { const s = localStorage.getItem(KEY); if (s === 'cs' || s === 'en') return s; } catch (e) { }
    const n = String((navigator.languages && navigator.languages[0]) || navigator.language || 'en').toLowerCase();
    return /^(cs|sk)/.test(n) ? 'cs' : 'en';
  }

  function apply(l) {
    lang = l === 'cs' ? 'cs' : 'en';
    try { localStorage.setItem(KEY, lang); } catch (e) { }
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (!orig.has(el)) orig.set(el, el.innerHTML);
      const k = el.dataset.i18n;
      el.innerHTML = lang === 'cs' && CS[k] !== undefined ? CS[k] : orig.get(el);
    });
    document.title = t('meta.title');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));
    document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
    document.querySelectorAll('[aria-label="Close"],[aria-label="Zavřít"]').forEach(b => b.setAttribute('aria-label', t('close')));
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  function t(key, vars) {
    let s = STR[lang][key] !== undefined ? STR[lang][key] : STR.en[key];
    if (s === undefined) return key;
    if (vars && typeof s === 'string') s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
    return s;
  }

  return { CS, STR, TERMS, detect, apply, t, get lang() { return lang; } };
})();
