# Gra Labirynt

Gra Labirynt to 2D gra przeglądarkowa. Zadaniem gracza jest przechodzenie przez kolejne labirynty, zbieranie przedmiotów, omijanie przeciwników oraz rozwiązywanie zagadek. 
# Cel gry
---
Celem gry jest przechodzenie przez kolejne labirynty i dotarcie do wyjścia. Podczas gry trzeba zbierać przedmioty, unikać przeciwników oraz rozwiązywać zagadki, które odblokowują dalszą drogę.

---

# Technologie

- **HTML5** – tworzenie struktury gry oraz elementu canvas  
- **CSS** – wygląd menu, interfejsu i ekranów gry  
- **JavaScript** – obsługa ruchu postaci, przeciwników, kolizji i poziomów  

---

# Wymagania funkcjonalne

## Sterowanie postacią

- Sterowanie za pomocą klawiszy WASD lub strzałek  
- Poruszanie po planszy w określonych polach  
- Brak możliwości przechodzenia przez ściany  

## Poziomy i mapy

- Każdy poziom posiada punkt startowy i wyjście  
- Po dotarciu do mety wczytuje się kolejny poziom  
- Gra zawiera minimum 5 poziomów o rosnącym poziomie trudności  

## Przedmioty

- Przedmioty znikają po zebraniu  
- Zebrane elementy wpływają na statystyki gracza  

## Zagadki

- W wybranych miejscach pojawiają się pytania lub zagadki  
- Poprawna odpowiedź umożliwia dalsze przejście  
- Gra wyświetla komunikat o poprawnej lub błędnej odpowiedzi  

## Przeciwnicy i zdrowie

- Na mapie poruszają się przeciwnicy  
- Kontakt z potworem lub pułapką zmniejsza liczbę punktów życia  
- Po utracie całego HP pojawia się ekran „Game Over”  

## Menu i interfejs

- Ekran startowy z przyciskiem rozpoczęcia gry  
- Widoczny poziom, pasek zdrowia i zebrane przedmioty  
- Możliwość rozpoczęcia gry od nowa po wygranej lub przegranej  

---

# Wymagania techniczne

- Logika wykonana w czystym JavaScript  
- Renderowanie grafiki za pomocą elementu canvas  
- Płynne działanie  
- Podział projektu na kilka plików  
- Poprawne działanie w popularnych przeglądarkach internetowych

##  OPIS FABUŁY

Wcielasz się w postać  – zaawansowanego, autonomicznego programu ratunkowego, wyposażonego w sztuczną inteligencję. Zostałeś potajemnie aktywowany w najgłębszych strukturach superkomputera megakorporacji 

Twój stwórca, legendarny cyber-aktywista, został schwytany przez korporacyjne służby bezpieczeństwa. Przed całkowitym odcięciem zdołał jednak ukryć w systemie pakiety danych zawierające dowody na globalny spisek. Twoja misja to zabezpieczyć te pliki, rozwiązać sieciowe blokady logiczne i uciec z pułapki.

Cała architektura sieci Mainframe'u została zablokowana i przybrała formę gigantycznego, **ciemnofioletowo-błękitnego labiryntu Klastrów Szyfrujących (Encryption Blocks)**. Jedyne bezpieczne ścieżki to czarne , którymi musisz się poruszać. 

Ucieczka wymaga potężnego nakładu mocy. Każdy ruch obciąża Twój wirtualny procesor, zużywając **Staminę (Moc Obliczeniową)**. Jeśli stracisz całą **Stabilność Kodu (HP)** na skutek ataków lub doprowadzisz do przegrzania systemu z braku energii – Twój program zostanie bezpowrotnie skasowany (*Data Wipe*).

---


## 🔮 CYFROWE ARTEFAKTY (ZASOBY)

W labiryncie rozrzucone są kluczowe pakiety danych, które pozwalają Ci utrzymać odpowiednie parametry życiowe i progresować w grze:

* 💚 **Kapsułki Stabilizujące (Code Stabilizers) [HP]:** Zielone pakiety, które naprawiają uszkodzone sektory pamięci podręcznej i przywracają punkty zdrowia (**HP**).
* ⚡ **Ogniwa Energetyczne (Overclock Batteries) [STAMINA]:** Błękitne, jaskrawe kryształy, które błyskawicznie chłodzą procesor i odnawiają **Staminę**, pozwalając na dalszy, dynamiczny ruch.
* 🔑 **Klastry Kryptograficzne (Data Keys):** Świecące dyski (klucze) niezbędne do autoryzacji i odblokowania przejść do kolejnych warstw Mainframe'u.
* 🧠 **Deszyfratory (Decryption Decks):** Fioletowe, rotujące trójkąty. Ich zebranie uruchamia **Protokół Antywłamaniowy** – na ekranie pojawia się interfejs terminala z zagadką logiczną. Dopiero poprawna odpowiedź wyłącza lasery blokujące dalszą drogę.

---

## 🚫 SYSTEMY OBRONNE (ZAGROŻENIA)

* 🤖 **Strażnicy / Skanery (Sentinels):** Czerwone podprogramy patrolujące korytarze według sztywno określonych pętli kodu. Są przewidywalni, ale bezpośredni kontakt z nimi drastycznie niszczy  (-HP).
* 👾 **Monstra (Glitch Beasts):** Zmutowane, nieprzewidywalne bestie programowe (wirusy). Potrafią wykryć obecność Skryptu, porzucić swój rewir i aktywnie ścigać gracza przez korytarze labiryntu.
---
# Struktura projektu

```text
- index.html
- tytulowa.css

/poziomy
├── bloczek.jpg
├── poziomy.css
├── poziom1.html
├── poziom1.js
├── poziom2.html
├── poziom2.js
├── poziom3.html
├── poziom3.js
├── poziom4.html
├── poziom4.js
├── poziom5.html
└── poziom5.js

/skrypty
└── movement.js






