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
# Opis rozgrywki

* Eksploracja: Przemierzaj korytarze labiryntu w poszukiwaniu wyjścia i ukrytych zasobów.
* Zagadki logiczne: Rozwiązuj systemowe zadania, aby odblokować przejścia do kolejnych sekcji.
* Unikanie zagrożeń: Omijaj patrole przeciwników oraz śmiercionośne pułapki rozmieszczone w całym systemie.
* Zarządzanie zdrowiem (HP): Uważaj na każdy krok – kontakt z wrogami lub pułapkami drastycznie obniża Twój pasek życia.
* Zbieranie przedmiotów: Odnajduj na mapie bonusy, które regenerują utracone HP i pozwalają kontynuować misję.

> Progresja: Każdy kolejny poziom zwiększa wyzwanie poprzez większe mapy, większą liczbę zagrożeń oraz bardziej wymagające zagadki logiczne.

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

# FABULA

Jesteś hakerem uwięzionym w cyfrowym labiryncie korporacji **NEON**. Twoim celem jest ucieczka. Aby otworzyć wyjście z każdego poziomu, musisz rozwiązać wszystkie zagadki logiczne. Korytarze tego miejsca są naszpikowane technologią, która nie wybacza żadnego błędu. Zostałeś tu zesłany za wykradzenie plików, które mogłyby pogrążyć całe imperium korporacji. Twoja jedyna szansa na przeżycie to bezszelestne przemykanie się między patrolami wrogich jednostek. Tylko odnalezienie drogi do centrum sterowania pozwoli Ci na trwałe usunięcie blokady i powrót do rzeczywistości.

---

## ⚠️ Zagrożenia i pomoc

### Wrogowie
* **Złe roboty:** Unikaj patrolujących korytarze jednostek wroga.

### Pułapki
* **Kapkany:** Uważaj na mechaniczne pułapki, które odbierają Twoje punkty HP.

### Wsparcie
* ❤️ **Serduszka:** Zbieraj, aby leczyć swoje HP.
* ⚡ **Pioruny:** Zbieraj, aby odnawiać staminę niezbędną do szybkiej ucieczki.




# Struktura projektu

```text
.
├── assets/                 # Zasoby globalne
│   ├── pulapka.png
│   ├── serce.png
│   └── stamina.png
├── poziomy/                # Logika i widoki poziomów
│   ├── bloczek.jpg
│   ├── potwor.png
│   ├── pulapka.png
│   ├── serce.png
│   ├── stamina.png
│   ├── zagadka.png
│   ├── poziomy.css
│   ├── poziom1.html
│   ├── poziom1.js
│   ├── poziom2.html
│   ├── poziom2.js
│   ├── poziom3.html
│   ├── poziom3.js
│   ├── poziom4.html
│   ├── poziom4.js
│   ├── poziom5.html
│   └── poziom5.js
├── skrypty/                # Wspólne skrypty funkcjonalne
│   └── movement.js
├── Pozostale/              # ui menu
│   ├── poz.css
│   └── poziomy.html
├── index.html              # Strona główna / menu gry
├── tytulowa.css
├── Frame.png
├── Projekt.pdf
├── Projekt.xlsx
├── README.md
├── harmonogram.pdf
└── README.md







